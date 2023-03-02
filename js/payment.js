import appendFooter from './footer'
import {
  renderPaymentPage,
  renderBankSlide,
  renderEmptySlide,
  renderOnPurchaseSuccess,
  renderProductInfoArea,
} from './paymentRender'
import * as Banking from './banking'
import Swiper from 'swiper/swiper-bundle'
import 'swiper/swiper-bundle.css'


export async function appendPayment(item) {
  document.body.innerHTML = ''
  document.body.append(renderPaymentPage(item))
  appendFooter()

  
  //[상품 정보]
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
  document.querySelector('#delivery-method__delivery-select-btn')
  .addEventListener('click', () => {
    isDelivery = true
    updateAmountInfo()
  })

  document.querySelector('#delivery-method__storage-select-btn')
  .addEventListener('click', () => {
    isDelivery = false
    updateAmountInfo()
  })
  const selectableBtns = document.querySelectorAll('.selectable')
  Array.from(selectableBtns).forEach(btn => {
    btn.addEventListener('click', event => {
      siblings(event.currentTarget).forEach( sibling => {
        sibling.classList.remove('selected')
      })
      event.currentTarget.classList.add('selected')
    })
  })
  //[주문 정보]
  
  function updateAmountInfo() {
    document.querySelector('#order-content__transaction-fee')
    .textContent = `${isDelivery
      ? (2400).toLocaleString() + "원"
      : "-"}`
    document.querySelector('#order-content__delivery-charge')
    .textContent = `${isDelivery
      ? (3000).toLocaleString() + "원"
      : "-"}`
    document.querySelector('#order-content__total-amount')
    .textContent =  `${isDelivery 
      ? (item.price + 2400 + 3000).toLocaleString()
      : (item.price).toLocaleString()
      }원`
    document.querySelector('#checklist-total__amount')
    .textContent =  `${isDelivery 
      ? (item.price + 2400 + 3000).toLocaleString()
      : (item.price).toLocaleString()
      }원`
  }
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
    spaceBetween: 20,
    slidesPerView: 1,
  })

  document
    .querySelector('.swiper-button-prev')
    .addEventListener('click', () => {
      swiper.slidePrev()
    })

  document
    .querySelector('.swiper-button-next')
    .addEventListener('click', () => {
      swiper.slideNext()
    })
  //[계좌 정보 모달] 캐러셀 업데이트
  const slideWrapper = document.querySelector('#acc-modal__swiper-wrapper')
  await updateBankSlides()

  /**
   * 로컬스토리지에 있는 token으로 현재 사용자의 계좌 조회
   * 응답 데이터로 슬라이드 생성해서 추가하는 함수
   */
  async function updateBankSlides() {
    slideWrapper.innerHTML = ''
    const accList = await Banking.checkAccountBalance()

    swiper.removeAllSlides()
    if (accList.accounts.length > 0) {
      Array.from(accList.accounts).forEach((account) => {
        const slide = renderBankSlide(account)
        swiper.appendSlide(slide)
      })
    }
    // 계좌 추가 슬라이드
    const emptySlide = renderEmptySlide()
    swiper.appendSlide(emptySlide)
  }

  document
    .querySelector('#acc-modal__save-btn')
    .addEventListener('click', () => {
      accModal.classList.add('hidden')
      document.body.style.overflowY = 'scroll'
    })

  //[계좌 정보 모달] 계좌 추가 모달 디스플레이 버튼
  const addNewAccBtn = document.querySelector('#acc-modal__add-acc-btn')
  addNewAccBtn.addEventListener('click', onModalAccAddBtnClicked)

  function onModalAccAddBtnClicked() {
    const newAccModal = document.querySelector('#newAcc-modal-container')
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

  //[계좌 추가 모달]
  const newAccBankCode = document.querySelector('#newAcc-modal__bankCode')
  const newAccDigitInput = document.querySelector('#newAcc-modal__acc-digit')
  const newAccPhoneInput = document.querySelector('#newAcc-modal__phone')
  const newAccSigInput = document.querySelector('#newAcc-modal__sig')
  const newAccAddBtn = document.querySelector('#newAcc-modal__add-btn')

  newAccAddBtn.addEventListener('click', async () => {
    if (
      newAccBankCode.value &&
      newAccDigitInput.value &&
      newAccPhoneInput.value &&
      newAccSigInput.value
    ) {
      const obj = {
        //input 값을 토대로 객체 생성
        bankCode: newAccBankCode.value,
        accountNumber: newAccDigitInput.value,
        phoneNumber: newAccPhoneInput.value,
        signature: newAccSigInput.value === 'on' ? true : false,
      }

      await Banking.addAccount(obj) // 객체로 계좌 생성 요청
      await updateBankSlides() // 현재 사용자 계좌 조회 후 슬라이드 업데이트
      alert('계좌 추가 완료')
    }
  })

  newAccSigInput.addEventListener('change', () => {
    //추가 버튼 효과 전환용
    newAccAddBtn.classList.toggle('unabled')
  })

  //[구매]
  document
    .querySelector('#payment-final-btn')
    .addEventListener('click', async () => {
      const accId = swiper.slides[swiper.activeIndex].children[0]
      const key = accId.dataset.bank
      const isPaid = await Banking.buy(test, key)
      if (isPaid) {
        alert(`${test.title}구매 완료`)
        const paymentContent = document.querySelector('.payment-content')
        paymentContent.innerHTML = ""
        paymentContent.append(renderProductInfoArea(test))
        paymentContent.append(renderOnPurchaseSuccess(test, false))

        window.scrollTo({
          top: 0,
          behavior: 'smooth'
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

  function siblings(el) {
    return [...el.parentElement.children].filter(node => node != el);
  }
  
}
