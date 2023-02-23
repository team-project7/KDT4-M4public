import { appendItem, appendSmallItem } from './item'

export function appendProducts(tag, dpnum, num, listIndex) {
  const productEl = document.createElement('div')
  productEl.className = 'product'
  productEl.innerHTML = /*html */ `
     <div class="product__title">
        <div>
          <div class="title">Just Dropped</div>
          <div class="sub_title">발매 상품</div>
        </div>
      </div>
      <div class="product__list">
        <div class="product__list__first">
    </div>
      </div>
    `
  document.body.append(productEl)
  appendItem(tag, dpnum, num, productEl, listIndex)
  // 여기는 한번만 렌더링
  const productListEl = productEl.querySelector('.product__list')
  const moreListEl = document.createElement('div')
  moreListEl.className = 'product__list__more'
  moreListEl.innerHTML = /*html*/ `
  <a href="javascript:void(0)" class="morebtn">더보기</a>
  `
  productListEl.after(moreListEl)

  const morebtnEl = productEl.querySelector('.morebtn')
  morebtnEl.addEventListener('click', () => {
    listIndex++
    appendItem(tag, dpnum, num, productEl, listIndex)
  })
}
/** 상점페이지 제품 목록을 렌더링하는 메소드*/
export function appendSmallProducts(tag, dpnum, content, listIndex) {
  const productEl = document.createElement('div')
  productEl.className = 'product'
  productEl.innerHTML = /*html */ `
     <div class="product__title">
        <div>
          <div class="title">Just Dropped</div>
          <div class="sub_title">발매 상품</div>
        </div>
      </div>
      <div class="product__list">
        <div class="product__list__first">
    </div>
      </div>
    `
  content.append(productEl)

  appendSmallItem(tag, dpnum, listIndex)
  // 여기는 한번만 렌더링
  const productListEl = document.querySelector('.product__list')
  const moreListEl = document.createElement('div')
  moreListEl.className = 'product__list__more'
  moreListEl.innerHTML = /*html*/ `
  <a href="javascript:void(0)" class="morebtn">더보기</a>
  `
  productListEl.after(moreListEl)

  const morebtnEl = document.querySelector('.morebtn')
  morebtnEl.addEventListener('click', () => {
    listIndex++
    appendSmallItem(tag, dpnum, listIndex)
  })
}
