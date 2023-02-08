import wishOff from '../image/wish-off.png'
import rolex from '../image/brandFocus_rolex.jpg'
export function appendProducts() {
  const productEl = document.createElement('div')
  productEl.className = 'product'
  const imgpath = ''
  productEl.innerHTML = /*html */ `
     <div class="product__title">
        <div>
          <div class="title">Just Dropped</div>
          <div class="sub_title">발매 상품</div>
        </div>
      </div>
      <div class="product__list">
        <div class="product__list__first">
          <div class="product__item">
            <a class="product__item__inner" href="#">
              <div class="thumb_box">
                <div class="item">
                  <picture class="item__img">
                    <img
                      src=${rolex}
                      alt="제품이미지"
                    />
                  </picture>
                  <span aria-label="관심상품" role="button" class="btn_wish">
                    <img class ="wish-icon" src=${wishOff} alt="찜" />
                  </span>
                </div>
              </div>
              <div class="info_box">
                <div class="brand">
                  <p class="brand__text">nike</p>
                </div>
                <p class="name">nike x tom skdjflskdjflksjd</p>
                <div class="price">
                  <div class="amount">
                    <em class="amount_num">137,000</em>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    `
  document.body.append(productEl)
}
