import  noProfile  from "../image/no-profile.png"
import logo from "../image/kream-logo.png"
/**
 * appends 
 * - modal for an item addition
 * - modal for an item editing
 * - navigation bar
 * - search area
 * - search result area
 * @void
 */
export function appendAdminPage() {
  const homeBtn = document.createElement('button')
  homeBtn.classList.add('admin-home-btn')
  const img = new Image()
  img.src = logo
  homeBtn.append(img)
  homeBtn.onclick = () => location.replace('/')

  const adminModalWrapper = document.createElement('div')
  adminModalWrapper.classList.add('admin-add-modal-wrapper')
  adminModalWrapper.setAttribute('id', 'admin-modal-add')
  adminModalWrapper.append(renderAdminAddModal())

  const adminEditModalWrapper = document.createElement('div')
  adminEditModalWrapper.classList.add('admin-edit-modal-wrapper')
  adminEditModalWrapper.setAttribute('id', 'admin-modal-edit')
  adminEditModalWrapper.append(renderAdminEditModal())

  const adminPageContainer = document.createElement('div')
  adminPageContainer.classList.add('admin-page')
  adminPageContainer.append(
    homeBtn,
    adminModalWrapper,
    adminEditModalWrapper,
    renderSearchArea(),
    renderSearchContainer()
  )
  document.body.append(adminPageContainer)
}

/**
 * modal for an item addition
 * @returns <aside class="admin-modal"></aside>
 */
function renderAdminAddModal() {
  const adminModal = document.createElement('aside')
  adminModal.classList.add('admin-modal')

  adminModal.innerHTML = 
  /*html*/`
    <section class="admin-modal-info">
      <div class="admin-modal-info__props">
        <label for="admin-add-title-input">・Title</label>
        <input id="admin-add-title-input" type="text" for="price" placeholder="Title"/>
        <label for="admin-add-description-input">・Desc</label>
        <input id="admin-add-description-input" type="text" for="desc" placeholder="Item Description"/>
        <label for="admin-add-price-input">・Price</label>
        <input id="admin-add-price-input" type="text" for="price" placeholder="125200"/>
        <label for="admin-add-tags-input">・Tags</label>
        <input id="admin-add-tags-input" type="text" for="tags" placeholder="Tag1, Tag2, ..." />
      </div>
      <div class="admin-modal-info__image">
        <label for="image">・Image</label>
        <input id="admin-add-file-input" type="file" for="image" />
        <canvas id="admin-add-canvas"></canvas>
      </div>
    </section>
    <div class="admin-modal-btns">
      <div class="flex-space"></div>
      <button id="admin-add-modal-btns__add-done-btn">ADD</button>
      <button id="admin-add-modal-btns__close-btns">X</button>
    </div>
  `
  
  return adminModal
}

/**
 * modal for an item editing
 * @returns <aside class="admin-modal"></aside>
 */
function renderAdminEditModal() {
  const adminEditModal = document.createElement('aside')
  adminEditModal.classList.add('admin-modal')

  adminEditModal.innerHTML = 
  /*html*/`
    <section class="admin-modal-info">
      <div class="admin-modal-info__props">
        <span>・ID</span>
        <span id="admin-edit-id"></span>
        <label for="admin-edit-title-input">・Title</label>
        <input id="admin-edit-title-input" type="text" for="price" placeholder="Title"/>
        <label for="admin-edit-description-input">・Desc</label>
        <input id="admin-edit-description-input" type="text" for="desc" placeholder="Item Description"/>
        <label for="admin-edit-price-input">・Price</label>
        <input id="admin-edit-price-input" type="text" for="price" placeholder="125200"/>
        <label for="admin-edit-tags-input">・Tags</label>
        <input id="admin-edit-tags-input" type="text" for="tags" placeholder="Tag1, Tag2, ..." />
      </div>
      <div class="admin-modal-info__image">
        <label for="image">・Image</label>
        <input id="admin-edit-file-input" type="file" for="image" />
        <canvas id="admin-edit-canvas"></canvas>
      </div>
    </section>
    <div class="admin-modal-btns">
      <div class="flex-space"></div>
      <button id="admin-page-btns__remove-btn">REMOVE</button>
      <button id="admin-edit-modal-btns__edit-done-btn">EDIT</button>
      <button id="admin-edit-modal-btns__close-btns">X</button>
    </div>
  `

  return adminEditModal
}

/**
 * 
 * @param { Response[<item>] } resultArray 
 * @returns Array.length ? <span>no result</span> : <ul class="admin-page-search"></ul>
 */
export function renderSearchResult(resultArray) {
  if(resultArray.length === 0) return document.createElement('span').innerHTML = "일치하는 항목이 없습니다."
  const searchResultList = document.createElement('ul')
  searchResultList.classList.add('admin-page-search')
  searchResultList.innerHTML = 
  /*html*/`
   
    <div class="admin-page-search__row-header">
      <span>Index</span>
      <span>Image</span>
      <span>ID</span>
      <span>Title</span>
      <span>Description</span>
      <span>Price</span>
      <span>Tags</span>
    </div>
  `
  resultArray.forEach( (item, index) => {
    searchResultList.append(renderItem(item, index))
  });
  return searchResultList
}

/**
 * 
 * @param { Object <item>} item 
 * @param { Integer } index 
 * @returns <li class="admin-page-search__item"></li>
 */
function renderItem(item, index) {
  const searchItem = document.createElement('li')
  searchItem.classList.add('admin-page-search__item')
  searchItem.innerHTML = 
  /*html*/`
    <span>${index}</span>
    <div class="admin-page-search__item-image">
      <img src="${item.thumbnail}" />
    </div>
    <span class="admin-item-id">${item.id}</span>
    <span>${item.title}</span>
    <span>${item.description}</span>
    <span>${item.price.toLocaleString()}원</span>
    <span>${item.tags}</span>
  `
  return searchItem
}

/**
 * 
 * @returns <nav class="admin-page-nav"></nav>
 */
function renderNavBar() {
  const adminPageNavBar = document.createElement('nav')
  adminPageNavBar.classList.add('admin-page-nav')
  adminPageNavBar.innerHTML = 
  /*html*/`
    <button class="toggle" id="admin-page-nav__toggle-btn">
      <span>➜</span>
    </button>
    <section class="admin-page-btns">
      <button title="ADD" id="admin-page-btns__add-btn">
        +
      </button>
      <div class="admin-page-btns__edit">
        <button title="EDIT" id="admin-page-btns__edit-btn">
          ✎
        </button>
        <input id="admin-edit-input" type=text placeholder="ID to EDIT">
      </div>
      <div class="admin-page-btns__remove">
        <button title="REMOVE" id="admin-page-btns__remove-btn">
          -
        </button>
        <input  id="admin-remove-input" type=text placeholder="ID to REMOVE">
      </div>
    </section>
  `
  return adminPageNavBar
}

/**
 * 
 * @returns <section class="admin-search"></section>
 */
function renderSearchArea() {
  const searchEl = document.createElement('section')
  searchEl.classList.add('admin-search')
  searchEl.innerHTML = 
  /*html*/`
    <input type=text id="admin-search__input" autocomplete="off" placeholder="태그 또는 이름을 입력하세요...">
    <div class="admin-search__btn-wrapper">
      <button id="admin-search__search-all-btn">모든 상품 보기</button>
      <button id="admin-search__search-tag-btn">태그 검색</button>
      <button id="admin-search__search-name-btn">이름 검색</button>
      <button id="admin-search__search-all-users">모든 사용자 보기</button>
    </div>
    <span id="admin-search-count"></span>
    <button id="admin-page-btns__add-btn">상품 추가</button>
  `
  return searchEl
}

/**
 * 
 * @returns <section class="admin-page__search-container"></section>
 */
function renderSearchContainer() {
  const sectionEl = document.createElement('section')
  sectionEl.classList.add('admin-page__search-container')
  return sectionEl
}

export function renderSearchAllUsers(resultArray) {
  if(resultArray.length === 0) return document.createElement('span').innerHTML = "no result"
  const searchResultList = document.createElement('ul')
  searchResultList.classList.add('admin-page-search')
  searchResultList.innerHTML = 
  /*html*/`
   
    <div class="admin-page-search__row-header">
      <span>Index</span>
      <span>Image</span>
      <span>Email</span>
      <span>Display Name</span>
    </div>
  `
  resultArray.forEach( (user, index) => {
    searchResultList.append(renderSearchUser(user, index))
  });
  return searchResultList
}

function renderSearchUser(user, index) {
  const liEl = document.createElement('li')
  liEl.classList.add("admin-page-search__item")
  const indexEl = document.createElement('span')
  indexEl.textContent = `${index}`
  
  const imgWrapper = document.createElement('div')
  imgWrapper.classList.add('admin-page-search__item-profile')
  
  const profileImg = new Image()
  profileImg.alt = "User Image"
  profileImg.src = user.profileImg 
  ? user.profileImg 
  : noProfile


  profileImg.addEventListener('load', () => {
    imgWrapper.append(profileImg)
  })
  
  
  const email = document.createElement('span')
  email.classList.add('.admin-user-email')
  email.textContent = `${user.email}`
  const displayName = document.createElement('span')
  displayName.textContent = `${user.displayName}`

  liEl.append(indexEl, imgWrapper, email, displayName)
  return liEl
}