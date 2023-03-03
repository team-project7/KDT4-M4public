import appendFooter from './footer'
import {
  renderPaymentPage,
  renderBankSlide,
  renderEmptySlide,
  renderOnPurchaseSuccess,
  renderProductInfoArea,
  renderAccInfo,
} from './paymentRender'
import { logout } from './request'
import * as Banking from './banking'
import Swiper from 'swiper/swiper-bundle'
import 'swiper/swiper-bundle.css'

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
  const addDeliveryProfileBtn = document.querySelector(
    '#payment__add-delivery-profile'
  )
  addDeliveryProfileBtn.addEventListener('click', () => {
    const profileContainer = document.querySelector(
      '#add-profile-modal-container'
    )
    profileContainer.classList.remove('hidden')
    document
      .querySelector('#add-profile-modal-header__close-btn')
      .addEventListener('click', () => {
        profileContainer.classList.add('hidden')
      })
    document
      .querySelector('#add-profile-modal__btns-cancel-btn')
      .addEventListener('click', () => {
        profileContainer.classList.add('hidden')
      })
  })

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
  const generalPaymentCards = generalPaymentList.querySelectorAll('.selectable')

  Array.from(generalPaymentCards).forEach( card => {
    card.addEventListener('click', (event) => {
      siblings(event.target.parentElement).forEach((sibling) => {
        sibling.children[0].classList.remove('selected')
      })
      event.target.classList.add('selected')
    })
  })
  //[계좌 정보 모달]
  const accModalBtn = document.querySelector('#method-simple__acc-btn')
  accModalBtn.addEventListener('click', onAddAccBtnClicked)
  const accModal = document.querySelector('#acc-modal-container')
  function onAddAccBtnClicked() {
    accModal.classList.remove('hidden')
    document.body.style.overflowY = 'hidden'

    const modalAccAddBtn = document.querySelector('#acc-modal__add-acc-btn')
    modalAccAddBtn.addEventListener('click', onModalAccAddBtnClicked)
    const modalCloseBtn = document.querySelector('#acc-modal-header__close-btn')
    modalCloseBtn.addEventListener('click', (event) => {
      accModal.classList.add('hidden')
      document.body.style.overflowY = 'scroll'
    })
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
    const res = await Banking.checkAccountBalance()
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
    return accountList[accountIndex]
  }
  //[계좌 정보 모달] 계좌 삭제 이벤트 핸들러
  async function onSlideDoubleClicked(e) {
    const targetSlideIndex = parseInt(e.currentTarget.children[0].dataset.n)
    const targetAccount = accountList[targetSlideIndex]
    const confirmRes = confirm(`정말로 삭제하시겠어요?\n은행 이름: ${targetAccount.bankName}\n계좌 번호: ${targetAccount.accountNumber}`)
    //삭제 동의 시 삭제 진행
    if(confirmRes) {
      const res = await Banking.deleteAccount(accountList[targetSlideIndex])
      if (res) {
        await updateAccountList()
        await updateBankSlides()
        updateAccountSelect()
        updateAccountInfo()
      }
      else {
        alert("계좌 삭제 실패")
      }
    }
  }
  /**
   * 로컬스토리지에 있는 token으로 현재 사용자의 계좌 조회
   * 응답 데이터로 슬라이드 생성해서 추가하는 함수
   */
  async function updateBankSlides() {
    slideWrapper.innerHTML = ''
    swiper.removeAllSlides()
    accountList = []

    const res = await Banking.checkAccountBalance()
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

  function onModalAccAddBtnClicked() {
    newAccModal.classList.remove('hidden')
    const newAccBankSelect = document.querySelector('#newAcc-modal__bankCode')
    const newAccDigitInput = document.querySelector('#newAcc-modal__acc-digit')
    newAccBankSelect.addEventListener('change', (event) => {
      newAccDigitInput.setAttribute(
        'maxlength',
        `${getAccLength(event.target.value)}`
      )
    })
    const newAccModalCloseBtn = document.querySelector(
      '#newAcc-modal-header__close-btn'
    )
    newAccModalCloseBtn.addEventListener('click', () => {
      newAccModal.classList.add('hidden')
    })
  }

  const newAccBankCode = document.querySelector('#newAcc-modal__bankCode')
  const newAccDigitInput = document.querySelector('#newAcc-modal__acc-digit')
  const newAccPhoneInput = document.querySelector('#newAcc-modal__phone')
  const newAccSigInput = document.querySelector('#newAcc-modal__sig')
  const newAccAddBtn = document.querySelector('#newAcc-modal__add-btn')
  newAccSigInput.addEventListener('change', () => {
    newAccAddBtn.classList.toggle('disabled') //추가 버튼 효과 전환
  })

  newAccAddBtn.addEventListener('click', async () => {
    console.log(newAccBankCode.value)
    console.log(newAccDigitInput.value)
    console.log(newAccDigitInput.value.length === getAccLength(newAccBankCode.value))
    console.log(newAccPhoneInput.value)
    console.log(newAccPhoneInput.value.length === 11)
    console.log(newAccSigInput.checked)
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
      const res = await Banking.addAccount(obj)
      if(res.ok) {
        await updateBankSlides() // 현재 사용자 계좌 조회 후 슬라이드 업데이트
        alert('계좌 추가 완료')
        newAccModal.classList.add('hidden')
      }
      else {
        alert("중복된 계좌는 추가할 수 없습니다.")
      }
      resetNewAccInputs()
    } //if절 끝
    else {
      alert(
        '계좌 정보 미입력\n은행 선택 및 계좌번호 또는 핸드폰 번호 자릿수를 확인하시고 서명 확인을 체크해주세요. '
      )
    }
  })
  function resetNewAccInputs() {
    newAccBankCode.value = "default"
    newAccDigitInput.value = ""
    newAccDigitInput.setAttribute('maxlength', 0)
    newAccPhoneInput.value = ""
    newAccSigInput.value = false
  }


  //[구매]]

  //[결제 버튼]
  document
    .querySelector('#payment-final-btn')
    .addEventListener('click', async () => {
      if(getSelectedAccount().balance < item.price) {
        alert("잔액이 부족합니다.")
        return
      }
      const isPaid = await Banking.buy(item, getSelectedAccount().id)
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
