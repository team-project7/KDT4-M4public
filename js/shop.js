import { appendSmallProducts } from './products'
import plus from '/image/plus.png'
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
     `

  document.body.append(contentEl)
  const searchFilterEl = document.querySelector('.search_filter')
  const filterListEl = document.createElement('div')
  filterListEl.className = 'filter_list'

  catList.forEach((e) => {
    const filterListEl = document.createElement('div')
    filterListEl.className = 'filter_list'
    filterListEl.innerHTML = /*html */ `
     <div class="filter_title">
            <div class="title_box">
              <span class="main_title">${e}</span>
              <div class="placeholder">모든 ${e}</div>
            </div>
            <div class="icon_box"><img class="more_icon" src=${plus}  alt="확장" /></div>
          </div>
      `

    searchFilterEl.append(filterListEl)
  })
  appendSmallProducts(' 남성', 4, 12, contentEl)
}
