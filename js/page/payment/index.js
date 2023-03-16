import appendFooter from 'component/footer'
import {
  renderPaymentPage,
  renderEmptySlide,
  renderOnPurchaseSuccess,
  renderProductInfoArea,
  renderAccInfo,
  renderGetProfile,
  renderBankSlide,
} from './paymentRender'
import { logout } from 'api/request'
import {
  checkAccountBalance,
  deleteAccount,
  addAccount,
  buy,
} from 'api/banking'
import Swiper from 'swiper/swiper-bundle'
import 'swiper/swiper-bundle.css'
import { execDaumPostcode } from './addressPopup'
import DeliveryProfile from './DeliveryProfile'

export async function appendPayment(item) {
  document.body.append(renderPaymentPage(item))
  appendFooter()

  //[헤더]
  const headerLogoutBtn = document.querySelector('#page-header__logout')

  headerLogoutBtn.addEventListener('click', () => {
    logout(localStorage.getItem('token'))
    window.alert('로그아웃 완료!')
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('displayName')
    location.replace('/login')
  })

  //[배송]
  //배송지 추가 버튼 이벤트 핸들러
  const newDeliveryhProfileModal = document.querySelector(
    '#add-profile-modal-container'
  )
  const addDeliveryProfileBtn = document.querySelector(
    '#payment__add-delivery-profile'
  )
  addDeliveryProfileBtn.addEventListener('click', () => {
    newDeliveryhProfileModal.classList.remove('hidden')
    document.body.style.overflowY = 'hidden'
  })

  //[배송] 새 배송주소 프로필 추가
  const newDeliveryNameInput = document.querySelector(
    '#add-profile-modal__name-input'
  )
  //[배송] 수령인 이름 입력
  newDeliveryNameInput.addEventListener('input', onNewDeliveryNameInputChange)
  function onNewDeliveryNameInputChange(event) {
    const isError = isInvalid(event.target, 1, 5) //이름 2 ~ 5자
    toggleErrorMassege(event.target, isError)
  }
  //[배송] 휴대폰 번호 입력
  const newDeliveryPhoneInput = document.querySelector(
    '#add-profile-modal__phone-input'
  )
  newDeliveryPhoneInput.addEventListener('input', onNewDeliveryPhoneInputChange)
  function onNewDeliveryPhoneInputChange(event) {
    const isError = isInvalid(event.target, 9, 11) //휴대폰 번호 10 ~ 11자리
    toggleErrorMassege(event.target, isError)
  }
  /**
   * input의 입력 조건이 틀리면 에러 메시지 보여줌
   * 조건이 맞을 경우 에러 메시지 숨김
   * @param { HTMLInputElement } input
   * @param { Integer } minLength
   * @param { Integer } maxLength
   */
  function isInvalid(input, minLength, maxLength) {
    if (input.value.length <= minLength && input.value.length < maxLength) {
      return true
    }
    return false
  }
  function toggleErrorMassege(input, isError) {
    const errorSpanEl = input.closest('div').children[2]
    if (isError) {
      if (!errorSpanEl.classList.contains('isError')) {
        errorSpanEl.classList.add('isError')
      }
    } else {
      errorSpanEl.classList.remove('isError')
    }
  }

  //[배송] 우편 번호 입력
  const newDeliveryZipInput = document.querySelector(
    '#add-profile-modal-section__zipcode-input'
  )

  //주소 검색 api 스크립트
  const script = document.createElement('script')
  script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'
  document.head.appendChild(script)

  //[배송] 우편 번호 검색
  const searchByZipBtn = document.querySelector(
    '#add-profile-modal-section__search-btn'
  )
  script.onload = function () {
    searchByZipBtn.addEventListener('click', execDaumPostcode) //Daum 주소검색 팝업창 실행
  }

  //[배송] 주소 입력
  const newDeliveryAddressInput = document.querySelector(
    '#add-profile-modal-section__address-input'
  )
  //[배송] 상세 주소 입력
  const newDeliveryDetailInput = document.querySelector(
    '#add-profile-modal-section__detail-input'
  )
  //[배송] 기본 배송지 설정 체크박스
  const newDeliveryIsSetDefault = document.querySelector(
    '#add-profile-modal__set-default'
  )
  //[배송] 새 주소 저장하기 버튼
  const newDeliverySaveBtn = document.querySelector(
    '#add-profile-modal__btns-save-btn'
  )

  let deliveryProfiles //배송 프로필 목록
  let defaultDeliveryProfile //기본 설정된 배송 프로필

  updateDeliveryProfiles() // localStorage에서 확인 후 있으면 동기화

  const profileListEls = document.querySelector('.profile-modal__profiles')
  updateDeliveryProfilesEls() // 배송 프로필 변경 창 내의 리스트 렌더링
  toggleDefaultDeliveryProfile(defaultDeliveryProfile) // 배송 프로필 변경 창 내의 기본 배송지 표시 렌더링
  displaySelectDeliveryInfo() // 기본 설정된 배송 프로필에 따라 배송 정보란의 수령인, 연락처, 주소 렌더링

  console.log(defaultDeliveryProfile)

  newDeliverySaveBtn.addEventListener('click', onNewDeiliverySaveBtn)

  /**
   * 새 배송지 프로필 저장 버튼 이벤트 핸들러
   * 생성 조건
   * 1. 이름 2~5자 사이
   * 2. 휴대폰 번호 11자리 (미만 시 false)
   * 3. 우편 번호 검색api로 응답받은 데이터가 존재
   * 4. 이름과 휴대폰 번호는 필터링 되어서 저장됨(예시: 김**, 010-2***-****)
   * 5. DeliveryProfile 클래스 객체로 생성하고, deliveryProfiles 와 localStorage 동기화로 관리함
   *
   * @returns 정보 입력이 올바르지 않을 경우
   */
  function onNewDeiliverySaveBtn() {
    //입력 검사
    switch (true) {
      case !newDeliveryNameInput.value:
        alert('수령인 성함을 입력해주세요')
        return
      case !newDeliveryPhoneInput.value:
        alert('휴대전화 번호를 입력해주세요')
        return
      case newDeliveryPhoneInput.value.length < 11:
        alert('올바른 휴대전화 번호를 입력해주세요')
        return
      case !newDeliveryAddressInput.value:
        alert('주소를 입력해주세요')
        return
      case !newDeliveryZipInput.value:
        alert('우편번호를 입력해주세요')
        return
      case newDeliveryZipInput.value.length < 5:
        alert('올바른 우편번호를 입력해주세요')
        return
    }

    //이름, 휴대폰 번호 필터링
    const filteredName = `${newDeliveryNameInput.value.charAt(0)}${'*'.repeat(
      newDeliveryNameInput.value.length - 1
    )}`
    const filteredPhoneNum = `${newDeliveryPhoneInput.value.slice(
      0,
      3
    )}-${newDeliveryPhoneInput.value.charAt(3)}${'*'.repeat(3)}-${'*'.repeat(
      4
    )}`
    //객체 생성
    const newProfile = new DeliveryProfile(
      new Date().getTime(), // id
      filteredName, // name
      filteredPhoneNum, // phone
      newDeliveryAddressInput.value, // address
      newDeliveryDetailInput.value, // detail address
      newDeliveryZipInput.value // zipcode
    )
    // 사용자가 기본 배송지로 설정하기를 체크하였거나, 기본 배송지가 존재하지 않을 시 기본 배송지로 설정
    if (newDeliveryIsSetDefault.checked || deliveryProfiles.length === 0) {
      newProfile.updateIsDefault(true) // set as default
    }
    updateDeliveryProfiles() // update deliveryProfiles Array
    updateDeliveryProfilesEls()
    // 기본 배송지로 설정 되었을 경우 배송 프로필 변경에 기본 배송지 표시 렌더링
    if (newProfile.isDefault) toggleDefaultDeliveryProfile(newProfile)
    // 배송 정보란에 수령인, 휴대폰 번호, 주소 렌더링
    displaySelectDeliveryInfo()

    // reset all input fields
    newDeliveryNameInput.value = ''
    newDeliveryPhoneInput.value = ''
    newDeliveryAddressInput.value = ''
    newDeliveryDetailInput.value = ''
    newDeliveryZipInput.value = ''
    newDeliveryIsSetDefault.checked = false

    // close current modal
    newDeliveryhProfileModal.classList.add('hidden')
    document.body.style.overflowY = 'scroll'
  }

  /**
   * localStorage에 저장된 deliveryProfiles로 업데이트
   * @void
   */
  function updateDeliveryProfiles() {
    deliveryProfiles = []
    let localStorageData =
      JSON.parse(localStorage.getItem('deliveryProfiles')) || []
    if (localStorageData.length === 0 || !localStorageData) return
    localStorageData.forEach((data, index) => {
      deliveryProfiles.push(
        new DeliveryProfile(
          data.id,
          data.name,
          data.phone,
          data.address,
          data.detail,
          data.zip
        )
      )

      if (data.isDefault) {
        defaultDeliveryProfile = deliveryProfiles[index]
        deliveryProfiles[index].updateIsDefault(true)
      }
    })
  }

  //[배송] 배송 프로필 변경
  const getDeliveryProfileBtn = document.querySelector(
    '#payment__delivery-profile-get-btn'
  )
  const getProfilesModal = document.querySelector(
    '#get-profile-modal-container'
  )

  //[배송] 배송 프로필 변경 버튼 이벤트 핸들러
  getDeliveryProfileBtn.addEventListener('click', onGetDeliveryProfileBtn)
  function onGetDeliveryProfileBtn() {
    getProfilesModal.classList.remove('hidden')
    document.body.style.overflowY = 'hidden'
  }

  //[배송] 배송 프로필 변경

  /**
   *
   * @param { Number } id
   * @returns id와 일치하는 DeliveryProfile객체 || { 빈 객체 }
   */
  function getdeliveryProfile(id) {
    return deliveryProfiles.filter((profile) => profile.id === id).pop() || {}
  }
  /**
   * 배송 프로필 변경 창 HTMLSpanElement.class = 'mark' 토글
   * 기본 배송지로 설정되면 hidden이 제거되서 보이게 되는 기능
   * @void
   */
  function toggleDefaultDeliveryProfile(deliveryProfile) {
    if (!deliveryProfile) return
    const id = deliveryProfile.id
    Array.from(profileListEls.children).forEach((el) => {
      if (Number(el.dataset.id) === Number(id)) {
        el.querySelector('.mark').classList.remove('hidden')
      } else {
        el.querySelector('.mark').classList.add('hidden')
      }
    })
  }

  /**
   * 배송 정보 변경 창 HTMLLiElement 리렌더링
   * @returns 배송 정보 프로필이 없을 경우
   */
  function updateDeliveryProfilesEls() {
    if (deliveryProfiles.length === 0) return
    profileListEls.innerHTML = ''
    Array.from(deliveryProfiles).forEach((profile) => {
      const profileEl = renderGetProfile(profile)
      profileEl.addEventListener('click', onDeliveryProfileEls)
      if (profile.isDefault) {
        profileListEls.prepend(profileEl)
      } else {
        profileListEls.append(profileEl)
      }
    })
  }

  /**
   * 배송 정보 변경 창에 생성된 프로필 정보 이벤트 핸들러
   * 클릭 시 기본 배송지 설정 동기화
   * 배송 정보 변경 창 렌더링 업데이트
   * 배송 정보 렌더링 업데이트
   * @param { Event } event
   */
  function onDeliveryProfileEls(event) {
    const toDefaultId = Number(event.currentTarget.dataset.id)
    const toDefault = getdeliveryProfile(toDefaultId)
    toDefault.updateIsDefault(true)
    updateDeliveryProfiles()
    updateDeliveryProfilesEls()
    toggleDefaultDeliveryProfile(defaultDeliveryProfile)
    displaySelectDeliveryInfo()
  }

  /**
   * 배송 정보에 현재 설정된 배송 프로필의 정보 렌더링: 수령인, 연락처, 주소
   * @returns 기본 설정된 배송 프로필이 없을 경우
   */
  function displaySelectDeliveryInfo() {
    if (!defaultDeliveryProfile) return
    document.querySelector(
      '#delivery-info__name'
    ).textContent = `${defaultDeliveryProfile.name}`
    document.querySelector(
      '#delivery-info__phone'
    ).textContent = `${defaultDeliveryProfile.phone}`
    document.querySelector(
      '#delivery-info__address'
    ).textContent = `${defaultDeliveryProfile.address}`
  }
  //[배송 방법]
  let isDelivery = true
  document
    .querySelector('#delivery-method__delivery-select-btn')
    .addEventListener('click', () => {
      isDelivery = true
      updateAmountInfo()
    })

  document
    .querySelector('#delivery-method__storage-select-btn')
    .addEventListener('click', () => {
      isDelivery = false
      updateAmountInfo()
    })
  //[배송 방법] 배송 선택 효과
  const deliveryMethod = document.querySelector('.delivery-method__methods')
  const selectableBtns = deliveryMethod.querySelectorAll('.selectable')
  Array.from(selectableBtns).forEach((btn) => {
    btn.addEventListener('click', (event) => {
      siblings(event.currentTarget).forEach((sibling) => {
        sibling.classList.remove('selected')
      })
      event.currentTarget.classList.add('selected')
    })
  })
  //[최종 주문 정보]

  function updateAmountInfo() {
    document.querySelector('#order-content__transaction-fee').textContent = `${
      isDelivery ? (2400).toLocaleString() + '원' : '-'
    }`
    document.querySelector('#order-content__delivery-charge').textContent = `${
      isDelivery ? (3000).toLocaleString() + '원' : '-'
    }`
    document.querySelector('#order-content__total-amount').textContent = `${
      isDelivery
        ? (item.price + 2400 + 3000).toLocaleString()
        : item.price.toLocaleString()
    }원`
    document.querySelector('#checklist-total__amount').textContent = `${
      isDelivery
        ? (item.price + 2400 + 3000).toLocaleString()
        : item.price.toLocaleString()
    }원`
  }
  //[결제 방법]

  //[결제 방법]카드 버튼 선택 효과
  const generalPaymentList = document.querySelector('.method-general__grid')
  const generalPaymentCards = generalPaymentList.querySelectorAll(
    '.method-general__grid-item'
  )

  Array.from(generalPaymentCards).forEach((card) => {
    card.addEventListener('click', (event) => {
      siblings(event.currentTarget).forEach((sibling) => {
        sibling.children[0].classList.remove('selected')
      })
      event.currentTarget.children[0].classList.add('selected')
    })
  })

  //[모달 공통]
  const closeBtns = document.querySelectorAll('.modal-close')
  Array.from(closeBtns).forEach((closeBtn) => {
    closeBtn.addEventListener('click', (event) => {
      event.target.closest('aside').classList.add('hidden')
      document.body.style.overflowY = 'scroll'
    })
  })
  //[계좌 정보 모달]
  const accModalBtn = document.querySelector('#method-simple__acc-btn')
  accModalBtn.addEventListener('click', onAddAccBtn)
  const accModal = document.querySelector('#acc-modal-container')
  function onAddAccBtn() {
    accModal.classList.remove('hidden')
    document.body.style.overflowY = 'hidden'

    const modalAccAddBtn = document.querySelector('#acc-modal__add-acc-btn')
    modalAccAddBtn.addEventListener('click', onModalAccAddBtn)
  }

  //[계좌 정보 모달]캐러셀
  const swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    centeredSlides: true,
    spaceBetween: 10,
    slidesPerView: 1,
  })

  //[계좌 정보 모달] 캐러셀 업데이트

  let accountList
  let accountIndex = 0
  const slideWrapper = document.querySelector('#acc-modal__swiper-wrapper')
  const accInfoText = document.querySelector('#method-simple__acc-info')
  const emptySlide = renderEmptySlide()
  //init
  await updateBankSlides()
  updateAccountInfo()

  //[계좌 정보 모달] accountList를 서버 응답 데이터와 동기화
  async function updateAccountList() {
    const res = await checkAccountBalance()
    const newAccountList = Array.from(res.accounts)
    accountList = newAccountList
  }

  //결제 방법 계좌 선택란에 현재 선택된 계좌로 업데이트
  function updateAccountInfo() {
    accInfoText.innerHTML = ''
    accInfoText.append(renderAccInfo(getSelectedAccount()))
  }
  //[계좌 정보 모달] 계좌 선택
  function updateAccountSelect() {
    accountIndex = swiper.activeIndex
  }
  //[계좌 정보 모달] 선택 계좌 반환
  function getSelectedAccount() {
    if (accountList.length === 0) return null
    return accountList[accountIndex]
  }
  /**
   * 로컬스토리지에 있는 token으로 현재 사용자의 계좌 조회
   * 응답 데이터로 슬라이드 생성해서 추가하는 함수
   */
  async function updateBankSlides() {
    slideWrapper.innerHTML = ''
    swiper.removeAllSlides()
    accountList = []

    const res = await checkAccountBalance()
    accountList = Array.from(res.accounts)

    if (accountList.length > 0) {
      accountList.forEach((account, index) => {
        const slide = renderBankSlide(account, index)
        swiper.appendSlide(slide)
        slide.addEventListener('dblclick', onSlideDoubleClicked)
      })
    }
    // 계좌 추가 슬라이드

    swiper.appendSlide(emptySlide)
    updateAccountSelect()
  }
  //[계좌 정보 모달] 계좌 삭제 이벤트 핸들러
  async function onSlideDoubleClicked(e) {
    const targetSlideIndex = Number(e.currentTarget.children[0].dataset.n)
    const targetAccount = accountList[targetSlideIndex]
    const confirmRes = confirm(
      `정말로 삭제하시겠어요?\n은행 이름: ${targetAccount.bankName}\n계좌 번호: ${targetAccount.accountNumber}`
    )
    //삭제 동의 시 삭제 진행
    if (confirmRes) {
      const res = await deleteAccount(accountList[targetSlideIndex])
      if (res) {
        await updateAccountList()
        await updateBankSlides()
        updateAccountSelect()
        updateAccountInfo()
      } else {
        alert('계좌 삭제 실패')
      }
    }
  }
  /**
   * 로컬스토리지에 있는 token으로 현재 사용자의 계좌 조회
   * 응답 데이터로 슬라이드 생성해서 추가하는 함수
   */

  //선택된 계좌 저장
  document
    .querySelector('#acc-modal__save-btn')
    .addEventListener('click', () => {
      accModal.classList.add('hidden')
      document.body.style.overflowY = 'scroll'
      updateAccountSelect()
      updateAccountInfo()
    })

  //[계좌 추가 모달] 계좌 추가 모달 디스플레이 버튼
  const newAccModal = document.querySelector('#newAcc-modal-container')

  async function onModalAccAddBtn() {
    newAccModal.classList.remove('hidden')

    const newAccBankSelect = document.querySelector('#newAcc-modal__bankCode')
    const newAccDigitInput = document.querySelector('#newAcc-modal__acc-digit')
    newAccBankSelect.addEventListener('change', (event) => {
      newAccDigitInput.setAttribute(
        'maxlength',
        `${getAccLength(event.target.value)}`
      )
    })
  }
  const newAccCloseBtn = document.querySelector(
    '#newAcc-modal-header__close-btn'
  )
  newAccCloseBtn.addEventListener('click', () => {
    newAccModal.classList.add('hidden')
  })

  const newAccBankCode = document.querySelector('#newAcc-modal__bankCode')
  const newAccDigitInput = document.querySelector('#newAcc-modal__acc-digit')
  const newAccPhoneInput = document.querySelector('#newAcc-modal__phone')
  const newAccSigInput = document.querySelector('#newAcc-modal__sig')
  const newAccAddBtn = document.querySelector('#newAcc-modal__add-btn')
  newAccSigInput.addEventListener('change', () => {
    newAccAddBtn.classList.toggle('disabled') //추가 버튼 효과 전환
  })

  newAccAddBtn.addEventListener('click', async () => {
    if (
      newAccBankCode.value &&
      newAccDigitInput.value &&
      newAccDigitInput.value.length === getAccLength(newAccBankCode.value) &&
      newAccPhoneInput.value &&
      newAccPhoneInput.value.length === 11 &&
      newAccSigInput.value
    ) {
      //input 값을 토대로 객체 생성
      const obj = {
        bankCode: newAccBankCode.value,
        accountNumber: newAccDigitInput.value,
        phoneNumber: newAccPhoneInput.value,
        signature: true,
      }

      // 객체로 계좌 생성 요청
      const res = await addAccount(obj)
      if (res.ok) {
        await updateBankSlides() // 현재 사용자 계좌 조회 후 슬라이드 업데이트
        alert('계좌 추가 완료')
        newAccModal.classList.add('hidden')
      } else {
        alert('중복된 은행 계좌는 추가할 수 없습니다.')
      }
      resetNewAccInputs()
    } //outer if절 끝
    else {
      alert(
        '계좌 정보 미입력\n은행 선택 및 계좌번호 또는 핸드폰 번호 자릿수를 확인하시고 서명 확인을 체크해주세요. '
      )
    }
  })
  function resetNewAccInputs() {
    newAccBankCode.value = 'default'
    newAccDigitInput.value = ''
    newAccDigitInput.setAttribute('maxlength', 0)
    newAccPhoneInput.value = ''
    newAccSigInput.chekced = false
  }

  //[구매]]

  //[결제 버튼]
  document
    .querySelector('#payment-final-btn')
    .addEventListener('click', async () => {
      if (getSelectedAccount().balance < item.price) {
        alert('잔액이 부족합니다.')
        return
      }
      const isPaid = await buy(item, getSelectedAccount().id)
      if (isPaid) {
        const paymentContent = document.querySelector('.payment-content')
        paymentContent.innerHTML = ''
        paymentContent.append(renderProductInfoArea(item))
        paymentContent.append(renderOnPurchaseSuccess(item, false))

        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      } else {
        alert('구매 실패')
      }
    })

  /**
   * 은행 별 계좌번호 자릿수를 반환해주는 함수
   * @param { String } bankCode
   * @returns { Integer } 계좌번호 자릿수
   */
  function getAccLength(bankCode) {
    switch (bankCode) {
      case '004':
        return 12

      case '088':
        return 12

      case '020':
        return 13

      case '081':
        return 14

      case '089':
        return 12

      case '090':
        return 12

      case '011':
        return 13

      default:
        return 0
    }
  }

  //el의 형제요소들을 배열로 반환하는 함수
  function siblings(el) {
    return [...el.parentElement.children].filter((node) => node != el)
  }
}
