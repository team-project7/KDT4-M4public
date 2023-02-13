import * as Admin from "./adminRequest";
// import appendFooter from "./footer";

// appendFooter();
// const inputFileEl = document.querySelector('input')

const title = document.querySelector('#title')

const description = document.querySelector('#description')
const tags = document.querySelector('#tags')
const price = document.querySelector('#price')
const list = document.getElementById('result')
const count = document.getElementById("count")

async function get() {
  // await requestAddItem();
  const result = await Admin.getItemList();
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
   list.append(li)
  })
  count.textContent = `${arr.length}`
}
const inputFileEl = document.querySelector('input')
inputFileEl.addEventListener('change', event => {

  const file = inputFileEl.files[0]
  const reader = new FileReader()
  let profileImgBase64
  reader.readAsDataURL(file)
  reader.addEventListener('load', e => {
    profileImgBase64 = e.target.result
    
    Admin.addItem({
      title: title.value,
      price: parseInt(price.value),
      description: description.value,
      tags: tags.value.split(","),
      thumbnailBase64: profileImgBase64
    })
  })
  list.innerHTML = ""
  get();
  
})

