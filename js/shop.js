import { appendSmallProducts } from './products'
import plus from '/image/plus.png'
import unchecked from '/image/unchecked.png'
import checked from '/image/checked.png'
export default function appendShopContent() {
  const catList = ['카테고리', '브랜드', '성별', '가격']
  const contentEl = document.createElement('div')
  contentEl.className = 'content'

  contentEl.innerHTML = /*html */ `
    <div class="search_filter">
        <div class="filter_status">
          <div class="status_box">
            <span class="status_text"> 필터 </span>
          </div>
        </div>
    </div>
     `

  document.body.append(contentEl)
  appendFilterList('카테고리')
  appendFilterList('브랜드')
  appendFilterList('성별')
  appendFilterList('가격')

  appendSmallProducts(' 남성', 4, 12, contentEl)
}

export function appendFilterList(category) {
  const filterListEl = document.createElement('div')
  filterListEl.className = 'filter_list'
  filterListEl.innerHTML = /*html */ `
    <div class="filter_title">
       <div class="title_box">
              <span class="main_title">${category}</span>
              <div class="placeholder">모든 ${category}</div>
            </div>
            <div class="icon_box"><img src=${plus} alt="확장" /></div>
    </div>
  `
  document.querySelector('.search_filter').append(filterListEl)

  const filterlistEls = document.querySelectorAll('.filter_list')

  filterlistEls.forEach((e) => {
    const filterMenuEl = e.querySelector('.filter_menu')
    e.addEventListener('click', () => {
      filterMenuEl.style.display =
        filterMenuEl.style.display === 'block' ? 'none' : 'block'
    })
  })
}
