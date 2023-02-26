import appendFooter from '../footer'
import { searchIndividualItem } from '../adminRequest'
import {
  renderAddProfileModal,
  renderAccountModal,
  renderDelieveryProfilesModal,
  renderGetProfilesModal,
  renderPaymentPage,
} from './paymentRender'

let isModalOpen = false
window.addEventListener('click', event => {

  if (isModalOpen && 
    !event.target.closest('.modal') && 
    event.target.closest('.modal-container')) {

    event.target.closest('.modal-container')
    .classList.add('hidden')
    isModalOpen = false
  }
})
;(async () => {
  const test = await searchIndividualItem("yEYoSkzsRVPMZG9ZlqYI")
  document.body.append(renderPaymentPage(test))
  const page = document.querySelector('.payment-page')
  // page.append(renderAccountModal())
  const addAccBtn = document.querySelector('#method-simple__acc-btn')
  addAccBtn.addEventListener('click', onAddAccBtnClicked)
  document.body.append(renderGetProfilesModal())

})();


function onAddAccBtnClicked() {
  // console.log('test')
  const accModal = document.querySelector('#acc-modal-container')
  accModal.classList.remove('hidden')
  document.body.style.overflowY = 'hidden'
  isModalOpen = true
  const modalAccAddBtn = document.querySelector('#acc-modal__add-acc-btn')
  modalAccAddBtn.addEventListener('click', onModalAccAddBtnClicked)
  const modalCloseBtn = document.querySelector('#acc-modal-header__close-btn')
  modalCloseBtn.addEventListener('click', event => {
    // console.log("test")
    accModal.classList.add('hidden')
    document.body.style.overflowY = 'scroll'
    isModalOpen = false;
  })

}

function onModalAccAddBtnClicked(event) {
  
   
}