import * as Header from "../header.js"
import * as Admin from "./adminRequest";
import * as AdminRender from "./adminRender.js"
import { doc } from "prettier";
// Header.appendHeadersub()

AdminRender.appendAdminPage()

const navToggle = document.querySelector("#admin-page-nav__toggle-btn")
const adminNav = document.querySelector(".admin-page-nav")
navToggle.addEventListener("click", onNavToggle)

function onNavToggle(e) {
  adminNav.classList.contains("onToggle") 
  ? e.target.textContent = "<<"
  : e.target.textContent = ">>" 
  adminNav.classList.toggle('onToggle')
}

const titleInput = document.querySelector("#admin-title-input")
const descriptionInput = document.querySelector("#admin-description-input")
const priceInput = document.querySelector("#admin-.price-input")
const tagsInput = document.querySelector("#admin-tags-input")
const fileInput = document.querySelector("#admin-file-input")
const removeInput = document.querySelector("#admin-remove-input")
const productIdEl = document.querySelector("#admin-product-id")
const searchList = document.querySelector('#search-result')
const count = document.querySelector("#count")
const canvas = document.querySelector("#admin-canvas")
const ctx = canvas.getContext("2d");


const addBtn = document.querySelector("#admin-page-btns__add-btn")
const removeBtn = document.querySelector("#admin-page-btns__remove-btn")
const editBtn = document.querySelector("#admin-page-btns__edit-btn")
const addDoneBtn = document.querySelector("#admin-add-done-btn")
const editDoneBtn = document.querySelector("#admin-edit-done-btn")
const closeBtn = document.querySelector("#admin-modal-btns__close-btns")
const searchBtn = document.querySelector("#admin-search-btn")

addBtn.addEventListener('click', () =>{
  const modal = document.querySelector(".admin-modal")
  modal.classList.add('active')
})

closeBtn.addEventListener('click', () =>{
  const modal = document.querySelector(".admin-modal")
  modal.classList.remove('active')
})

fileInput.addEventListener('change', onFileChange)
function onFileChange(e) {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);
  const image = document.createElement('img');  
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  image.src = url;
  image.onload = function () {
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  };

}

function getBase64(file) {
  const reader = new FileReader()
  return reader.readAsDataURL(file)
}

async function get() {
  const result = await Admin.searchAllItems();
  const arr = [...result]

  arr.forEach( el => {
    const id = document.createElement('div')
    id.textContent = `id: ${el.id}`
    const title = document.createElement('div')
    title.textContent = `title: ${el.title}`
    const price = document.createElement('div')
    price.textContent = `price: ${el.price}`
    const description = document.createElement('div')
    description.textContent = `description: ${el.description}`
    const tags = document.createElement('div')
    tags.textContent = `tags: ${el.tags}`
    const thumbnailBase64 = document.createElement('div')
    const img = new Image();
    img.src = el.thumbnail 
    thumbnailBase64.append(img ? img : undefined)
    const li = document.createElement('li')
   li.append(id, title, price, description, tags, img)
   document.body.append(li)
  })
  count.textContent = `${arr.length}`
}

async function onAddDoneBtnClicked() {
  await Admin.addItem({
    id: productIdEl.value,
    title: titleInput.value,
    description: descriptionInput.value,
    tags: tags.value.trim().split(""),
    price: parseInt(priceInput.value),
    thumbnailBase64: getBase64(fileInput.files[0])
  })
  .then(resolve => {
    addDoneBtn.classList.remove("loading")
    addDoneBtn.style.animation = "";
  })
  .catch(error => {
    addDoneBtn.style.animation = "";
  })

  titleInput.textContent = ""
  descriptionInput.textContent = ""
  tagsInput.textContent = ""
  priceInput.textContent = ""
  fileInput.value = ""
}

async function onAddDoneBtnClicked() {
  await Admin.editItem({
    title: titleInput.value,
    description: descriptionInput.value,
    tags: tags.value.trim().split(""),
    price: parseInt(priceInput.value),
    thumbnailBase64: fileBase64
  })
  .then(resolve => {
    addDoneBtn.classList.remove("loading")
    addDoneBtn.style.animation = "";
  })
  .catch(error => {
    addDoneBtn.style.animation = "";
  })

  titleInput.textContent = ""
  descriptionInput.textContent = ""
  tagsInput.textContent = ""
  priceInput.textContent = ""
  fileInput.value = ""
  fileBase64 = null
}

async function onRemoveBtnClicked() {
  await Admin.removeItem(removeInput.value)
  .then(resolve => {
    addDoneBtn.classList.remove("loading")
    addDoneBtn.style.animation = "";
  })
  .catch(error => {
    addDoneBtn.style.animation = "";
  })

  titleInput.textContent = ""
  descriptionInput.textContent = ""
  tagsInput.textContent = ""
  priceInput.textContent = ""
  fileInput.value = ""
  fileBase64 = null
}