import { getBuyingList, setBuyingDone } from '../request'
import { htmlMySideBar } from './my'
import { $, $$, formatDate } from './util'

export async function appendMyBuying() {
  const myBuyingEl = document.createElement('div')
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
      <div class="recent_purchase">
        <div class="purchase_list_tab">
          <div class="tab_item total">
            <a href="javascript:void(0)" class="tab_link">
              <dl class="tab_box">
                <dt class="title">전체</dt>
                <dd class="count total_count">0</dd>
              </dl>
            </a>
          </div>
          <div class="tab_item">
            <a href="javascript:void(0)" class="tab_link">
              <dl class="tab_box">
                <dt class="title">진행 중</dt>
                <dd class="count proceeding_count">0</dd>
              </dl>
            </a>
          </div>
          <div class="tab_item">
            <a href="javascript:void(0)" class="tab_link">
              <dl class="tab_box">
                <dt class="title">종료</dt>
                <dd class="count finish_count">0</dd>
              </dl>
            </a>
        </div>
      </div>
    </div>
      <div class="purchase_list_display_item">
        <ul class="buying_list"></ul>
      </div>
    </div>
  </div>
  `
  document.body.append(myBuyingEl)

  //로딩화면 표시
  $('.my_loading').style.display = 'flex'
  
  const buyingList = await getBuyingList()
  if (!buyingList) {
    $('.my_loading').style.display = 'none'

    return
  }

  $('.total_count').innerText = buyingList.length

  let cntDone = 0
  buyingList.map((data) => {
    if (!data.done) {
      ++cntDone
    }
  })
  $('.proceeding_count').innerText = cntDone
  $('.finish_count').innerText = buyingList.length - cntDone

  $('.buying_list').innerHTML += buyingList
    .map((data) => {
      const liEl = /* html */ `
      <li data-id="${data.detailId}">
        <div class="list_item_img_wrap">
          <img class="list_item_img" src="${
            data.product.thumbnail
          }" alt="product_img" />
        </div class="list_item_title_wrap">
        <p class="list_item_title">${data.product.title}</p>
        <div class="item_date">
          <p class="secondary_title display_paragraph">${formatDate(
            data.timePaid
          )}</p>
          <button class="btn_done_${data.done} btn_click_done">${
        data.done ? '확정완료' : '구매확정'
      }</button>
        </div>
      </li>
      `

      return liEl
    })
    .join('')

  //로딩화면 제거
  $('.my_loading').style.display = 'none'

  //구매확정 클릭이벤트
  const btnDone = $$('.btn_click_done')
  btnDone.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      if (e.target.classList.contains('btn_done_false')) {
        e.target.innerText = '확정완료'
        e.target.classList.replace('btn_done_false', 'btn_done_true')
        await setBuyingDone(e.target.parentElement.parentElement.dataset.id)

        $('.proceeding_count').innerText = --cntDone
        $('.finish_count').innerText = buyingList.length - cntDone
      }
    })
  })
}
