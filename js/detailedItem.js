

function appendDetailedItem () {
  // 상세 품목 페이지 렌더링
  const detailedItem = document.createElement('div')
  detailedItem.className = 'detailedItem'
  detailedItem.innerHTML = /*html*/`
  <div class="wrap">
    <section class="detailedItem_item">
      <div class="item_leftSide">
        <div class="item_img"></div>
        <div class="item_salesAlert">
          <a href="javascript:void(0)">
            <span class="alertMark">주의</span>
            <span class="alertHead">판매 거래 주의사항</span>
            <p class="alertText">반드시 보유한 상품만 판매하세요.</p>
          </a>
        </div>
      </div>
      <div class="item_rightSide">

        <div>
          <a href="javascript:void(0)"></a>
        </div>

        <p class="item_title"></p>
        <small class="item_KORtitle"></small>

        <div class="item_size">
          <span class="size_txt">사이즈</span>
          <a href="javascript:void(0)" class="size_btn">
            <span class="btn_txt">모든 사이즈</span>
            <span class="material-symbols-outlined">
              arrow_drop_down
            </span>
          </a>
        </div>

        <div class="item_price">
          <span class="price_txt">구매가</span>
          <span class="price_nowPrice"></span>
          <span class="price_won">원</span>
        </div>

        <a href="javascript:void(0)" class="purchase_btn">구매하기</a>

        <button class="wishlist_btn">
          <span class="wishlist_mark"></span>
          <span class="wishlist_txt">관심상품</span>
        </button>

        



      </div>
    </section>
    <section class="detailedItem_style">
      <div class="style_head">
        <h3>스타일</h3>

      </div>
      <div class="style_body">

      </div>
    </section>
    <section class="detailedItem_another">
      <div class="another_head">
        <h3>의 다른 상품</h3>
        <a href="javascript:void(0)">
          <span>
            더보기
          </span>
          <span class="material-symbols-outlined">
            arrow_forward_ios
          </span>
        </a>
      </div>
      <div class="another_body">

      </div>
    </section>
  </div>
  `

  
}