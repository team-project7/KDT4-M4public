import appendFooter from '../footer'
import { searchIndividualItem } from '../adminRequest'
import {
  renderAddProfileModal,
  renderAccountModal,
  renderDelieveryProfilesModal,
  renderGetProfilesModal,
  renderPaymentPage,
  renderBankSlide,
  renderBankSlides,
  renderEmptySlide,
} from './paymentRender'
import * as Banking from './banking'
import Swiper from 'swiper'


;(async () => {
  const test = await searchIndividualItem('yEYoSkzsRVPMZG9ZlqYI')
  document.body.append(renderPaymentPage(test))
  const page = document.querySelector('.payment-page')

  /**
   * 
   */
  const swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    centeredSlides: true,
    spaceBetween: 20,
    // slideClass
    // slidesPerView: 1
  }) //1. <-- slide배열에 추가가 안됨
  swiper.on('init', () => {
    console.log('swiper init')
  }) //일단 안됨

  // console.log(swiper.slides)
  // console.log(swiper)
  // swiper.addSlide(HTMLElement) //<--
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

  //[계좌 정보 모달]
  const accModalBtn = document.querySelector('#method-simple__acc-btn')
  accModalBtn.addEventListener('click', onAddAccBtnClicked)

  function onAddAccBtnClicked() {
    const accModal = document.querySelector('#acc-modal-container')
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
  /**
   * 
   */
  const slideWrapper = document.querySelector('#acc-modal__swiper-wrapper')
  await updateBankSlides()

  async function updateBankSlides() {
    slideWrapper.innerHTML = ''
    const accList = await Banking.checkAccountBalance()
    console.log(swiper)
    // swiper.removeAllSlides(); //<-- 2. 요기가 Swiper 객체 인식못함
    if (accList.accounts.length > 0) {
      Array.from(accList.accounts).forEach((account) => {
        const slide = renderBankSlide(account)
        slideWrapper.append(slide)
        swiper.addSlide(slide) //<--
      })
    }
    const emptySlide = renderEmptySlide()
    slideWrapper.append(emptySlide)

    // swiper.addSlide(emptySlide); //<--

    // 변경 사항을 적용하고 Swiper 객체를 업데이트
    swiper.update(); //<--
  }

  //[계좌 추가 모달]
  const addNewAccBtn = document.querySelector('#acc-modal__add-acc-btn')
  addNewAccBtn.addEventListener('click', onModalAccAddBtnClicked)

  function onModalAccAddBtnClicked(event) {
    console.log('test')
    const newAccModal = document.querySelector('#newAcc-modal-container')
    newAccModal.classList.remove('hidden')
    const newAccBankSelect = document.querySelector('#newAcc-modal__bankCode')
    const newAccDigitInput = document.querySelector('#newAcc-modal__acc-digit')
    newAccBankSelect.addEventListener('change', (event) => {
      newAccDigitInput.setAttribute(
        'maxlength',
        `${getAccLength(event.target.value)}`
      )
      // newAccAddBtn.setAttribute('disabled', 'false')
    })
    const newAccModalCloseBtn = document.querySelector(
      '#newAcc-modal-header__close-btn'
    )
    newAccModalCloseBtn.addEventListener('click', () => {
      newAccModal.classList.add('hidden')
    })
  }
  /**
   * KB국민은행 004 3,2,4,3 12자리
   * 신한은행 088 3,3,6 12자리
   * 우리은행 020 4,3,6 13자리
   * 하나은행 081 3,6,5 14자리
   * 케이뱅크 089 3,3,6 12자리
   * 카카오뱅크 090 4,2,7 13자리
   * NH농협은행 011 3,4,4,2 13자리
   */
  const newAccBankCode = document.querySelector('#newAcc-modal__bankCode')
  const newAccDigitInput = document.querySelector('#newAcc-modal__acc-digit')
  const newAccPhoneInput = document.querySelector('#newAcc-modal__phone')
  const newAccSigInput = document.querySelector('#newAcc-modal__sig')
  const newAccAddBtn = document.querySelector('#newAcc-modal__add-btn')

  const res = await Banking.checkAccountBalance()

  newAccAddBtn.addEventListener('click', async () => {
    if (
      newAccBankCode.value &&
      newAccDigitInput.value &&
      newAccPhoneInput.value &&
      newAccSigInput.value
    ) {
      const obj = {
        bankCode: newAccBankCode.value,
        accountNumber: newAccDigitInput.value,
        phoneNumber: newAccPhoneInput.value,
        signature: newAccSigInput.value === 'on' ? true : false,
      }

      await Banking.addAccount(obj)
      alert('계좌 추가 완료')
    }
  })

  newAccSigInput.addEventListener('change', () => {
    newAccAddBtn.classList.toggle('unabled')
  })

  document
    .querySelector('#payment-final-btn')
    .addEventListener('click', async () => {
      const isPaid = await Banking.buy(test, account)
    })
})()

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
