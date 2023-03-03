import { getProduct } from '../request'
import { htmlMySideBar } from './my'
import { $ } from './util'

export function appendMyWish() {
  const myWishEl = document.createElement('div')
  myWishEl.className = 'mypage my_wish'
  myWishEl.innerHTML = htmlMySideBar
  myWishEl.innerHTML += /* html */ `
  <div class="content_area">
    <div class="my_purchase">
      <div class="content_title">
        <div class="title">
          <h3>관심 상품</h3>
        </div>
      </div>
      <ul class="wish_list"></ul>
    </div>
  </div>
  `
  document.body.append(myWishEl)

  $('.my_loading').style.display = 'flex'

  let wishList = localStorage.getItem('wishlist')

  if (wishList) {
    wishList = Array.from(wishList.split(','))
  } else {
    $('.my_loading').style.display = 'none'
    return
  }

  const content = wishList.map(async (data) => await getProduct(data))

  let count = 0
  wishList.forEach(async (data) => {
    const wish = await getProduct(data)
    count++
    $('.wish_list').innerHTML += /* html */ `
        <li>
          <div class="list_item_img_wrap">
            <img class="list_item_img" src="${
              wish.thumbnail
            }" alt="product_img" />
          </div>
          <p class="list_item_title">${wish.title}</p>
          <div class="item_date">
            <p class="secondary_title display_paragraph">${wish.price.toLocaleString()}원</p>
          </div>
        </li>
      `
    if (count === wishList.length) {
      $('.my_loading').style.display = 'none'
    }
  })
}
