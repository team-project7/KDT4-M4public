export default function appendBrandFocus {
  const brandFocusEl = document.createElement('div')
  const h3El = document.createElement('h3')
  const smallEl = document.createElement('small')
  const recommendBrandEls = document.createElement('div')

  // 배열
  let brandItems = [
    {
      name: '샤넬',
      engname: 'chanel'
    },
    {
      name: '아미',
      engname: 'ami'
    },
    {
      name: '롤렉스',
      engname: 'rolex'
    },
    {
      name: '르메르',
      engname: 'lemaire'
    },
    {
      name: '레고',
      engname: 'lego'
    },
    {
      name: '스톤 아일랜드',
      engname: 'stoneisland'
    },
    {
      name: '아크네',
      engname: 'acne'
    },
    {
      name: '루이비통',
      engname: 'louis'
    },
    {
      name: '메종 키츠네',
      engname: 'maison'
    },
    {
      name: '미우 미우',
      engname: 'miumiu'
    },
    {
      name: '폴로',
      engname: 'polo'
    },
    {
      name: '에르메스',
      engname: 'hermes'
    },
    {
      name: '우영미',
      engname: 'wooyoungmi'
    },
    {
      name: '애플',
      engname: 'apple'
    },
    {
      name: '비비안 웨스트우드',
      engname: 'vivienne'
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
  brandItems.forEach((brandname, index) => {
    const recommendBrandEl = document.createElement('div')
    recommendBrandEl.innerHTML = `
        <div class="recommendBrand">
          <a href="/shop">
            <img src="../image/brandFocus_${brandItems[index].engname}.jpg">
            <h4>${brandItems[index].name}</h4>
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
  }) 
  }
}

