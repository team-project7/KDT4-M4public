
import * as Admin from "./adminRequest";

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

const editBtn = document.querySelector("#admin-edit-btn")
const addBtn = document.querySelector("#admin-add-btn")
const searchBtn = document.querySelector("#admin-search-btn")
const editDoneBtn = document.querySelector("#admin-edit-done-btn")
const removeBtn = document.querySelector("#admin-remove-btn")
const addDoneBtn = document.querySelector("#admin-add-done-btn")
get()
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
   searchList.append(li)
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