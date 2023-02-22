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
  appendFilterList('카테고리', [
    {
      title: '신발',
      submenus: [
        { title: '스니커즈' },
        { title: '로퍼/플랫' },
        { title: '힐/펌프스' },
        { title: '더비/레이스업' },
        { title: '부츠' },
        { title: '샌들/슬리퍼' },
      ],
    },
    {
      title: '의류',
      submenus: [
        { title: '스니커즈1' },
        { title: '로퍼/플랫1' },
        { title: '힐/펌프스1' },
        { title: '더비/레이스업1' },
        { title: '부츠1' },
        { title: '샌들/슬리퍼1' },
      ],
    },
    { title: '패션잡화' },
    { title: '라이프' },
    { title: '테크' },
  ])
  appendFilterList('브랜드')
  appendFilterList('성별')
  appendFilterList('가격')

  appendSmallProducts('남성', 4, 12, contentEl)
}

export function appendFilterList(category, menu) {
  //filterList 렌더링
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
    <div class="filter_menu"> </div>
  `
  document.querySelector('.search_filter').append(filterListEl)
  // 세부메뉴 렌더링
  const filterMenuEl = filterListEl.querySelector('.filter_menu')
  appendMenu(filterMenuEl, menu, true)
  const filterTitleEl = document.querySelector('.filter_title')
  filterTitleEl.addEventListener('click', () => {
    filterMenuEl.style.display =
      filterMenuEl.style.display === 'block' ? 'none' : 'block'
  })
}

export function appendMenu(container, menu, isfirst, test) {
  if (!menu || !menu.length) return
  console.log(container, menu)
  const ul = document.createElement('ul')
  ul.className = isfirst ? 'menu_list' : 'menu_list sub'

  for (const { title, submenus } of menu) {
    // 체크박스에 태그 이름과 체크 여부 파악을 위한 데이터 속성 부여
    const li = document.createElement('li')
    li.className = 'menu'
    li.innerHTML = /*html */ `
     <a href="#" class="menu_link">
                  <img src=${unchecked} alt="체크박스" />
                  <span class="link_text">${title}</span>
    `
    if (submenus) {
      appendMenu(li, submenus, false, true)
      li.className = 'menu'
    }

    ul.appendChild(li)
  }
  container.appendChild(ul)
  console.log(12111111111111111111111111111111)

  // 기능 구현 1. 하나만 체크할수 있게 설정
  const menuListEl = container.querySelector('.menu_list')
  const menuEls = menuListEl.querySelectorAll('.menu')

  menuEls.forEach((e) => {
    // console.log(e, '::', e.textContent.trim())
    e.addEventListener('click', (target) => {
      // console.log(target.currentTarget)
      target.preventDefault()
      target.stopPropagation()
      // 클릭했을 때 엘리먼트의 텍스트를 출력한다. 근데 왜 2번나오지?
      // console.log(target.target.innerText)
      menuEls.forEach((j) => {
        const checkbox = j.querySelector('img')
        checkbox.src = unchecked
      })
      e.querySelector('img').src =
        e.querySelector('img').src === unchecked ? checked : unchecked
      const subEls = e.querySelector('.menu_list .sub')
      if (subEls) {
        subEls.style.display =
          subEls.style.display === 'block' ? 'none' : 'block'
      }
      /*  const subEls = e.querySelector('.menu_list .sub')
      subEls ? (subEls.style.display === 'block' ? 'none' : 'block') : '' */

      // target.stopPropagation()
    })
  })
}
