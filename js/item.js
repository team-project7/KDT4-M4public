import wishOff from '../image/wish-off.png'
import rolex from '../image/brandFocus_rolex.jpg'
import { searchAll, searchByTag } from './request'
/** 제품 아이템을 렌더링 하는 메소드 */
export async function appendItem() {
  const maleData = await searchByTag(' 남성')
  console.log(maleData)

  const productListEl = document.querySelector('.product__list')
  // 제품 아이템이 들어있는 리스트 엘리먼트
  const productFirstListEl = document.createElement('div')
  productFirstListEl.className = 'product__list__first'
  productListEl.append(productFirstListEl)
  // 제품 아이템 엘리먼트
  maleData.map((e) => {
    const productItemEl = document.createElement('div')
    productItemEl.classList = 'product__item'
    productItemEl.innerHTML = /*html */ `
            <a class="product__item__inner" href="#">
              <div class="thumb_box">
                <div class="item">
                  <picture class="item__img">
                    <img
                      src=${e.thumbnail}
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
    productFirstListEl.append(productItemEl)
  })

  // 여기는 한번만 렌더링
  const moreListEl = document.createElement('div')
  moreListEl.className = 'product__list__more'
  moreListEl.innerHTML = /*html*/ `
  <a href="#" class="morebtn">더보기</a>
  `
  productFirstListEl.after(moreListEl)
}
