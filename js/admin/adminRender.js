export function renderAdminModal(edit = false) {
  const adminModal = document.createElement('aside')
  adminModal.classList.add('admin-modal')

  adminModal.innerHTML = 
  /*html*/`
    <section class="admin-modal-info">
      <div class="admin-modal-info__props">
        <label for="admin-title-input">Title</label>
        <input id="admin-title-input" type="text" for="price" placeholder="Title"/>
        <label for="admin-description-input">Desc</label>
        <input id="admin-description-input" type="text" for="desc" placeholder="Item Description"/>
        <label for="admin-price-input">Price</label>
        <input id="admin-price-input" type="text" for="price" placeholder="125200"/>
        <label for="admin-tags-input">Tags</label>
        <input id="admin-tags-input" type="text" for="tags" placeholder="Tag1, Tag2, ..." />
      </div>
      <div class="admin-modal-info__image">
        <label for="image">Image</label>
        <input id="admin-file-input" type="file" for="image" />
        <canvas id="admin-canvas"></canvas>
      </div>
    </section>
    <div class="admin-modal-btns">
      <div class="flex-space"></div>
      <button id="admin-modal-btns__${edit ? 'edit' : 'add'}-done-btn">DONE</button>
      <button id="admin-modal-btns__close-btns">X</button>
    </div>
  `
  return adminModal
}


export function appendAdminPage() {
  document.body.append(renderAdminModal())
  document.body.append(renderNavBar());
  document.body.append(renderSearchArea());
  document.body.append(renderSearchContainer());
}

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
    <button class="top-btn" id="admin-page-search__totop-btn">TOP</button>
  `
  resultArray.forEach( (item, index) => {
    searchResultList.append(renderItem(item, index))
  });
  return searchResultList
}

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

function renderSearchContainer() {
  const sectionEl = document.createElement('section')
  sectionEl.classList.add('admin-page__search-container')
  return sectionEl
}