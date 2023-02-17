import * as Admin from './adminRequest'
import * as AdminRender from './adminRender.js'
import { searchByTag, searchByName} from '../request.js'


//[init admin page]
AdminRender.appendAdminPage()

//[Nav]
const navToggle = document.querySelector('#admin-page-nav__toggle-btn')
const adminNav = document.querySelector('.admin-page-nav')
navToggle.addEventListener('click', onNavToggle)

function onNavToggle(e) {
  adminNav.classList.contains('onToggle')
    ? (e.target.textContent = '<<')
    : (e.target.textContent = '>>')
  adminNav.classList.toggle('onToggle')
}

const modal = document.querySelector('.admin-modal')
const addBtn = document.querySelector('#admin-page-btns__add-btn')
const editBtn = document.querySelector('#admin-page-btns__edit-btn')
const editInput = document.querySelector('#admin-edit-input')
const removeBtn = document.querySelector('#admin-page-btns__remove-btn')
const removeInput = document.querySelector('#admin-remove-input')

addBtn.addEventListener('click', onAddBtnClciekd)
editBtn.addEventListener('click', onEditBtnClicked)
removeBtn.addEventListener('click', onRemoveBtnClicked)

function onAddBtnClciekd() {
  modal.innerHTML = ""
  modal.append(AdminRender.renderAdminModal())
  toggleModal()
}

async function onRemoveBtnClicked() {
  if(!removeInput.value) return
  await Admin.removeItem(removeInput.value)
}

async function onEditBtnClicked() {
  if(!editInput.value) return
  const item = await Admin.searchIndividualItem(editInput.value)
  modal.innerHTML = ""
  modal.append(AdminRender.renderAdminModal(true))

  toggleModal()
  const editDoneBtn = document.querySelector('#admin-modal-btns__edit-done-btn')
  editDoneBtn.addEventListener('click', onEditBtnClicked)
}



function toggleModal() {
  modal.classList.toggle('active')
}

//[Modal]
const closeBtn = document.querySelector('#admin-modal-btns__close-btns')
const addDoneBtn = document.querySelector('#admin-modal-btns__add-done-btn')

const canvas = document.querySelector('#admin-canvas')
const ctx = canvas.getContext('2d')
const titleInput = document.querySelector('#admin-title-input')
const descriptionInput = document.querySelector('#admin-description-input')
const priceInput = document.querySelector('#admin-price-input')
const tagsInput = document.querySelector('#admin-tags-input')
const fileInput = document.querySelector('#admin-file-input')

closeBtn.addEventListener('click', toggleModal)
addDoneBtn.addEventListener('click', onAddDoneBtnClicked)

fileInput.addEventListener('change', onFileChange)

function onFileChange(e) {
  const file = e.target.files[0]
  const url = URL.createObjectURL(file)
  const image = document.createElement('img')
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  image.src = url
  image.onload = function () {
    canvas.width = image.width
    canvas.height = image.height
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
  }
}

async function getBase64(file) {
  const reader = new FileReader()
  console.log(file)
  console.log(reader)
  const test = await reader.readAsDataURL(file) 
  console.log(test)
  return test
}


async function onAddDoneBtnClicked() {
  await Admin.addItem({
    title: titleInput.value,
    description: descriptionInput.value,
    tags: tagsInput.value,
    price: parseInt(priceInput.value),
    thumbnailBase64: await getBase64(fileInput.files[0])
  })

  titleInput.value = ''
  descriptionInput.value = ''
  tagsInput.value = ''
  priceInput.value = ''
  fileInput.value = ''
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

//Search
const searchInput = document.querySelector('#admin-search__input')
const searchContainer = document.querySelector('.admin-page__search-container')
const searchAllBtn = document.querySelector('#admin-search__search-all-btn')
const searchByTagBtn = document.querySelector('#admin-search__search-tag-btn')
const searchByNameBtn = document.querySelector('#admin-search__search-name-btn')
searchByTagBtn.addEventListener('click', appendSearchByTag)
searchAllBtn.addEventListener('click', appendSearchAll)
searchByNameBtn.addEventListener('click', appendSearchByName)
async function appendSearchByTag() {
  const tagName = searchInput.value
  if (!tagName) return
  searchContainer.innerHTML = ""
  
  const result = await searchByTag(tagName)
  const arr = [...result]
  
  searchContainer.append(AdminRender.renderSearchResult(arr))
  const count = document.querySelector('#admin-search-count')
  count.textContent = arr.length
  const itemIds = document.querySelectorAll('.admin-item-id')
  copyOnClick(itemIds)
}

async function appendSearchByName() {
  const name = searchInput.value
  if (!name) return
  searchContainer.innerHTML = ""
  
  const result = await searchByName(name)
  const arr = [...result]
  
  searchContainer.append(AdminRender.renderSearchResult(arr))
  const count = document.querySelector('#admin-search-count')
  count.textContent = arr.length
  const itemIds = document.querySelectorAll('.admin-item-id')
  copyOnClick(itemIds)
}

async function appendSearchAll() {
  searchContainer.innerHTML = ""
  const result = await Admin.searchAllItems()
  const arr = [...result]

  searchContainer.append(AdminRender.renderSearchResult(arr))
  const count = document.querySelector('#admin-search-count')
  count.textContent = arr.length
  const itemIds = document.querySelectorAll('.admin-item-id')
  copyOnClick(itemIds)
}

function copyOnClick(itemIds) {
  Array.from(itemIds).forEach((item) => {
    item.addEventListener('click', (e) => {
      navigator.clipboard.writeText(e.target.textContent)
    })
  })
}