function appendModal() {
  const adminModal = document.createElement('aside')
  adminModal.classList.add('admin-modal')
  adminModal.innerHTML = 
  /*html*/`
    <section class="admin-modal-info">
      <div class="admin-modal-info__props">
        <label for="title">Title</label>
        <input id="admin-title-input" type="text" for="title" />
        <label for="desc">Desc</label>
        <input id="admin-description-input" type="text" for="desc" />
        <label for="price">Price</label>
        <input id="admin-price-input" type="text" for="price" />
        <label for="tags">Tags</label>
        <input id="admin-tags-input" type="text" for="tags" />
      </div>
      <div class="admin-modal-info__image">
        <label for="image">Image</label>
        <input id="admin-file-input" type="file" for="image" />
        <canvas id="admin-canvas"></canvas>
      </div>
    </section>
    <div class="admin-modal-btns">
      <div class="flex-space"></div>
      <button id="admin-modal-btns__add-done-btn">ADD</button>
      <button id="admin-modal-btns__close-btns">X</button>
    </div>
  `
  return document.body.append(adminModal)
}

export function appendAdminPage() {
  appendNavBar();
  appendModal();
  const searchArea = document.createElement('header')
  searchArea.classList.add('admin-page__header')
  searchArea.innerHTML = 
  /*html*/`
    <input type=text id="admin-search-input">
  `
  const searchResult = document.createElement('main')
  searchResult.classList.add('admin-page__main-container')
}

export function renderSearchResult(resultArray) {
  if(resultArray.length === 0) return document.createElement('span').innerHTML = "no result"
  const searchResultList = document.createElement('ul')
  searchResultList.classList.add('admin-page-search')
  resultArray.forEach( item => {
    resultArray.append(renderItem(item))
  });
  return searchResultList
}

function renderItem(item) {
  const searchItem = document.createElement('li')
  searchItem.classList.add('admin-page-search__item')
  searchItem.innerHTML = 
  /*html*/`
    <div class="item-info">
      <span>ID: ${item.id}</span>
      <span>Title: ${item.title}</span>
      <span>Desc: ${item.description}</span>
      <span>Price: ${item.price}</span>
      <span>Tags: ${item.tags}</span>
    </div>
    <div class="admin-modal-info__image">
      <img src="${item.thumbnail}" />
    </div>
  `
  return searchItem
}

function appendNavBar() {
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
      <input type=text placeholder="ID to EDIT">
      <button id="admin-page-btns__remove-btn">
        REMOVE
      </button>
      <input type=text placeholder="ID to REMOVE">
    </section>
  `
  return document.body.append(adminPageNavBar)
}