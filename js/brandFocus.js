// import brandFocus from '../image/brandFocus_acne.jpg'
import { brandItems, manBrandItems, womanBrandItems, brandBrandItems } from './brandItems'
export{ appendBrandFocus, appendBrandBrandFocus, appendWomanBrandFocus , appendManBrandFocus }


// 추천 브랜드 포커스
function appendBrandFocus() {
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

  // redering
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
          <a href="/shop?id=${brand.engname}" id="${brand.engname}">
            <img src="${brand.img}" alt="${brand.name}">
            <h4>${brand.name}</h4>
          </a>
        </div>
            `
      // 브랜드 포커스 안 각 브랜드를 클릭시 각각 맞는 브랜드 값으로 쿼리스트링을 사용하여 주소값을 준다.
            
      recommendBrandEls.append(recommendBrandEl)
      return brand
    }).join()
  }
}

// 남성 브랜드 포커스 

function appendManBrandFocus() {
  const brandFocusEl = document.createElement('div')
  const h3El = document.createElement('h3')
  const smallEl = document.createElement('small')
  const recommendBrandEls = document.createElement('div')

  // brandFocusEl.textContent = 'hello'
  h3El.textContent = 'Brand Focus'
  smallEl.textContent = '인기 남성 브랜드'

  brandFocusEl.classList.add('brandFocus')
  recommendBrandEls.classList.add('recommendBrands')

  //호출
  renderItems(manBrandItems)

  // redering
  document.body.append(brandFocusEl)
  brandFocusEl.append(h3El)
  brandFocusEl.append(smallEl)
  brandFocusEl.append(recommendBrandEls)

  // recommendBrandEls 안에 recommendBrandEl를 rendering 하는 기능
  function renderItems (manBrandItems) {
  
    manBrandItems.map((brand) => {
      const recommendBrandEl = document.createElement('div')
    
      recommendBrandEl.innerHTML = `
        <div class="recommendBrand">
          <a href="/shop?id=${brand.engname}" id="${brand.engname}">
            <img src="${brand.img}" alt="${brand.name}">
            <h4>${brand.name}</h4>
            </a>
            </div>
            `
      // 브랜드 포커스 안 각 브랜드를 클릭시 각각 맞는 브랜드 값으로 쿼리스트링을 사용하여 주소값을 준다.
            
      recommendBrandEls.append(recommendBrandEl)
      return brand
    }).join()
  }
}


// 여성 브랜드 포커스

function appendWomanBrandFocus() {
  const brandFocusEl = document.createElement('div')
  const h3El = document.createElement('h3')
  const smallEl = document.createElement('small')
  const recommendBrandEls = document.createElement('div')

  // brandFocusEl.textContent = 'hello'
  h3El.textContent = 'Brand Focus'
  smallEl.textContent = '인기 여성 브랜드'

  brandFocusEl.classList.add('brandFocus')
  recommendBrandEls.classList.add('recommendBrands')

  //호출
  renderItems(womanBrandItems)

  // redering
  document.body.append(brandFocusEl)
  brandFocusEl.append(h3El)
  brandFocusEl.append(smallEl)
  brandFocusEl.append(recommendBrandEls)

  // recommendBrandEls 안에 recommendBrandEl를 rendering 하는 기능
  function renderItems (womanBrandItems) {
  
    womanBrandItems.map((brand) => {
      const recommendBrandEl = document.createElement('div')
    
      recommendBrandEl.innerHTML = `
        <div class="recommendBrand">
          <a href="/shop?id=${brand.engname}" id="${brand.engname}">
            <img src="${brand.img}" alt="${brand.name}">
            <h4>${brand.name}</h4>
            </a>
            </div>
            `
      // 브랜드 포커스 안 각 브랜드를 클릭시 각각 맞는 브랜드 값으로 쿼리스트링을 사용하여 주소값을 준다.
            
      recommendBrandEls.append(recommendBrandEl)
      return brand
    }).join()
  }
}


// 브랜드 브랜드 포커스

function appendBrandBrandFocus() {
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
  renderItems(brandBrandItems)

  // redering
  document.body.append(brandFocusEl)
  brandFocusEl.append(h3El)
  brandFocusEl.append(smallEl)
  brandFocusEl.append(recommendBrandEls)

  // recommendBrandEls 안에 recommendBrandEl를 rendering 하는 기능
  function renderItems (brandBrandItems) {
  
    brandBrandItems.map((brand) => {
      const recommendBrandEl = document.createElement('div')
    
      recommendBrandEl.innerHTML = `
        <div class="recommendBrand">
          <a href="/shop?id=${brand.engname}" id="${brand.engname}">
            <img src="${brand.img}" alt="${brand.name}">
            <h4>${brand.name}</h4>
            </a>
            </div>
            `
      // 브랜드 포커스 안 각 브랜드를 클릭시 각각 맞는 브랜드 값으로 쿼리스트링을 사용하여 주소값을 준다.
            
      recommendBrandEls.append(recommendBrandEl)
      return brand
    }).join()
  }
}