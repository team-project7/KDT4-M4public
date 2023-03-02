import wishOff from '../image/wish-off.png'
import wishOn from '../image/wish-on.png'
import { searchAll, searchByTag } from './request'

/** 제품 아이템을 렌더링 하는 메소드 */
export async function appendItem(tag, dpnum, num, container, listIndex) {
  let isdone = false
  const chunk = []
  const resultData = await searchByTag(tag)
  const chunkData = resultData.slice(0, num)
  chunk.push(chunkData.slice(0, dpnum))
  for (let i = dpnum; i < chunkData.length; i += 8) {
    chunk.push(chunkData.slice(i, i + 8))
  }
  // 모든 제품이 렌더링 되었을 경우 더보기 버튼 제거
  if (listIndex + 1 === chunk.length) {
    container.querySelector('.product__list__more').remove()
  }
  const productListFirstEl = container.querySelector('.product__list__first')
  // 제품 아이템 엘리먼트
  chunk[listIndex].map((e, index) => {
    const productItemEl = document.createElement('div')
    productItemEl.classList = 'product__item'
    productItemEl.setAttribute('data-id', e.id)
    productItemEl.innerHTML = /*html */ `
            <a class="product__item__inner" href="javascript:void(0)">
              <div class="thumb_box">
                <div class="item">
                  <picture class="item__img">
                    <img
                      src=${e.thumbnail}
                      alt="제품이미지"
                    />
                  </picture>
                  <span aria-label="관심상품" role="button" class="btn_wish">
                    <img class="wish_icon" src="${wishOff}" alt="찜"  />
                  </span>
                </div>
              </div>
              <div class="info_box">
                <div class="brand">
                  <p class="brand__text">${e.title}</p>
                </div>
                <p class="name">${e.description}</p>
                <div class="price">
                  <div class="amount">
                    <em class="amount_num">${e.price}</em>
                  </div>
                </div>
              </div>
            </a>
  `

    productListFirstEl.append(productItemEl)
  })

  const items = document.querySelectorAll('.product__item')
  // 로드 되면서 위시리스트의 데이터를 가져온다. 만약 아무것도 없으면 빈 배열로 지정
  let wishlist =
    localStorage.getItem('wishlist')? localStorage.getItem('wishlist').split(',') : []
     

  items.forEach((el, index) => {
    // 쿼리 스트링 추가
    const itemLink = el.querySelector('.product__item__inner')
    itemLink.href = '/products' + `?name=${el.getAttribute('data-id')}`
    const wishicon = el.querySelector('.wish_icon')
    // 로컬스토리지 wishlist에 존재하는 데이터 값이 item엘리먼트의 data-id와 같다면
    // wishicon의 이미지를 wishOn으로 렌더링 한다.
    wishlist.forEach((e) => {
      if (e === el.getAttribute('data-id')) {
        wishicon.src = wishOn
      }
    })

    wishicon.onclick = (e) => {
      // 찜목록 클릭시, 찜목록 이미지 src값에 따라 제품의 id값을 로컬 스토리지에 추가/제거
      if (wishicon.src == wishOn) {
        wishlist = wishlist.filter((e) => e !== el.getAttribute('data-id'))
        localStorage.setItem('wishlist', wishlist)
        console.log(wishlist)
      } else {
        wishlist.push(el.getAttribute('data-id'))
        localStorage.setItem('wishlist', wishlist)
        console.log(wishlist)
      }
      wishicon.src = wishicon.src === wishOff ? wishOn : wishOff

      e.preventDefault()
      e.stopPropagation()
    }
  })
  const loading = document.querySelector('.loading')
  //productListFirstEl에서 근처 loading div 찾기
  if (loading) {
    loading.remove()
    productListFirstEl.classList.remove('none')
  }
}

export async function appendSmallItem(tag, dpnum, listIndex) {
  const chunk = []
  let resultData = []
  // 가격별로 만족하는데이터 정렬
  const allData = await searchAll()
  switch (tag) {
    case '10만원 이하':
      resultData = allData.filter((e) => e.price <= 100000)
      break
    case '10만원-30만원 이하':
      resultData = allData.filter((e) => e.price > 100000 && e.price <= 300000)
      break
    case '30만원-50만원 이하':
      resultData = allData.filter((e) => e.price > 300000 && e.price <= 500000)
      break
    case '50만원 이상':
      resultData = allData.filter((e) => e.price > 500000)
      break
    default:
      resultData = await searchByTag(tag)
      break
  }
  chunk.push(resultData.slice(0, dpnum))
  for (let i = dpnum; i < resultData.length; i += 8) {
    chunk.push(resultData.slice(i, i + 8))
  }
  // 모든 제품이 렌더링 되었을 경우 더보기 버튼 제거
  if (listIndex + 1 === chunk.length) {
    document.querySelector('.product__list__more').remove()
  }
  const productListFirstEl = document.querySelector('.product__list__first')

  // 제품 아이템 엘리먼트
  chunk[listIndex].map((e, index) => {
    const productItemEl = document.createElement('div')
    productItemEl.classList = 'product__item'
    productItemEl.setAttribute('data-id', e.id)
    productItemEl.innerHTML = /*html */ `
            <a class="product__item__inner" href="javascript:void(0)">
              <div class="thumb_box">
                <div class="item">
                  <picture class="item__img--sm">
                    <img
                      src=${e.thumbnail}
                      alt="제품이미지"
                    />
                  </picture>
                  <span aria-label="관심상품" role="button" class="btn_wish">
                    <img class="wish_icon" src="${wishOff}" alt="찜"  />
                  </span>
                </div>
              </div>
              <div class="info_box">
                <div class="brand">
                  <p class="brand__text--sm">${e.title}</p>
                </div>
                <p class="name--sm">${e.description}</p>
                <div class="price">
                  <div class="amount">
                    <em class="amount_num--sm">${e.price}</em>
                  </div>
                </div>
              </div>
            </a>
  `

    productListFirstEl.append(productItemEl)
  })
  const items = document.querySelectorAll('.product__item')
  // 로드 되면서 위시리스트의 데이터를 가져온다. 만약 아무것도 없으면 빈 배열로 지정
  let wishlist =
    localStorage.getItem('wishlist').length === 0
      ? []
      : localStorage.getItem('wishlist').split(',')

  items.forEach((el, index) => {
    // 쿼리 스트링 추가
    const itemLink = el.querySelector('.product__item__inner')
    itemLink.href = '/products' + `?name=${el.getAttribute('data-id')}`
    const wishicon = el.querySelector('.wish_icon')
    // 로컬스토리지 wishlist에 존재하는 데이터 값이 item엘리먼트의 data-id와 같다면
    // wishicon의 이미지를 wishOn으로 렌더링 한다.
    wishlist.forEach((e) => {
      if (e === el.getAttribute('data-id')) {
        wishicon.src = wishOn
      }
    })

    wishicon.onclick = (e) => {
      // 찜목록 클릭시, 찜목록 이미지 src값에 따라 제품의 id값을 로컬 스토리지에 추가/제거
      if (wishicon.src == wishOn) {
        wishlist = wishlist.filter((e) => e !== el.getAttribute('data-id'))
        localStorage.setItem('wishlist', wishlist)
        console.log(wishlist)
      } else {
        wishlist.push(el.getAttribute('data-id'))
        localStorage.setItem('wishlist', wishlist)
        console.log(wishlist)
      }
      wishicon.src = wishicon.src === wishOff ? wishOn : wishOff

      e.preventDefault()
      e.stopPropagation()
    }
  })
  let isdone = true
  const loading = document.querySelector('.loading')
  //productListFirstEl에서 근처 loading div 찾기
  if (isdone) {
    productListFirstEl.classList.remove('none')
    if (loading) {
      loading.remove()
    }
  }
}
