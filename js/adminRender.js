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
  const adminModalWrapper = document.createElement('div')
  adminModalWrapper.classList.add('admin-add-modal-wrapper')
  adminModalWrapper.setAttribute('id', 'admin-modal-add')
  adminModalWrapper.append(renderAdminAddModal())

  const adminEditModalWrapper = document.createElement('div')
  adminEditModalWrapper.classList.add('admin-edit-modal-wrapper')
  adminEditModalWrapper.setAttribute('id', 'admin-modal-edit')
  adminEditModalWrapper.append(renderAdminEditModal())

  document.body.append(adminModalWrapper)
  document.body.append(adminEditModalWrapper)
  document.body.append(renderNavBar());
  document.body.append(renderSearchArea());
  document.body.append(renderSearchContainer());
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
        <label for="admin-add-title-input">Title</label>
        <input id="admin-add-title-input" type="text" for="price" placeholder="Title"/>
        <label for="admin-add-description-input">Desc</label>
        <input id="admin-add-description-input" type="text" for="desc" placeholder="Item Description"/>
        <label for="admin-add-price-input">Price</label>
        <input id="admin-add-price-input" type="text" for="price" placeholder="125200"/>
        <label for="admin-add-tags-input">Tags</label>
        <input id="admin-add-tags-input" type="text" for="tags" placeholder="Tag1, Tag2, ..." />
      </div>
      <div class="admin-modal-info__image">
        <label for="image">Image</label>
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
        <span id="admin-edit-id"></span>
        <label for="admin-edit-title-input">Title</label>
        <input id="admin-edit-title-input" type="text" for="price" placeholder="Title"/>
        <label for="admin-edit-description-input">Desc</label>
        <input id="admin-edit-description-input" type="text" for="desc" placeholder="Item Description"/>
        <label for="admin-edit-price-input">Price</label>
        <input id="admin-edit-price-input" type="text" for="price" placeholder="125200"/>
        <label for="admin-edit-tags-input">Tags</label>
        <input id="admin-edit-tags-input" type="text" for="tags" placeholder="Tag1, Tag2, ..." />
      </div>
      <div class="admin-modal-info__image">
        <label for="image">Image</label>
        <input id="admin-edit-file-input" type="file" for="image" />
        <canvas id="admin-edit-canvas"></canvas>
      </div>
    </section>
    <div class="admin-modal-btns">
      <div class="flex-space"></div>
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
  if(resultArray.length === 0) return document.createElement('span').innerHTML = "no result"
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
    <span>${item.price}</span>
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
    <button id="admin-page-nav__toggle-btn">
      <<
    </button>
    <section class="admin-page-btns">
      <button id="admin-page-btns__add-btn">
        ADD
      </button>
      <button id="admin-page-btns__edit-btn">
        EDIT
      </button>
      <input id="admin-edit-input" type=text placeholder="ID to EDIT">
      <button id="admin-page-btns__remove-btn">
        REMOVE
      </button>
      <input  id="admin-remove-input" type=text placeholder="ID to REMOVE">
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
    <input type=text id="admin-search__input">
    <div class="admin-search__btn-wrapper">
      <button id="admin-search__search-all-btn">모든 상품 보기</button>
      <button id="admin-search__search-tag-btn">태그 검색</button>
      <button id="admin-search__search-name-btn">이름 검색</button>
    </div>
    <span id="admin-search-count"></span>
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