import { appendSmallProducts } from 'component/products'
import plus from '/image/plus.png'
import unchecked from '/image/unchecked.png'
import checked from '/image/checked.png'
import { searchAll } from 'api/request'

// api 에서 브랜드 값만 가져오는 메서드
async function getData() {
  const res = await searchAll()
  const tagnames = res.map((item) => item.tags[0])
  // 중복 제거
  const taglist = [...new Set(tagnames)].sort()
  const brandlist = []
  taglist.forEach((item) => {
    brandlist.push({ title: item })
  })
  return brandlist
}

export default function appendShopContent() {
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
        {
          title: '패딩',
        },
        { title: '코트' },
        { title: '니트웨어' },
        { title: '자켓' },
        { title: '후드' },
        { title: '스웨트셔츠' },
        { title: '긴팔 티셔츠' },
        { title: '반팔 티셔츠' },
        { title: '셔츠' },
        { title: '바지' },
        { title: '반바지' },
        { title: '스커트' },
        { title: '기타' },
      ],
    },
    {
      title: '패션잡화',
      submenus: [
        {
          title: '프리미엄시계',
        },
        { title: '프리미엄가방' },
        { title: '스몰레더' },
        { title: '가방' },
        { title: '시계' },
        { title: '주얼리' },
        { title: '모자' },
        { title: '스카프' },
        { title: '아이웨어' },
        { title: '벨트' },
        { title: '기타' },
      ],
    },
    {
      title: '라이프',
      submenus: [
        {
          title: '레고',
        },
        { title: '향수' },
        { title: '아트토이/피규어' },
        { title: '캠핑' },
        { title: '리빙/인테리어' },
        { title: '트레이딩 카드' },
        { title: '뮤직/굿즈' },
        { title: '기타' },
      ],
    },
    {
      title: '테크',
      submenus: [
        {
          title: '스마트폰',
        },
        { title: '스마트워치' },
        { title: '태블릿' },
        { title: '음향기기' },
        { title: '게이밍' },
        { title: '그래픽카드' },
        { title: '테크 액세서리' },
        { title: '리퍼비시' },
        { title: '기타' },
      ],
    },
  ])
  appendFilterList('성별', [
    { title: '남성' },
    { title: '여성' },
    { title: '키즈' },
  ])
  appendFilterList('가격', [
    { title: '10만원 이하' },
    { title: '10만원-30만원 이하' },
    { title: '30만원-50만원 이하' },
    { title: '50만원 이상' },
  ])
  // 브랜드 네임을 받아서 브랜드 리스트를 만드는 메서드
  getData().then((res) => appendFilterList('브랜드', [...res]))

  let url = new URL(document.location.href)
  const searchParams = url.searchParams
  const searchKeyword = searchParams.get('id')

  if (searchKeyword) {
    appendSmallProducts(searchKeyword, 12, contentEl, 0)
  } else {
    appendSmallProducts('남성', 12, contentEl, 0)
  }
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
  const filterTitleEl = filterListEl.querySelector('.filter_title')
  filterTitleEl.addEventListener('click', () => {
    filterMenuEl.style.display =
      filterMenuEl.style.display === 'block' ? 'none' : 'block'
  })
}

export function appendMenu(container, menu, isfirst) {
  if (!menu || !menu.length) return

  const ul = document.createElement('ul')
  ul.className = isfirst ? 'menu_list' : 'menu_list sub'

  for (const { title, submenus } of menu) {
    // 체크박스에 태그 이름과 체크 여부 파악을 위한 데이터 속성 부여
    const li = document.createElement('li')
    li.className = 'menu'
    li.setAttribute('tag-name', title)
    li.innerHTML = /*html */ `
     <a href="#" class="menu_link">
                  <img src=${unchecked} alt="체크박스" />
                  <span class="link_text">${title}</span>
    `
    // 체크박스 클릭 시 자신의 제외한 모든 항목의 체크를 해제시키고 자신의 체크를 토글
    // 체크한 항목의 데이터 값을 바탕으로 검색하여 제품을 렌더링
    function toggleOnly(me) {
      const checkbox = me.querySelector('img')
      checkbox.src = checked
      const subEls = me.querySelector('.menu_list.sub')
      if (subEls) {
        subEls.style.display =
          subEls.style.display === 'block' ? 'none' : 'block'
      }
      const allMenuEl = document
        .querySelector('.search_filter')
        .querySelectorAll('.menu')
      Array.from(allMenuEl)
        .filter((el) => el !== me)
        .forEach((menu) => {
          const checkbox = menu.querySelector('img')
          checkbox.src = unchecked
          const subEls = menu.querySelector('.menu_list.sub')
          if (subEls && !menu.contains(me)) {
            subEls.style.display = 'none'
          }
        })
    }
    // 메뉴중 하나를 선택할때 동작하는 이벤트
    li.addEventListener('click', (event) => {
      const productEl = document.querySelector('.product')
      const contentEl = document.querySelector('.content')
      const tagname = li.getAttribute('tag-name')
      productEl.remove()
      appendSmallProducts(tagname, 12, contentEl, 0)
      event.preventDefault()
      event.stopPropagation()
      toggleOnly(li)
    })

    if (submenus) {
      appendMenu(li, submenus, false)
      li.className = 'menu'
    }

    ul.appendChild(li)
  }

  container.appendChild(ul)
}
