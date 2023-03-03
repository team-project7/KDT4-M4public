import * as Admin from './adminRequest'
import { appendAdminPage, renderSearchResult, renderSearchAllUsers } from './adminRender.js'
import { searchByTag, searchByName } from './request.js'

export function adminPage() {
  //[init admin page]
  appendAdminPage()

  //[Modal]
  //ADD ids followed by admin-add
  const closeAddModal = document.querySelector(
    '#admin-add-modal-btns__close-btns'
  )
  const addDoneBtn = document.querySelector(
    '#admin-add-modal-btns__add-done-btn'
  )

  const addModalCanvas = document.querySelector('#admin-add-canvas')
  const addTitleInput = document.querySelector('#admin-add-title-input')
  const addDescriptionInput = document.querySelector(
    '#admin-add-description-input'
  )
  const addPriceInput = document.querySelector('#admin-add-price-input')
  const addTagsInput = document.querySelector('#admin-add-tags-input')
  const addFileInput = document.querySelector('#admin-add-file-input')

  closeAddModal.addEventListener('click', toggleAddModal)
  addDoneBtn.addEventListener('click', onAddDoneBtnClicked)
  addFileInput.addEventListener('change', onAddFileChange)

  /**
   * Create new item based on input filed values in add modal
   * reset input values after addition request
   * @void
   */
  async function onAddDoneBtnClicked() {
    if (
      addTitleInput.value &&
      addDescriptionInput.value &&
      addTagsInput.value &&
      addPriceInput.value &&
      addFileInput.value
    ) {
      const file = await getBase64(addFileInput.files[0]).then((base64) => {
        return base64
      })

      await Admin.addItem({
        title: addTitleInput.value,
        description: addDescriptionInput.value,
        tags: addTagsInput.value,
        price: parseInt(addPriceInput.value),
        thumbnailBase64: `${file}`,
      })

      addTitleInput.value = ''
      addDescriptionInput.value = ''
      addTagsInput.value = ''
      addPriceInput.value = ''
      addFileInput.value = ''
      resetCanvas(addModalCanvas)
    } else {
      alert('Please fill all information')
    }
  }

  /**
   *
   * @param { File } ImageFile
   * @returns ImageFile to base64
   */
  function getBase64(file) {
    if (!file) return
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = function (event) {
        resolve(event.target.result)
      }
      reader.onerror = function (error) {
        reject(error)
      }
      reader.readAsDataURL(file)
    })
  }

  /**
   * to draw image on file input change
   * @param { FileEvent }
   */
  function onAddFileChange(fileEvent) {
    const file = fileEvent.target.files[0]
    drawFileOnCanvas(file, addModalCanvas)
  }

  /**
   * draw file or url of image in given canvas
   * @param { File || URL } arg
   * @param { HTMLElement.canvas } modalCanvas
   */
  function drawFileOnCanvas(arg, modalCanvas) {
    let url
    if (arg instanceof File) {
      url = URL.createObjectURL(arg)
    } else {
      url = arg
    }
    const image = document.createElement('img')
    resetCanvas(modalCanvas)
    const ctx = modalCanvas.getContext('2d')
    image.src = url
    image.onload = function () {
      modalCanvas.width = image.width
      modalCanvas.height = image.height
      ctx.drawImage(image, 0, 0, modalCanvas.width, modalCanvas.height)
    }
  }

  /**
   * reset canvas
   * @param { HTMLElement.canvas } modalCanvas
   */
  function resetCanvas(modalCanvas) {
    const ctx = modalCanvas.getContext('2d')
    ctx.clearRect(0, 0, modalCanvas.width, modalCanvas.height)
  }

  //EDIT ids followed by admin-edit
  const closeEditModal = document.querySelector(
    '#admin-edit-modal-btns__close-btns'
  )
  const editDoneBtn = document.querySelector(
    '#admin-edit-modal-btns__edit-done-btn'
  )
  const editModalCanvas = document.querySelector('#admin-edit-canvas')
  const editTitleInput = document.querySelector('#admin-edit-title-input')
  const editDescriptionInput = document.querySelector(
    '#admin-edit-description-input'
  )
  const editPriceInput = document.querySelector('#admin-edit-price-input')
  const editTagsInput = document.querySelector('#admin-edit-tags-input')
  const editFileInput = document.querySelector('#admin-edit-file-input')

  closeEditModal.addEventListener('click', toggleEditModal)
  editDoneBtn.addEventListener('click', onEditDoneBtnClicked)
  editFileInput.addEventListener('change', onEditFileChange)

  /**
   * drawing image file from file input on canvas in modal
   * @param { FileEvent }
   */
  function onEditFileChange(fileEvent) {
    const file = fileEvent.target.files[0]
    drawFileOnCanvas(file, editModalCanvas)
  }

  /**
   * request edit
   * @void
   */
  async function onEditDoneBtnClicked() {
    if (
      editTitleInput.value &&
      editDescriptionInput.value &&
      editTagsInput.value &&
      editPriceInput.value &&
      editFileInput.value
    ) {
      const file = await getBase64(editFileInput.files[0]).then((base64) => {
        return base64
      })
      await Admin.editItem({
        id: `${editModalId.textContent}`,
        title: editTitleInput.value,
        description: editDescriptionInput.value,
        tags: editTagsInput.value,
        price: parseInt(editPriceInput.value),
        thumbnailBase64: `${file}`,
      })

      editTitleInput.value = ''
      editDescriptionInput.value = ''
      editTagsInput.value = ''
      editPriceInput.value = ''
      editFileInput.value = ''
      resetCanvas(editModalCanvas)
      toggleEditModal()
    } else {
      alert('Please fill all information')
    }
  }

  //[Nav]
  const navToggle = document.querySelector('#admin-page-nav__toggle-btn')
  const adminNav = document.querySelector('.admin-page-nav')
  navToggle.addEventListener('click', onNavToggle)

  function onNavToggle(e) {
    adminNav.classList.toggle('onToggle')
  }

  const addModalWrapper = document.querySelector('.admin-add-modal-wrapper')
  const editModalWrapper = document.querySelector('.admin-edit-modal-wrapper')
  const editModalId = document.querySelector('#admin-edit-id')
  const addBtn = document.querySelector('#admin-page-btns__add-btn')
  const editBtn = document.querySelector('#admin-page-btns__edit-btn')
  const editInput = document.querySelector('#admin-edit-input')
  const removeBtn = document.querySelector('#admin-page-btns__remove-btn')
  const removeInput = document.querySelector('#admin-remove-input')

  addBtn.addEventListener('click', onAddBtnClciekd)
  editBtn.addEventListener('click', onEditBtnClicked)
  removeBtn.addEventListener('click', onRemoveBtnClicked)

  /**
   * display add modal
   * @void
   */
  function onAddBtnClciekd() {
    toggleAddModal()
  }

  /**
   * request delete
   * @void
   */
  async function onRemoveBtnClicked() {
    onNavToggle()
    if (!removeInput.value) return
    await Admin.removeItem(removeInput.value)
    removeInput.value = ''
  }

  /**
   * search item by editInput.value, which is its id
   * set input fields of edit modal by responded data
   * display edit modal
   * reset editInput.value
   * @void
   */
  async function onEditBtnClicked() {
    onNavToggle()
    if (!editInput.value) return

    const item = await Admin.searchIndividualItem(editInput.value)
    setEditModalValues(item)
    toggleEditModal()
    editInput.value = ''
  }

  /**
   * set input fields of edit modal by given item props
   * @param { Response<item> } item
   * @void
   */
  function setEditModalValues(item) {
    editModalId.textContent = item.id
    editTitleInput.value = item.title
    editDescriptionInput.value = item.description
    editTagsInput.value = item.tags
    editPriceInput.value = parseInt(item.price)
    drawFileOnCanvas(item.thumbnail, editModalCanvas)
  }

  /**
   * display add modal
   * @void
   */
  function toggleAddModal() {
    addModalWrapper.classList.toggle('active')
  }

  /**
   * display edit modal
   * @void
   */
  function toggleEditModal() {
    editModalWrapper.classList.toggle('active')
  }

  //[Search]
  const searchInput = document.querySelector('#admin-search__input')
  const searchContainer = document.querySelector('.admin-page__search-container')

  const searchAllBtn = document.querySelector('#admin-search__search-all-btn')
  const searchByTagBtn = document.querySelector('#admin-search__search-tag-btn')
  const searchByNameBtn = document.querySelector('#admin-search__search-name-btn')
  const searchAllUsersBtn = document.querySelector('#admin-search__search-all-users')
  

  searchByTagBtn.addEventListener('click', appendSearchByTag)
  searchAllBtn.addEventListener('click', appendSearchAll)
  searchByNameBtn.addEventListener('click', appendSearchByName)
  searchAllUsersBtn.addEventListener('click', appendSearchAllUsers)
  

  /**
   * request search by tag name and append rendered results
   * @returns nothing when searchInput field is empty
   */
  async function appendSearchByTag() {
    let tagName = searchInput.value
    if (!tagName) {
      alert("검색어가 필요합니다!")
      return
    }
    tagName = capitalizeEveryWord(tagName)
    const result = await searchByTag(tagName)
    const arr = [...result]

    searchContainer.innerHTML = ''
    searchContainer.append(renderSearchResult(arr))
    const count = document.querySelector('#admin-search-count')
    count.textContent = arr.length
    const itemIds = document.querySelectorAll('.admin-item-id')
    copyOnClick(itemIds)
  }

  /**
   * request search by name and append rendered results
   * @returns nothing when searchInput field is empty
   */
  async function appendSearchByName() {
    let name = searchInput.value
    if (!name) {
      alert("검색어가 필요합니다!")
      return
    }
    name = capitalizeEveryWord(name)
    
    const result = await searchByName(name)
    const arr = [...result]

    searchContainer.innerHTML = ''
    searchContainer.append(renderSearchResult(arr))
    const count = document.querySelector('#admin-search-count')
    count.textContent = arr.length
    const itemIds = document.querySelectorAll('.admin-item-id')
    copyOnClick(itemIds)
  }
  /**
   * 영문 첫 글자를 대문자로 변환 후 반환
   * @param { string } 변환할 문자열 
   * @returns 변환된 문자열 반환
   */
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  /**
   * 영문 첫 글자와 공백 이후의 첫 글자를 대문자로 변환 후 반환
   * @param { string } 변환할 문자열 
   * @returns 변환된 문자열 반환
   */
  function capitalizeEveryWord(str) {
    let words = str.split(" ");
    for(let i = 0; i < words.length; i++) {
      words[i] = capitalize(words[i]);
    }
    return words.join(" ");
  }
  /**
   * request search all items and append rendered results
   * @void
   */
  async function appendSearchAll() {
    searchContainer.innerHTML = ''
    const result = await Admin.searchAllItems()
    const arr = [...result]

    searchContainer.append(renderSearchResult(arr))
    const count = document.querySelector('#admin-search-count')
    count.textContent = arr.length
    const itemIds = document.querySelectorAll('.admin-item-id')
    copyOnClick(itemIds)
    
    document.querySelector('.admin-page-search__row-header')
    .style.setProperty('$--admin-grid-unit', 7)
  }

  /**
   * add event handler to copy id to clipboard on click
   * @param { item.id } itemIds
   * @void
   */
  function copyOnClick(itemIds) {
    Array.from(itemIds).forEach((item) => {
      item.addEventListener('click', (e) => {
        navigator.clipboard.writeText(e.target.textContent)
      })
    })
  }

  async function appendSearchAllUsers() {
    searchContainer.innerHTML = ''
    const result = await Admin.searchAllUsers()
    const arr = [...result]

    searchContainer.append(renderSearchAllUsers(arr))
    const count = document.querySelector('#admin-search-count')
    count.textContent = arr.length
    const userEmails = document.querySelectorAll('.admin-user-email')
    copyOnClick(userEmails)
  }

}
