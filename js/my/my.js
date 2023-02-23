import { appendMyAddress } from './myAddress.js'
import { appendMyBuying } from './myBuying.js'

export function appendMySnb() {
  const mySnbEl = document.createElement('div')
  mySnbEl.className = 'mypage'
  mySnbEl.innerHTML = /* html */ `
  <div class="snb_area">
    <a href="">
      <h2 class="snb_main_title">마이 페이지</h2>
    </a>
    <nav class="snb">
      <div class="snb_list">
        <p class="snb_title">쇼핑 정보</p>
        <ul class="snb_menu">
          <li><a href="/my/buying">구매 내역</a></li>
          <li><a href="/my/wish">관심 상품</a></li>
        </ul>
      </div>
      <div class="snb_list">
        <p class="snb_title">내 정보</p>
        <ul class="snb_menu">
          <li><a href="/my/profile">프로필 정보</a></li>
          <li><a href="/my/address">주소록</a></li>
          <li><a href="/my/point">포인트</a></li>
        </ul>
      </div>
    </nav>
  </div>
  `
  const myAdderssEl = appendMyBuying()
  mySnbEl.append(myAdderssEl)
  const myHomeEl = document.createElement('div')
  myHomeEl.className = 'container my md'
  myHomeEl.innerHTML = /* html */ `
  <div class="my_home">
    <div class="user_membership">
      <div class="user_detail">
        <div class="user_thumb">
          <img src="../image/blank_profile.png" alt="thumb_img" />
        </div>
        <div class="user_info">
          <strong class="name">닉네임</strong>
          <p class="email">이메일 x*******x@naver.com</p>
          <a href="" type="button" class="profile btn outlinegrey small">프로필 수정</a>
        </div>
      </div>
      <div class="membership_detail">
        <a href="" class="membership_item disabled">
          <strong class="info">회원</strong>
          <p class="title">회원 등급</p>
        </a>
        <a href="" class="membership_item">
          <strong class="info">0P</strong>
          <p class="title">포인트</p>
        </a>
      </div>
    </div>

    <div class="my_home_title">
      <h3>구매 내역</h3>
    </div>

  <div class="recent_purchase">
    <div class="purchase_list_tab">
      <div class="tab_item total">
        <a href="" class="tab_link">
          <dl class="tab_box">
            <dt class="title">전체</dt>
            <dd class="count">0</dd>
          </dl>
        </a>
      </div>
      <div class="tab_item tab_on">
        <a href="" class="tab_link">
          <dl class="tab_box">
            <dt class="title">입찰 중</dt>
            <dd class="count">0</dd>
          </dl>
        </a>
      </div>
      <div class="tab_item">
        <a href="" class="tab_link">
          <dl class="tab_box">
            <dt class="title">진행 중</dt>
            <dd class="count">0</dd>
          </dl>
        </a>
      </div>
      <div class="tab_item">
        <a href="" class="tab_link">
          <dl class="tab_box">
            <dt class="title">종료</dt>
            <dd class="count">0</dd>
          </dl>
        </a>
      </div>
    </div>
  </div>
  <div class="my_home_title">
    <h3>관심 상품</h3>
  </div>

  <div class="interest_product">
    <div class="product_list"></div>
  </div>
  

`
  // mySnbEl.append(myHomeEl)
  document.body.append(mySnbEl)
}
