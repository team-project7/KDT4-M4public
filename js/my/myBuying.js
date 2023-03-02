import { getBuyingList } from '../request'
import { htmlMySideBar } from './my'

export async function appendMyBuying() {
  const myBuyingEl = document.createElement('div')
  const myPageEl = document.createElement('div')
  myBuyingEl.className = 'mypage buying'
  myBuyingEl.innerHTML = htmlMySideBar
  myBuyingEl.innerHTML += /* html */ `
  <div class="content_area">
    <div class="my_purchase">
      <div class="content_title">
        <div class="title">
          <h3>구매 내역</h3>
        </div>
      </div>
      <!-- <div class="empty_area">
        <p>구매 내역이 없습니다.</p>
      </div> -->
      <div class="purchase_list_display_item">
            <ul class="buying_list">
            </ul>
          </div>
      <div class="purchase_list_display_item">
        <div class="list_item_img_wrap">
          <img src="" alt="product_img">
        </div>
        <p class="list_item_title">제품이름</p>
        <div class="item_date">
          <p class="secondary_title display_paragraph">구매일</p>
        </div>
      </div>
    </div>
  </div>
  `
  document.body.append(myBuyingEl)

  const myBuyinglistEl = document.createElement('div')
  myBuyinglistEl.innerHTML = /* html */ `
  <li>
    <div class="list_item_img_wrap">
      <img src="" alt="product_img" />
    </div>
    <p class="list_item_title">제품이름</p>
    <div class="item_date">
      <p class="secondary_title display_paragraph">구매일</p>
    </div>
  </li>
  `
  const buyingList = await getBuyingList()
  console.log(buyingList)
}
