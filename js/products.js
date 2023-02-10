import wishOff from '../image/wish-off.png'
import rolex from '../image/brandFocus_rolex.jpg'
import { searchAll } from './request'
import { appendItem } from './item'
export function appendProducts() {
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
  appendItem()
}
