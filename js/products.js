import { appendItem } from './item'
export let listIndex = 0
export function appendProducts(tag, num) {
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
      
      </div>
    `
  document.body.append(productEl)

  appendItem(tag, num)
  // 여기는 한번만 렌더링
  const productListEl = document.querySelector('.product__list')
  const moreListEl = document.createElement('div')
  moreListEl.className = 'product__list__more'
  moreListEl.innerHTML = /*html*/ `
  <a href="#" class="morebtn">더보기</a>
  `
  productListEl.after(moreListEl)

  const morebtnEl = document.querySelector('.morebtn')
  morebtnEl.addEventListener('click', () => {
    listIndex++
    appendItem(tag, num)
  })
}
