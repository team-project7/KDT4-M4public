// import brandFocus from '../image/brandFocus_acne.jpg'
// import { brandItems } from './brandFocusItems'

export default function appendBrandFocus() {
  const brandFocusEl = document.createElement('div')
  const h3El = document.createElement('h3')
  const smallEl = document.createElement('small')
  const recommendBrandEls = document.createElement('div')

  // 배열
let brandItems = [
  {
    name: '샤넬',
    engname: 'chanel',
    img: 'https://user-images.githubusercontent.com/120362689/217431651-03ae2f02-9966-44a7-a7d3-6ee931c506be.jpg'
  },
  {
    name: '아미',
    engname: 'ami',
    img: 'https://user-images.githubusercontent.com/120362689/217431647-617ba5a1-0925-4f00-a4a8-f2471725f47f.jpg'
  },
  {
    name: '롤렉스',
    engname: 'rolex',
    img: 'https://user-images.githubusercontent.com/120362689/217431665-5cbc5ef3-9f7c-4d63-8695-a3d0830bf273.jpg'
  },
  {
    name: '르메르',
    engname: 'lemaire',
    img: 'https://user-images.githubusercontent.com/120362689/217431657-07541044-a102-4f26-966c-342b8c4e320e.jpg'
  },
  {
    name: '레고',
    engname: 'lego',
    img: 'https://user-images.githubusercontent.com/120362689/217431655-bb1a5118-d9cb-40aa-a0d7-c329533fa70f.jpg'
  },
  {
    name: '스톤 아일랜드',
    engname: 'stoneisland',
    img: 'https://user-images.githubusercontent.com/120362689/217431667-460df2ec-4942-431b-8af7-09e8faec93df.jpg'
  },
  {
    name: '아크네',
    engname: 'acne',
    img: 'https://user-images.githubusercontent.com/120362689/217431645-1531e552-1d3e-4785-a34b-e3cc6732860f.jpg'
  },
  {
    name: '루이비통',
    engname: 'louis',
    img: 'https://user-images.githubusercontent.com/120362689/217431659-2fe99556-85ce-4858-a6fd-39af4b08eb01.jpg'
  },
  {
    name: '메종 키츠네',
    engname: 'maison',
    img: 'https://user-images.githubusercontent.com/120362689/217431661-7b9de135-97c2-4e52-9db4-b49371bd6600.jpg'
  },
  {
    name: '미우 미우',
    engname: 'miumiu',
    img: 'https://user-images.githubusercontent.com/120362689/217431662-9074685b-ee84-4d11-a8d0-63e6e331d28e.jpg'
  },
  {
    name: '폴로',
    engname: 'polo',
    img: 'https://user-images.githubusercontent.com/120362689/217431664-89c5c9c9-eaf1-4c63-8c24-669c8e005316.jpg'
  },
  {
    name: '에르메스',
    engname: 'hermes',
    img: 'https://user-images.githubusercontent.com/120362689/217431653-809f23ab-5168-4ac8-8722-c083c234110f.jpg'
  },
  {
    name: '우영미',
    engname: 'wooyoungmi',
    img: 'https://user-images.githubusercontent.com/120362689/217431670-e71e3106-f6f6-49ab-9279-a87901860eb1.jpg'
  },
  {
    name: '애플',
    engname: 'apple',
    img: 'https://user-images.githubusercontent.com/120362689/217431649-4c4c65f6-771c-4188-a990-b92438eee820.jpg'
  },
  {
    name: '비비안 웨스트우드',
    engname: 'vivienne',
    img: 'https://user-images.githubusercontent.com/120362689/217431668-a880ecf3-c787-4b85-a308-ca0776da3bf7.jpg'
  },
]

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
  // for (let index = 0; index < brandItems.length; index++) {
  //   recommendBrandEls.append(recommendBrandEl)
  //   recommendBrandEl.append(recommendBrandName)
  //   recommendBrandName.textContent = brandItems[index]
  //   console.log(brandItems[index])
  // }
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
    // const recommendBrandLink = document.createElement('a')
    // const recommendBrandName = document.createElement('h4')
    // const recommendBrandImg = document.createElement('img')

    // recommendBrandEl.classList.add('recommendBrand')
    // recommendBrandLink.setAttribute('href', '/shop')
    // recommendBrandImg.setAttribute('src', `../image/brandFocus_${brandItems[index].engname}.jpg`)
    // recommendBrandName.textContent = brandItems[index].name

    // recommendBrandEls.append(recommendBrandEl)
    // recommendBrandEl.append(recommendBrandLink)
    // recommendBrandLink.append(recommendBrandImg)
    // recommendBrandLink.append(recommendBrandName)
    recommendBrandEls.append(recommendBrandEl)
    return brand
  }).join()
  }
}

