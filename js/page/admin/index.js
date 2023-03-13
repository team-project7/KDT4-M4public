import * as Admin from 'api/adminRequest'
import {
  appendAdminPage,
  renderSearchResult,
  renderSearchAllUsers,
} from 'page/admin/adminRender.js'
import { searchByTag, searchByName } from 'api/request'

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
   * Create new item based on input values in add modal
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
      if (addFileInput.files[0].size > 1048576) {
        alert('1MB 이하의 파일만 사용 가능합니다.')
        return
      }
      const file = await getBase64(addFileInput.files[0]).then(
        (base64) => base64
      )

      await Admin.addItem({
        title: addTitleInput.value,
        description: addDescriptionInput.value,
        tags: addTagsInput.value,
        price: parseInt(addPriceInput.value),
        thumbnailBase64: `${file}`,
      })
      alert(`${addTitleInput.value} 추가 완료`)
      addTitleInput.value = ''
      addDescriptionInput.value = ''
      addTagsInput.value = ''
      addPriceInput.value = ''
      addFileInput.value = ''
      resetCanvas(addModalCanvas)
    } else {
      alert('모든 정보를 입력해주세요.')
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
      if (file) {
        const reader = new FileReader()

        reader.onload = () => {
          resolve(reader.result)
        }

        reader.onerror = reject

        reader.readAsDataURL(file)
      }
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
      editPriceInput.value
    ) {
      const file = editFileInput.value
        ? await getBase64(editFileInput.files[0]).then((base64) => base64)
        : null
      const json = await Admin.editItem({
        id: `${editModalId.textContent}`,
        title: editTitleInput.value,
        description: editDescriptionInput.value,
        tags: editTagsInput.value,
        price: parseInt(editPriceInput.value),
        thumbnailBase64: file,
      })

      editTitleInput.value = ''
      editDescriptionInput.value = ''
      editTagsInput.value = ''
      editPriceInput.value = ''
      editFileInput.value = ''
      resetCanvas(editModalCanvas)
      toggleEditModal()
      appendSearchAll()
    } else {
      alert('Please fill all information')
    }
  }

  const addModalWrapper = document.querySelector('.admin-add-modal-wrapper')
  const editModalWrapper = document.querySelector('.admin-edit-modal-wrapper')
  const editModalId = document.querySelector('#admin-edit-id')
  const addBtn = document.querySelector('#admin-page-btns__add-btn')
  const removeBtn = document.querySelector('#admin-page-btns__remove-btn')

  removeBtn.addEventListener('click', onRemoveBtnClicked)
  addBtn.addEventListener('click', onAddBtnClciekd)
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
    const id = editModalId.textContent
    const res = await Admin.removeItem(id)
    if (res.title) return
    alert('삭제 완료')
    // setEditModalValues()
    toggleEditModal()
    appendSearchAll()
  }

  /**
   * set input fields of edit modal by given item props
   * @param { Response<item> } item
   * @void
   */
  function setEditModalValues(item) {
    if (!item) {
      editModalId.textContent = ''
      editTitleInput.value = ''
      editDescriptionInput.value = ''
      editTagsInput.value = ''
      editPriceInput.value = ''
      resetCanvas(editModalCanvas)
      return
    }
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
  const searchContainer = document.querySelector(
    '.admin-page__search-container'
  )

  const searchAllBtn = document.querySelector('#admin-search__search-all-btn')
  const searchByTagBtn = document.querySelector('#admin-search__search-tag-btn')
  const searchByNameBtn = document.querySelector(
    '#admin-search__search-name-btn'
  )
  const searchAllUsersBtn = document.querySelector(
    '#admin-search__search-all-users'
  )
  const count = document.querySelector('#admin-search-count')

  searchByTagBtn.addEventListener('click', appendSearchByTag)
  searchAllBtn.addEventListener('click', appendSearchAll)
  searchByNameBtn.addEventListener('click', appendSearchByName)
  searchAllUsersBtn.addEventListener('click', appendSearchAllUsers)

  /**
   * request search by tag name and append rendered results
   * @returns nothing when searchInput field is empty
   */

  async function appendSearchByTag() {
    const tagName = searchInput.value.trim()
    if (!tagName) {
      alert('검색어가 필요합니다!')
      return
    }

    const capitalizedTagName = capitalizeEveryWord(tagName)
    const result = await searchByTag(capitalizedTagName)
    const arr = [...result]

    searchContainer.innerHTML = ''
    searchContainer.append(renderSearchResult(arr))
    count.textContent = `검색 결과: ${arr.length}`
    const itemEls = document.querySelectorAll('.admin-page-search__item')
    Array.from(itemEls).forEach((item) => {
      item.addEventListener('click', onSearchItemClicked)
    })
  }

  /**
   * request search by name and append rendered results
   * @returns nothing when searchInput field is empty
   */
  async function appendSearchByName() {
    const name = searchInput.value.trim()
    if (!name) {
      alert('검색어가 필요합니다!')
      return
    }
    const capitalizedName = capitalizeEveryWord(name)

    const result = await searchByName(capitalizedName)
    const arr = [...result]

    searchContainer.innerHTML = ''
    searchContainer.append(renderSearchResult(arr))

    count.textContent = `검색 결과: ${arr.length}`
    const itemEls = document.querySelectorAll('.admin-page-search__item')
    Array.from(itemEls).forEach((item) => {
      item.addEventListener('click', onSearchItemClicked)
    })
  }
  /**
   * 영문 첫 글자를 대문자로 변환 후 반환
   * @param { string } 변환할 문자열
   * @returns 변환된 문자열 반환
   */
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  /**
   * 영문 첫 글자와 공백 이후의 첫 글자를 대문자로 변환 후 반환
   * @param { string } 변환할 문자열
   * @returns 변환된 문자열 반환
   */
  function capitalizeEveryWord(str) {
    let words = str.split(' ')
    for (let i = 0; i < words.length; i++) {
      words[i] = capitalize(words[i])
    }
    return words.join(' ')
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
    count.textContent = `검색 결과: ${arr.length}`
    const itemEls = document.querySelectorAll('.admin-page-search__item')
    Array.from(itemEls).forEach((item) => {
      item.addEventListener('click', onSearchItemClicked)
    })
  }

  async function onSearchItemClicked(event) {
    const id = event.currentTarget.querySelector('.admin-item-id').textContent
    const item = await Admin.searchIndividualItem(id)
    if (!item) return
    setEditModalValues(item)
    toggleEditModal()
  }

  /**
   * add event handler to copy id to clipboard on click
   * @param { Array<Text> } array of text to copy
   * @void
   */
  function copyOnClick(textArr) {
    Array.from(textArr).forEach((text) => {
      text.addEventListener('click', (event) => {
        navigator.clipboard.writeText(event.target.textContent)
      })
    })
  }

  async function appendSearchAllUsers() {
    searchContainer.innerHTML = ''
    const result = await Admin.searchAllUsers()
    const arr = [...result]

    searchContainer.append(renderSearchAllUsers(arr))
    count.textContent = `검색 결과: ${arr.length}`
    const userEmails = document.querySelectorAll('.admin-user-email')
    copyOnClick(userEmails)
  }
}
