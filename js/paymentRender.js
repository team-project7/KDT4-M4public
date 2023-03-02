export function renderPaymentPage(item) {
  const paymentPage = document.createElement('div')
  paymentPage.classList.add('payment-page')
  const paymentContent = document.createElement('div')
  paymentContent.classList.add('payment-content')
  paymentContent.append(
    renderProductInfoArea(item),
    renderDelieveryInfoArea(),
    renderOrderTotalArea(item, true),
    renderPaymentMethodArea(),
    renderChecklistArea(item),
    renderAccountModal(),
    renderNewAccountModal(),
    renderAddProfileModal()
  )

  const paymentContainer = document.createElement('div')
  paymentContainer.classList.add('payment-container')
  paymentContainer.append(paymentContent)

  paymentPage.append(
    renderPageHeader("배송/결제"),
    paymentContainer
  )
  return paymentPage
}

function renderPageHeader(centerText) {
  const headerEl = document.createElement('div')
  headerEl.classList.add('page-header')

  headerEl.innerHTML = /*html*/ `
    <div class="page-header__top">
      <span class="flex-space"></span>
      <ul class="page-header__top-menus">
        <li>
          <a>
            관심상품
          </a>
        </li>
        <li>
        <a href="/login">
            로그아웃
          </a>
        </li>
      </ul>
    </div>

    <div class="page-header__main">
      <a href="/">
      </a>
      <h1>${centerText}</h1>
      <button class="payment-btn thick">검수기준</button>
    </div>
  `

  return headerEl
}

export function renderProductInfoArea(item) {
  const productInfoArea = document.createElement('section')
  productInfoArea.classList.add('product-info-area')

  productInfoArea.innerHTML = /*html*/ `
    <div class="product-img">
      <img src=${item.thumbnail} alt="item image" />
    </div>
    <div class="product-detail">
      <h3>${item.title}</h3>
      <span>${item.description}</span>
    </div>  
  
  `
  return productInfoArea
}

function renderDelieveryInfoArea() {
  const deliveryTitle = document.createElement('div')
  deliveryTitle.classList.add('delivery-title')
  deliveryTitle.innerHTML = /*html*/ `
    <h1>배송 주소</h1>
    <a id="payment__add-delivery-profile">
      + 새 주소 추가
    </a>
  `
  const deliveryContent = document.createElement('div')
  deliveryContent.classList.add('delivery-content')
  deliveryContent.innerHTML = /*html*/ `
    <dl class="delivery-info-list">

      <div class="info-box">
        <dt class="delivery-info__title">
            받는 분
        </dt>
        <dd id="payment__delivery-name" class="delivery-info__desc">받는분</dd>
      </div>

      <div class="info-box">
        <dt class="delivery-info__title">
          연락처
        </dt>
        <dd id="payment__delivery-name" class="delivery-info__desc">연락처</dd>
      </div>

      <div class="info-box">
        <dt class="delivery-info__title">
          배송 주소
        </dt>
        <dd id="payment__delivery-name" class="delivery-info__desc">배송주소</dd>
      </div>
      
      <button class="payment-btn grey" id="payment__delivery-profile-change-btn">변경</button>
    </dl>
    <button class="payment-btn" id="payment__shipping-memo-btn">
      <span>배송 시 요청사항을 선택하세요.</span>
      <span>►</span>
    </button>
  `

    const deliveryMethod = document.createElement('div')
    deliveryMethod.classList.add('delivery-method')
    deliveryMethod.innerHTML = /*html*/ `
      <h1>배송 방법</h1>
      <div class="delivery-method__methods">
        <button id="delivery-method__delivery-select-btn" class="payment-btn wide selectable selected">
          <div class="method__img-wrapper delivery"></div>
          <div class="method__text-wrapper">
            <div class="method__title">
              <span>일반배송</span>
              <span>3,000원</span>
            </div>
            <span class="method__desc">검수 후 배송 ・ 5-7일 내 도착 예정</span>
          </div>
        </button>
        <button id="delivery-method__storage-select-btn" class="payment-btn wide selectable">
          <div class="method__img-wrapper storage"></div>
          <div class="method__text-wrapper">
            <div class="method__title">
              <span>창고보관</span>
              <span>첫 30일 무료 <svg width="15px" height="15px"xmlns="http://www.w3.org/2000/svg" id="i-ico-help" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#fff"></circle><circle cx="8" cy="8" r="7.5" stroke="#222" stroke-opacity=".3"></circle><path d="M7.086 9.346h1.213v-.334c0-.592.217-.908.972-1.354.774-.463 1.231-1.101 1.231-2.004v-.006c0-1.26-1.049-2.173-2.59-2.173-1.7 0-2.578 1.007-2.654 2.267l-.006.07h1.213l.006-.052c.064-.715.568-1.207 1.377-1.207.797 0 1.324.48 1.324 1.148v.006c0 .598-.252.938-.961 1.365-.803.48-1.149 1.008-1.13 1.805l.005.469zm.615 2.719c.44 0 .774-.335.774-.762a.75.75 0 00-.774-.756.753.753 0 00-.767.756c0 .427.34.761.767.761z" fill="#222" fill-opacity=".4"></path></svg></span>
            </div>
            <span class="method__desc">배송 없이 창고에 보관 ・ 빠르게 판매 가능</span>
          </div>
        </button>
      </div>
    `

  const delieveryArea = document.createElement('section')
  delieveryArea.classList.add('delivery-area')

  delieveryArea.append(deliveryTitle, deliveryContent, deliveryMethod)

  return delieveryArea
}

function renderOrderTotalArea(item, isDelivery) {
  const orderTotalArea = document.createElement('section')
  
  orderTotalArea.classList.add('order-area')
  orderTotalArea.innerHTML = /*html*/ `
    <h1>최종 주문 정보</h1>

    <div class="order-content">

      <div class="order-content__total">
        <h1>총 결제금액</h1>
        <div class="order-content__total-amount">
          <span id="order-content__total-amount">
            ${(item.price + 2400 + 3000).toLocaleString()}원
          </span>
        </div>

      </div>

      <div class="order-content__desc">

        <dl class="order-content__desc-details">
          <dt class="price-title">
            <span>즉시 구매가</span>
          </dt>
          <dd class="price-text">${(item.price).toLocaleString()}원</dd>
        </dl>
        <dl class="order-content__desc-details">
          <dt class="price-title">
            <span>포인트</span>
          </dt>
          <dd class="price-text">-</dd>
        </dl>
        <dl class="order-content__desc-details">
          <dt class="price_title">
            <span >검수비</span>
          </dt>
          <dd  class="price-text">무료</dd>
        </dl>
        <dl class="order-content__desc-details">
          <dt class="price-title">
            <span>수수료</span>
            <svg width="15px" height="15px"xmlns="http://www.w3.org/2000/svg" id="i-ico-help" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#fff"></circle><circle cx="8" cy="8" r="7.5" stroke="#222" stroke-opacity=".3"></circle><path d="M7.086 9.346h1.213v-.334c0-.592.217-.908.972-1.354.774-.463 1.231-1.101 1.231-2.004v-.006c0-1.26-1.049-2.173-2.59-2.173-1.7 0-2.578 1.007-2.654 2.267l-.006.07h1.213l.006-.052c.064-.715.568-1.207 1.377-1.207.797 0 1.324.48 1.324 1.148v.006c0 .598-.252.938-.961 1.365-.803.48-1.149 1.008-1.13 1.805l.005.469zm.615 2.719c.44 0 .774-.335.774-.762a.75.75 0 00-.774-.756.753.753 0 00-.767.756c0 .427.34.761.767.761z" fill="#222" fill-opacity=".4"></path></svg></span>
          </dt>
          <dd id="order-content__transaction-fee" class="price-text">
            2400원
          </dd>
        </dl>
        <dl class="order-content__desc-details">
          <dt class="price-title">
            <span >배송비</span>
          </dt>
          <dd id="order-content__delivery-charge" class="price-text">
            3000원
          </dd>
        </dl>

      </div>

    </div>
  `

  return orderTotalArea
}

function renderPaymentMethodArea() {
  const paymentMethodArea = document.createElement('section')
  paymentMethodArea.classList.add('method-area')
  paymentMethodArea.innerHTML = /*html*/ `
    <h1>결제 방법</h1>

    <div class="method-content">

      <div class="method-simple">

        <div class="method-simple__title">
          <h2 class="method-simple__title-text">
            계좌 간편결제
            <span class="method-simple__title-text__tag">
              결제 시 포인트 적립
            </span>
          </h2>
          
        </div>

        <button id="method-simple__acc-btn" class="payment-btn wide selectable">
          <span>계좌를 등록해주세요.</span>
          <span>
            첫 등록 시
            <span class="method-simple__point-text">3,000P</span>
            ▼
          </span>
        </button>
        
      </div>

      <div class="method-simple">

        <div class="method-simple__title">
          <h2 class="method-simple__title-text">
            카드 간편결제
            <span class="method-simple__title-text__sub">
              일시불
            </span>
          </h2>
          
        </div>
        
        <button id="method-simple__card-btn" class="payment-btn wide">
          <span>카드를 등록해주세요.</span>
          <span>▼</span>
        </button>
        
      </div>

      <div class="method-general">

        <div class="method-general__title">
          <h1 class="method-general__title-text">일반 결제</h1>
          <span class="method-general__title-sub">일시불・할부</span>
        </div>
        
        <ul class="method-general__grid">
          <li class="method-general__grid-item">
            <a class="selectable" >
              <span class="grid-title">
                신용카드
              </span>
            </a>
          </li>
          <li class="method-general__grid-item">
            <a class="selectable" >
              <span class="grid-title">
                네이버
              </span>
              <div class="grid-img naver">
                
              </div>
            </a>
          </li>
          <li class="method-general__grid-item">
            <a class="selectable" >
              <span class="grid-title">
                카카오
              </span>
              <div class="grid-img kakao">
                
              </div>
            </a>
          </li>
          <li class="method-general__grid-item">
            <a class="selectable" >
              <span class="grid-title">
                토스
              </span>
              <div class="grid-img toss">
                
              </div>
            </a>
          </li>
          <li class="method-general__grid-item">
            <a class="selectable" >
              <span class="grid-title">
                페이코
              </span>
              <div class="grid-img payco">
                
              </div>
            </a>
          </li>
        </ul>
        
      </div>
    
      <ul class="benefit-list">
        <li class="benefit-list__item">
          <p class="benefit-list__item-title">계좌간편결제</p>
          <p class="benefit-list__item-desc">
            최대 5만 포인트 적립 &amp; 수수료 할인
          </p>
          <a
            href="https://kream.co.kr/exhibitions/744"
            target="_blank"
            class="btn_more"
            >더보기</a
          >
        </li>
        <li class="benefit-list__item">
          <p class="benefit-list__item-title">카카오페이</p>
          <p class="benefit-list__item-desc">
            신한카드로 결제 시 1만5천원 즉시할인
          </p>
          <a
            href="https://kream.co.kr/exhibitions/867"
            target="_blank"
            class="btn_more"
            >더보기</a
          >
        </li>
        <li class="benefit-list__item">
          <p class="benefit-list__item-title">네이버페이</p>
          <p class="benefit-list__item-desc">
            최대 25,000원 포인트 지급
          </p>
          <a
            href="https://kream.co.kr/exhibitions/841"
            target="_blank"
            class="btn_more"
            >더보기</a
          >
        </li>
        <li class="benefit-list__item">
          <p class="benefit-list__item-title">페이코</p>
          <p class="benefit-list__item-desc">
            포인트 5% 적립
          </p>
          <a
            href="https://kream.co.kr/exhibitions/805"
            target="_blank"
            class="btn_more"
            >더보기</a
          >
        </li>
        <li class="benefit-list__item">
          <p class="benefit-list__item-title">토스</p>
          <p class="benefit-list__item-desc">
            첫 결제시 3천원 캐시백
          </p>
          <a
            href="https://kream.co.kr/exhibitions/803"
            target="_blank"
            class="btn_more"
            >더보기</a
          >
        </li>
      </ul>


    </div>
  `

  return paymentMethodArea
}

function renderChecklistArea(item) {
  const checklistArea = document.createElement('section')
  checklistArea.classList.add('checklist-area')
  checklistArea.innerHTML = /*html*/ `
    <ul class="checklist">

      <li class="checklist__item">
        <a  class="checklist__item-area">
          <label for="confirm1" class="checklist__label">
            <div class="notice">
              <p class="notice__maintext">
                판매자의 판매거부, 배송지연, 미입고 등의 사유가 발생할 경우,
                거래가 취소될 수 있습니다.
              </p>
              <p class="notice__subtext">
                앱 알림 해제, 알림톡 차단, 전화번호 변경 후 미등록 시에는 거래
                진행 상태 알림을 받을 수 없습니다.
              </p>
            </div>

            <div class="checkbox">
              <input
                id="confirm1"
                type="checkbox"
                name="checklist"
              />
              
            </div>
          </label>
        </a>
      </li>

      <li class="checklist__item">
        <a  class="checklist__item-area">
          <label for="confirm2" class="checklist__label">
            <div class="notice">
              <p class="notice__maintext">
                창고 보관을 선택한 경우, 구매자에게 배송되지 않고 KREAM 창고에
                보관됩니다.
              </p>
              <p class="notice__subtext">
                검수 합격 후 보관이 완료되면 창고 이용료(현재 첫 30일 무료)가
                결제됩니다.
              </p>
            </div>
            <div class="checkbox">
              <input
                id="confirm2"
                type="checkbox"
                name="checklist"
              />
            </div>
          </label>
        </a>
      </li>

      <li class="checklist__item">
        <a  class="checklist__item-area">
          <label for="confirm3" class="checklist__label">
            <div class="notice">
              <p class="notice__maintext">
                ‘바로 결제하기’ 를 선택하시면 즉시 결제가 진행되며, 단순 변심이나
                실수에 의한 취소가 불가능합니다.
              </p>
              <p class="notice__subtext">
                본 거래는 개인간 거래로 전자상거래법(제17조)에 따른 청약철회(환불,
                교환) 규정이 적용되지 않습니다.
              </p>
            </div>
            <div class="checkbox">
              <input
                id="confirm3"
                type="checkbox"
                name="checklist"
              />
            </div>
          </label>
        </a>
      </li>

      <li class="checklist__item">
        <a  class="checklist__item-area">
          <label for="confirm4" class="checklist__label">
            <div class="notice">
              <p class="notice__maintext">
                구매 조건을 모두 확인하였으며, 거래 진행에 동의합니다.
              </p>
            </div>
            <div class="checkbox">
              <input
                id="confirm4"
                type="checkbox"
                name="checklist"
              />
            </div>
          </label>
        </a>
      </li>
    </ul>
    
    <div class="checklist-total">
      <dl class="checklist-total__price">
        <dt class="checklist-total__price-title">총 결제금액</dt>
        <dd class="checklist-total__price-amount">
          <span id="checklist-total__amount" class="amount">${(item.price).toLocaleString()}원</span>
        </dd>
      </dl>
    </div>
    <button id="payment-final-btn" class="payment-btn wide confirm">
        결제하기
    </button>

  `
  return checklistArea
}

export function renderAddProfileModal() {
  const addProfileModal = document.createElement('aside')
  addProfileModal.classList.add('modal-container')
  addProfileModal.classList.add('hidden')
  addProfileModal.setAttribute('id','add-profile-modal-container')
  
  addProfileModal.innerHTML = /*html*/ `
  <div class="modal add-modal">
    <div class="modal-header">
      <a id="add-profile-modal-header__close-btn" class="modal-header__close-btn">✖</a>
      <h1 class="modal-header__title">새 주소 추가</h1>
    </div>
    <div class="modal-inner">
    <div class="add-modal-section">
        <h2 class="add-modal-section__title">이름</h2>
        <input id="add-profile-modal__name-input" class="add-modal-section__input" type="text" placeholder="수령인의 이름" />
        <span class="add-modal-section__input-error">올바른 이름을 입력해주세요. (2-50자)</span>
      </div>
      <div class="add-modal-section">
        <h2 class="add-modal-section__title">휴대폰 번호</h2>
        <input id="add-profile-modal__phone-input" class="add-modal-section__input" type="text" placeholder="- 없이 입력" />
        <span class="add-modal-section__input-error">정확한 휴대폰 번호를 입력해주세요.</span>
      </div>
      <div class="add-modal-section">
        <h2 class="add-modal-section__title">우편번호</h2>
        <input id="add-profile-modal-section__zipcode-input" class="add-modal-section__input" type="text" placeholder="우편 번호를 검색하세요" readonly="readonly" />
        <button id="add-profile-modal-section__search-btn" class="payment-btn grey">우편번호</button>
      </div>
      <div class="add-modal-section">
        <h2 class="add-modal-section__title">주소</h2>
        <input id="add-profile-modal-section__name" class="add-modal-section__input" type="text" placeholder="우편 번호 검색 후, 자동 입력 됩니다." readonly="readonly"/>
      </div>
      <div class="add-modal-section">
        <h2 class="add-modal-section__title">상세 주소</h2>
        <input id="add-profile-modal-section__address-input" class="add-modal-section__input" type="text" placeholder="건물, 아파트, 동/호수 입력" />
      </div>
      <div class="add-modal__checkbox">
        <input id="add-profile-modal__set-default" type="checkbox" />
        <span>기본 배송지로 설정</span>
      </div>
      <div class="add-modal__btns">
        <button id="add-profile-modal__btns-cancel-btn" class="payment-btn grey">취소</button>
        <button id="add-profile-modal__btns-save-btn" class="payment-btn" disabled="true">저장하기</button>
      </div>
    </div>
  </div>
  `
  return addProfileModal
}

export function renderGetProfilesModal(delieveryProfiles) {
  const profilesModal = document.createElement('aside')
  profilesModal.classList.add('get-modal-container')
  profilesModal.innerHTML = /*html*/ `
    <div class="get-modal-header">
      <a  id="get-modal__close-btn" class="close-btn">✖</a>
      <h1 class="get-modal__title">주소록</h1>
    </div>

    <ul class="get-modal__profiles"></ul>
  `

  return profilesModal
}

function renderGetProfile(profile) {

  return liEl
}

function renderAccountModal() {
  const accountModal = document.createElement('aside')
  accountModal.classList.add('modal-container')
  accountModal.classList.add('hidden')
  accountModal.setAttribute('id','acc-modal-container')
  accountModal.innerHTML = /*html*/`
  <div class="modal acc-modal">
    <div class="modal-header">
      <a id="acc-modal-header__close-btn" class="modal-header__close-btn">✖</a>
      <h1 class="modal-header__title">계좌선택</h1>
    </div>
    <div class="modal-inner">
      <div class="swiper-container acc-modal__account">
        <div id="acc-modal__swiper-wrapper" class="swiper-wrapper">
          <div class="swiper-slide">
            <div id="acc-modal__add-acc-btn" class="acc-modal__account-item empty">
              <span>+</span>
              <span>계좌 등록하기</span>
            </div>
            <span class="acc-modal__text">은행당 1개 계좌만 등록할 수 있습니다.</span>
          </div>
        </div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

      </div>

      <div class="acc-modal__receipt">
        <div class="acc-modal__receipt-apply">
          <h1>현금 영수증</h1>
          <div class="receipt__radios">
            <label for="receipt-input-applied">신청함</label>
            <input id="receipt-input-applied" name="apply" type="radio">
            <label for="receipt-input-none">미신청</label>
            <input id="receipt-input-none" name="apply" type="radio">
          </div>
        </div>
        
        <select class="acc-modal__receipt-select">
          <option value="cell">
            개인소득공제(휴대폰)
          </option>
          <option value="card">
            개인소득공제(현금영수증카드)
          </option>
        </select>
        
        <input class="acc-modal__receipt-input" type="text" placeholder="-없이 입력" />
        
        <div class="acc-modal__receipt-save">
          <input type="checkbox" />
          <label for="receipt-save-checkbox">현금영수증 신청 정보 저장</label>
        </div>
        
        <p class="acc-modal__text">
          현금영수증 확인 및 정보 변경을 원하실 경우, 국세청 홈페이지에서 확인하실 수 있습니다. 
        </p>
        
        <div class="acc-modal__btns">
          <button id="acc-modal__save-btn" class="payment-btn modal-btn">저장하기</button>
        </div>


    </div>  
  </div>

  `
  return accountModal
}

export function renderBankSlide(account) {
  const slide = document.createElement('div')
  slide.classList.add('swiper-slide')
  
  slide.innerHTML = /*html*/`
    <div data-bank="${account.id}" class="acc-modal__account-item">
      <span>${account.bankName}</span>
      <span>${account.accountNumber}</span>
      <span>잔액: ${account.balance.toLocaleString()}원</span>
    </div>
    <span class="acc-modal__text">은행당 1개 계좌만 등록할 수 있습니다.</span> 
  `
  return slide
}

export function renderEmptySlide() {
  const emptySlide = document.createElement('div')
  emptySlide.classList.add('swiper-slide')
  emptySlide.innerHTML = /*html*/`
    <div id="acc-modal__add-acc-btn" class="acc-modal__account-item empty">
      <span>+</span>
      <span>계좌 등록하기</span>
    </div>
    <span class="acc-modal__text">은행당 1개 계좌만 등록할 수 있습니다.</span>

  `

  return emptySlide
}

function renderNewAccountModal() {
  const newAccountModal = document.createElement('aside')
  newAccountModal.classList.add('modal-container', 'hidden')
  newAccountModal.setAttribute('id', 'newAcc-modal-container')

  newAccountModal.innerHTML = /*html*/ `
    <div class="modal newAcc-modal">
      <div class="modal-header">
        <a id="newAcc-modal-header__close-btn" class="modal-header__close-btn">✖</a>
        <h1 class="modal-header__title">계좌추가</h1>
      </div>

      <div class="modal-inner">
        <div class="newAcc-modal__input">
          <label for="newAcc-modal__bankCode">은행</label>
          <select id="newAcc-modal__bankCode" selected="default">
            <option value="default" hidden="true">
              연결할 계좌의 은행을 선택하세요.
            </option>  
            <option value="004" data-digit=12>
              KB국민은행
            </option>
            <option value="088">
              신한은행
            </option>
            <option value="020">
              우리은행
            </option>
            <option value="081">
              하나은행
            </option>
            <option value="089">
              케이뱅크
            </option>
            <option value="090">
              카카오뱅크
            </option>
            <option value="011">
              NH농협은행
            </option>
          </select>
          <label for="newAcc-modal__acc-digit">계좌번호</label>
          <input id="newAcc-modal__acc-digit" type="text" autocomplete="off" onKeyup="this.value=this.value.replace(/[^-0-9]/g,'');" placeholder="은행 선택 후 -없이 입력" maxlength="0" />
          <label for="newAcc-modal__phone">휴대폰번호</label>
          <input id="newAcc-modal__phone" type="text" autocomplete="off" onKeyup="this.value=this.value.replace(/[^-0-9]/g,'');" placeholder="-없이 입력" maxlength="11" />
          <div class="newAcc-modal__input-sig">
            <label for="newAcc-modal__sig">서명확인</label>
            <input id="newAcc-modal__sig" type="checkbox" />
          </div>
        </div>

        <div class="newAcc-modal__btns">
          <button id="newAcc-modal__add-btn" class="payment-btn modal-btn disabled">추가</button>
        </div>
      </div>
    </div>
  `

  return newAccountModal
}

export function renderOnPurchaseSuccess(item, isDelivery) {
  const successPage = document.createElement('section')
  successPage.classList.add('purchase-success')
  
  successPage.innerHTML = /*html*/`
      <h1>구매 완료</h1>
      
      <dl class="purchase-success-list">

        <div class="info-box">
          <dt class="purchase-success__title">
              결제 금액
          </dt>
          <dd class="purchase-success__desc">${item.price.toLocaleString()}원</dd>
        </div>

        <div class="info-box">
          <dt class="purchase-success__title">
            배송 방법
          </dt>
          <dd class="purchase-success__desc">${isDelivery ? "배송" : "창고 보관"}</dd>
        </div>
      </dl>

      <div class="purchase-success__btns">
        <a href="/" class="payment-btn">홈으로</a>
        <a href="/shop" class="payment-btn">상품 더 보기</a>
      </div>
  
  `
  
  return successPage
}

export function renderOnPurchaseFailed() {
  
}