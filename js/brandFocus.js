// import brandFocus from '../image/brandFocus_acne.jpg'
import { brandItems } from './brandItems'

export default function appendBrandFocus() {
  const brandFocusEl = document.createElement('div')
  const h3El = document.createElement('h3')
  const smallEl = document.createElement('small')
  const recommendBrandEls = document.createElement('div')

  // brandFocusEl.textContent = 'hello'
  h3El.textContent = 'Brand Focus'
  smallEl.textContent = '추천 브랜드'

  brandFocusEl.classList.add('brandFocus')
  recommendBrandEls.classList.add('recommendBrands')

  //호출
  renderItems(brandItems)

  // rendering
  document.body.append(brandFocusEl)
  brandFocusEl.append(h3El)
  brandFocusEl.append(smallEl)
  brandFocusEl.append(recommendBrandEls)

  // recommendBrandEls 안에 recommendBrandEl를 rendering 하는 기능
  function renderItems (brandItems) {
  
  brandItems.map((brand) => {
    const recommendBrandEl = document.createElement('div')
    
    recommendBrandEl.innerHTML = `
        <div class="recommendBrand">
          <a href="/shop">
            <img src="${brand.img}" alt="${brand.name}">
            <h4>${brand.name}</h4>
          </a>
        </div>
      `
    
    recommendBrandEls.append(recommendBrandEl)
    return brand
  }).join()
  }
}

