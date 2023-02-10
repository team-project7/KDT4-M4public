import wishOff from '../image/wish-off.png'
import rolex from '../image/brandFocus_rolex.jpg'
import { searchAll, searchByTag } from './request'
/** 제품 아이템을 렌더링 하는 메소드 */
export async function appendItem() {
  // 데이터 확인
  // const productData = await searchAll()
  // console.log(productData)
  // const maleData = await searchByTag(' 남성')
  // console.log(maleData)

  const productListEl = document.querySelector('.product__list')
  const productFirstListEl = document.createElement('div')
  productFirstListEl.className = 'product__list__first'

  productFirstListEl.innerHTML = /*html */ `
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
                    <img src="${wishOff}" alt="찜" />
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
  `
  productListEl.append(productFirstListEl)

  // 여기는 한번만 렌더링
  const moreListEl = document.createElement('div')
  moreListEl.className = 'product__list__more'
  moreListEl.innerHTML = /*html*/ `
  <a href="#" class="morebtn">더보기</a>
  `
  productFirstListEl.after(moreListEl)
}
