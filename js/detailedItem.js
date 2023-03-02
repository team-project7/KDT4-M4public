export { appendDetailedItem }

import { appendProducts, appendSmallProducts } from './products'
import { appendSmallItem } from './item'
import { getProduct } from './request'
// 이미지 모음
import imgNomal from '../image/detailedItem_delivery.png'
import imgPointBanner from '../image/detailedItem_pointBanner.jpg'
import imgThreeX from '../image/img_guide_item_3x.svg'
import imgChecked from '../image/img_guide_item_checked.svg'
import imgKreamBox from '../image/img_guide_item_kreamBox.svg'

function appendDetailedItem() {
  const URLSearch = new URLSearchParams(location.search)
  console.log(URLSearch.get('name'))
  const productName = URLSearch.get('name')

  async function getProduct() {
    const res = await fetch(
      `https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/${productName}`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          apikey: 'FcKdtJs202301',
          username: 'KDT4_TEAM7',
        },
      }
    )

    const json = await res.json()
    console.log(json)

    return json
  }
  getProduct()

  const renderDetailProduct = async (productId) => {
    const { description, id, isSoldOut, price, tags, title, thumbnail } =
      await getProduct(productId)

    // 상세 품목 페이지 렌더링
    const detailedItem = document.createElement('div')
    const header = document.querySelector('.header')

    detailedItem.classList.add('detailedItem')

    detailedItem.innerHTML = /*html*/ `
        <div class="item_floating hide">
          <div class="floating_wrap">
            <div class="item_wrap">
              <img src="${thumbnail}" alt="제품이미지">
              <div class="name_wrap">
                <p class="name">${title}</p>
                <p class="KORname">${title}</p>
              </div>
            </div>
            <a class="wishlist_btn">
              <span class="material-symbols-outlined">
                bookmark
              </span>
            </a>
            <a href="javascript:void(0)" class="floatingPurchase_btn">구매하기</a>
          </div>
        </div>
        <div class="wrap">
        <section class="detailedItem_item">
          
          <div class="item_leftSide">
            <div class="item_img">
              <img src="${thumbnail}" alt="제품이미지">
            </div>
            <div class="item_salesAlert">
              <a href="javascript:void(0)">
                <span class="alertMark">주의</span>
                <span class="alertHead">판매 거래 주의사항</span>
                <p class="alertText">반드시 보유한 상품만 판매하세요.</p>
                <span class="material-symbols-outlined">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
  
          <div class="item_rightSide">
  
            <div>
              <a href="javascript:void(0)" class="item_name">${tags[0]}</a>
            </div>
  
            <p class="item_title">${title}</p>
            <small class="item_KORtitle">${description}</small>
  
            <div class="item_size">
              <span class="size_txt">사이즈</span>
              <a href="javascript:void(0)" class="size_btn">
                <span class="btn_txt">모든 사이즈(예시)</span>
                <span class="material-symbols-outlined">
                  arrow_drop_down
                </span>
              </a>
            </div>
  
            <div class="item_price">
              <span class="price_txt">구매가</span>
              <span class="price_nowPrice">${price}</span>
              <span class="price_won">원</span>
            </div>
  
            <a href="javascript:void(0)" class="purchase_btn">구매하기</a>
  
            <a href="javascript:void(0)" class="wishlist_btn">
              <span class="material-symbols-outlined">
                bookmark
              </span>
              <span class="wishlist_txt">관심상품</span>
            </a>
  
            <div class="delivery_wrap">
              <p class="delivery_info_head">배송 정보</p>
              <div class="delivery_info">
                <img src="${imgNomal}" alt="일반배송이미지" class="info_normal">
                <div class="info_txt">
                  <p class="info_up">
                    <span class="bold">일반배송</span>
                    <span class="money">3,000원</span>
                  </p>
                  <p class="info_down">
                    검수 후 배송 5-7일 내 도착 예정
                  </p>
                </div>
              </div>
            </div>
  
            <a href="/" class="banner_pointBanner">
              <img src="${imgPointBanner}" alt="계좌 이체 구매 시 최대 5만P 적립 & 수수료 할인">
            </a>
  
            <div class="confirm_wrap">
              <h3>구매 전 꼭 확인해주세요!</h3>
  
              <div class="dropdown_wrap">
                <div class="dropdown_head">
                  <p>배송 기간 안내</p>
                  <span class="material-symbols-outlined">
                    expand_more
                  </span>
                </div>
                <div class="dropdown_content hide">
  
                  <strong class="content_strong">
                    KREAM은 최대한 빠르게 모든 상품을 배송하기 위해 노력하고 있습니다. 배송 시간은 판매자가 검수를 위하여 상품을 검수센터로 보내는 속도에 따라 차이가 있습니다.
                  </strong>
  
                  <p class="content_title">
                    [빠른배송 구매]
                  </p>
  
                  <p class="content_main">
                    - 판매자가 보관 신청한 상품 중 검수에 합격한 상품을 KREAM의 전용 창고에 보관합니다. 보관 상품에 한하여 바로 구매와 95점 구매가 가능합니다.
                  </p>
  
                  <p class="content_main">
                    - 오늘(오후 11:59까지) 결제하면 내일 바로 출고되어 빠른 배송이 가능합니다. (연휴 및 공휴일, 천재지변, 택배사 사유 등 예외적으로 출고일이 변경될 수 있습니다.
                    <a href="javascript:void(0)">빠른배송 안내</a>
                  </p>
  
                  <p class="content_title">
                    [일반 구매]
                  </p>
  
                  <p class="content_main">
                    - 거래가 체결된 시점부터 48시간(일요일•공휴일 제외) 내에 판매자가 상품을 발송해야 하며, 통상적으로 발송 후 1-2일 내에 KREAM 검수센터에 도착합니다.
                  </p>
  
                  <p class="content_main">
                    - 검수센터에 도착한 상품은 입고 완료 후 3영업일 이내에 검수를 진행합니다. 검수 합격시 배송을 준비합니다.
                  </p>
  
                  <p class="content_main">
                    * 상품 종류 및 상태에 따라 검수 소요 시간은 상이할 수 있으며, 구매의사 확인에 해당할 경우 구매자와 상담 진행으로 인해 지연이 발생할 수 있습니다.
                  </p>
  
                  <p class="content_main">
                    - 검수센터 출고는 매 영업일에 진행하고 있으며, 출고 마감시간은 오후 5시입니다. 출고 마감시간 이후 검수 완료건은 운송장번호는 입력되지만 다음 영업일에 출고됩니다.
                  </p>
  
                </div>
              </div>
              <div class="dropdown_wrap">
                <div class="dropdown_head">
                  <p>검수 안내</p>
                  <span class="material-symbols-outlined">
                    expand_more
                  </span>
                </div>
                <div class="dropdown_content hide">
  
                  <strong class="content_strong">
                    판매자의 상품이 검수센터에 도착하면 전담 검수팀이 철저한 분석과 검사로 정가품 확인을 진행합니다.
                  </strong>
  
                  <p class="content_main">
                    - 검수센터에서는 정가품 여부를 확인하기 위하여, 지속적으로 데이터를 쌓고 분석하여 기록하고 있습니다.
                  </p>
  
                  <p class="content_main">
                    - 업계 전문가로 구성된 검수팀은 박스와 상품의 라벨에서 바느질, 접착, 소재 등 모든 것을 검수합니다.
                  </p>
  
                  <strong class="content_strong">
                    검수 결과는 불합격•검수 보류•합격의 세가지 상태로 결과가 변경됩니다.
                    <a href="javascript:void(0)">검수기준 보기</a>
                  </strong>
  
                  <p class="content_sub">
                    * 검수 합격: KREAM 검수택(Tag)이 부착되어 배송을 준비함
                  </p>
                  <p class="content_sub">
                    * 검수 보류: 앱에서 사진으로 상품의 상태 확인 및 구매 여부를 선택. (24시간 이후 자동 검수 합격)
                  </p>
                  <p class="content_sub">
                    * 검수 불합격: 즉시 거래가 취소되고 구매하신 금액을 환불 처리함.(환불 수단은 결제 수단과 동일)
                  </p>
                </div>
              </div>
  
              <div class="dropdown_wrap">
                <div class="dropdown_head">
                  <p>구매 환불/취소/교환 안내</p>             
                  <span class="material-symbols-outlined">
                    expand_more
                  </span>
                </div>
                <div class="dropdown_content hide">
  
                  <strong class="content_strong">
                    KREAM은 익명 거래를 기반으로 판매자가 판매하는 상품을 구매자가 실시간으로 구매하여 거래를 체결합니다.
                  </strong>
  
                  <p class="content_main">
                    - 단순 변심이나 실수에 의한 취소/교환/반품이 불가능합니다. 상품을 원하지 않으시는 경우 언제든지 KREAM에서 재판매를 하실 수 있습니다.
                  </p>
  
                  <p class="content_main">
                    - 상품 수령 후, 이상이 있는 경우 KREAM 고객센터로 문의해주시기 바랍니다.
                  </p>
                </div>
              </div>
  
            </div>
  
            <div class="point_guide">
              <ul>
                <li>
                  <img src="${imgThreeX}" alt="3X">
                  <div class="wrap">
                    <strong>100% 정품 보증</strong>
                    <p>KREAM에서 검수한 상품이 정품이 아닐 경우, 구매가의 3배를 보상합니다.</p>
                  </div>
                </li>
                <li>
                  <img src="${imgChecked}" alt="체크된 돋보기">
                  <div class="wrap">
                    <strong>엄격한 다중 검수</strong>
                    <p>모든 상품은 검수센터에 도착한 후, 상품별 전문가 그룹의 체계적인 시스템을 거쳐 검수를 진행합니다.</p>
                  </div>
                </li>
                <li>
                  <img src="${imgKreamBox}" alt="크림 박스">
                  <div class="wrap">
                    <strong>정품 인증 패키지</strong>
                    <p>검수에 합격한 경우에 한하여 KREAM의 정품 인증 패키지가 포함된 상품이 배송됩니다.</p>
                  </div>
                </li>
              </ul>
            </div>
  
            <p class="item_info">
              크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본 상품은 개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한 의무와 책임은 각 판매자에게 있습니다. 단, 이용약관 및
              정책, 기타 거래 체결 과정에서 고지하는 내용 등에 따라 검수하고 보증하는 내용에 대한 책임은 크림(주)에 있습니다.
            </p>
  
  
          </div>
        </section>
        <section class="detailedItem_another">
          <div class="another_head">
            <h3><span>${tags[0]}</span> 의 다른 상품</h3>
            <a href="/shop?id=${tags[0]}">
              <span>
                더보기
              </span>
              <span class="material-symbols-outlined">
                chevron_right
              </span>
            </a>
          </div>
          <div class="another_body">
            
          </div>
          </section>
        </div>
        <div class="purchase_popUp_background">
          <div class="purchase_popUp hide">
            <h3 class="popUp_title">상품 특이 사항</h3>
            <span class="material-symbols-outlined popUp_close">
              close
            </span>
            <h4 class="popUp_warning">보유한 상품만 거래되는 것이 원칙입니다.</h4>
            <div class="popUp_content">
              <p class="bold">반드시 보유한 상품만 거래 하세요.</p>
              <p class="content_txt">판매자는 거래 체결 후, 48시간 이내(일,공휴일 제외)에 상품을 발송하여야 합니다.</p>
              <p class="content_txt">보유한 상품이 아니거나, 즉시 발송이 불가능한 경우의 사전 거래 체결은 발송지연, 미입고 등으로 <span class="txt_red">페널티 15%</span>가 부과되며 향후 거래가 제한될 수 있습니다.</p>
              <p class="content_txt">구매자는 조기 거래 체결 시, 판매자의 상품 미보유 혹은 정식 발매 제품과 상이한 모델, 가품 등으로 인한 거래 실패 가능성이 있으므로 주의가 필요합니다.</p>
            </div>
          </div>
        </div>
      `

    // 페이지 랜더링
    header.after(detailedItem)

    const anotherBody = document.querySelector('.another_body')
    appendSmallProducts(tags[0], 12, anotherBody, 0)
    // console.log(appendProducts(tags[0], 12, 36, 0))

    // 안내 창 오픈 클로즈
    const heads = document.querySelectorAll('.dropdown_head')
    const contents = document.querySelectorAll('.dropdown_content')

    heads.forEach((head, index) => {
      head.addEventListener('click', () => {
        const content = contents[index]
        head.classList.toggle('show')
        content.classList.toggle('hide')
      })
    })
  }

  renderDetailProduct(productName)
}
