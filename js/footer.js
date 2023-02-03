export default function appendFooter() {
  //CREATE HTML ELEMENT: FOOTER
  const footerHTML = document.createElement('footer')
  
  footerHTML.innerHTML = /*html*/ `
  <div class="inner" >
    <div class="service_area" >
      <div class="customer_service" >
        <!-- CUSTOMER SERVICE -->
        <strong class="service_title">
          고객센터
          <a href="#" class="sevice_tel">
            1588-7813
          </a>
        </strong>

        <div class="service_time" >
          <dl class="time_box" >
            <dt class="time_term" >
              운영시간 평일 11:00 - 18:00 (토∙일, 공휴일 휴무) 점심시간 평일
              13:00 - 14:00
            </dt>
          </dl>
        </div>

        <p class="service_noti" >
          1:1 문의하기는 앱에서만 가능합니다.
        </p>
        <div class="service_btn_box" >
          <a href="#" class="btn solid small">
            자주 묻는 질문
          </a>
        </div>
      </div>

      <div class="footer_menu" >
        <!-- MENUS -->
        <div class="menu_box" >
          <strong class="menu_title" >이용안내</strong>
          <ul class="menu_list" >
            <li class="menu_item" >
              <a href="#" class="menu_link" >
                검수기준
              </a>
            </li>
            <li class="menu_item" >
              <a href="#" class="menu_link" >
                이용정책
              </a>
            </li>
            <li class="menu_item" >
              <a href="#" class="menu_link" >
                페널티 정책
              </a>
            </li>
            <li class="menu_item" >
              <a href="#" class="menu_link" >
                커뮤니티 가이드라인
              </a>
            </li>
          </ul>
        </div>
        <div class="menu_box" >
          <strong class="menu_title" >고객지원</strong>
          <ul class="menu_list" >
            <li class="menu_item" >
              <a href="#" class="menu_link">
                공지사항
              </a>
            </li>
            <li class="menu_item" >
              <a href="#" class="menu_link">
                서비스 소개
              </a>
            </li>
            <li class="menu_item" >
              <a href="#" class="menu_link">
                쇼룸 안내
              </a>
            </li>
            <li class="menu_item" >
              <a href="#" class="menu_link">
                판매자 방문접수
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="corporation_area" >
      <!-- CORPORATION AREA -->
      <ul class="term_list" >
        <li class="term_item" >
          <a href="#" class="term_link">
            회사소개
          </a>
        </li>
        <li class="term_item" >
          <a Nhref="#" class="term_link">
            인재채용
          </a>
        </li>
        <li class="term_item" style="display: none" >
          <a href="#" class="term_link">
            제휴제안
          </a>
        </li>
        <li class="term_item" >
          <a href="#" class="term_link" > 이용약관 </a>
        </li>
        <li class="term_item privacy" >
          <a href="#" class="term_link" >
            개인정보처리방침
          </a>
        </li>
      </ul>
      <div class="footer_sns" >
        <div class="sns_box" >
          <a href="#" aria-label="인스타그램" class="sns" >
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z" stroke="#222222"/>
            <circle cx="16.5" cy="7.5" r="1.5" fill="#222222"/>
            <circle cx="12" cy="12" r="3.5" stroke="#222222"/>
            </svg>
          </a>
          <a href="#" aria-label="페이스북" class="sns" >
              <svg fill="#000000" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve">
              <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M169.5,357.6l-2.9,38.3h-39.3
                v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,20.6-19.3,41.1-19.3c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2
                c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z"/>
              </svg>
            </a>
            <a href="#" aria-label="카카오톡" class="sns" >
              <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <g>
                      <path fill="none" d="M0 0h24v24H0z"/>
                      <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3zm5.907 8.06l1.47-1.424a.472.472 0 0 0-.656-.678l-1.928 1.866V9.282a.472.472 0 0 0-.944 0v2.557a.471.471 0 0 0 0 .222V13.5a.472.472 0 0 0 .944 0v-1.363l.427-.413 1.428 2.033a.472.472 0 1 0 .773-.543l-1.514-2.155zm-2.958 1.924h-1.46V9.297a.472.472 0 0 0-.943 0v4.159c0 .26.21.472.471.472h1.932a.472.472 0 1 0 0-.944zm-5.857-1.092l.696-1.707.638 1.707H9.092zm2.523.488l.002-.016a.469.469 0 0 0-.127-.32l-1.046-2.8a.69.69 0 0 0-.627-.474.696.696 0 0 0-.653.447l-1.661 4.075a.472.472 0 0 0 .874.357l.33-.813h2.07l.299.8a.472.472 0 1 0 .884-.33l-.345-.926zM8.293 9.302a.472.472 0 0 0-.471-.472H4.577a.472.472 0 1 0 0 .944h1.16v3.736a.472.472 0 0 0 .944 0V9.774h1.14c.261 0 .472-.212.472-.472z"/>
                  </g>
              </svg>
            </a>
        </div>
        <!-- 모바일 환경 사업자 정보 토글 버튼 -->
        <button class="btn_business" >
          사업자정보
          <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
            width="12px" height="12px" viewBox="0 0 451.847 451.847"
            xml:space="preserve">
          <g>
            <path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
              c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
              c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/>
          </g>
          </svg>
        </button>
      </div>
      <div class="business_info" >
        <div class="info_list" >
          <dl class="info_item" >
            <dt class="business_title" >
              크림 주식회사 · 대표 김창욱 
              <span class="blank"></span> 
              사업자등록번호 : 570-88-01618
              <a href="#">
                사업자정보확인
              </a>
              <span class="blank"></span>
              통신판매업 : 제 2021-성남분당C-0093호
              <span class="blank"></span>
              사업장소재지 : 경기도 성남시 분당구 분당내곡로 131 판교테크원 타워1, 8층
              <span class="blank"></span>
              호스팅 서비스 : 네이버 클라우드 ㈜
            </dt>
          </dl>
        </div>
      </div>
    </div>
    <!-- NOTICE GUARANTEE -->
    <div class="notice_guarantee" >
      <p class="title" >신한은행 채무지급보증 안내</p>
      <p class="description" > 
        당사는 고객님의 현금 결제 금액에 대해 신한은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다.
        <a href="#" class="link_guarantee">
          서비스가입 사실 확인
        </a>
      </p>
    </div>
    <!-- NOTICE AREA -->
    <div class="notice_area" >
      <p class="notice" >
        크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본
        상품은 개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한
        의무와 책임은 각 판매자에게 있습니다. 단, 이용약관 및 정책, 기타
        거래 체결 과정에서 고지하는 내용 등에 따라 검수하고 보증하는 내용에
        대한 책임은 크림(주)에 있습니다.
      </p>
      <p class="copyright" >© KREAM Corp.</p>
    </div>
  </div>
  `
  //APPEND TO BODY
  document.body.append(footerHTML)
}
