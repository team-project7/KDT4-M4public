import wishOff from '../image/wish-off.png'
import { searchByTag } from './request'
import { listIndex } from './products'

/** 제품 아이템을 렌더링 하는 메소드 */
export async function appendItem(tag, num) {
  const chunk = []
  const resultData = await searchByTag(tag)
  const chunkData = resultData.slice(0, num)
  chunk.push(chunkData.slice(0, 4))
  for (let i = 4; i < chunkData.length; i += 8) {
    chunk.push(chunkData.slice(i, i + 8))
  }
  // 모든 제품이 렌더링 되었을 경우 더보기 버튼 제거
  if (listIndex + 1 === chunk.length) {
    document.querySelector('.product__list__more').remove()
  }
  const productListEl = document.querySelector('.product__list')
  // 제품 아이템이 들어있는 리스트 엘리먼트
  const productFirstListEl = document.createElement('div')
  productFirstListEl.className = 'product__list__first'
  productListEl.append(productFirstListEl)
  // 제품 아이템 엘리먼트
  chunk[listIndex].map((e) => {
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
}
