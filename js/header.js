import { logout } from './request'

export function appendHeadermain() {
  const headerEl = document.createElement('header')
  headerEl.className = 'header'
  headerEl.innerHTML = /*html*/ `
       <div class="header">
         <div class="header_top">
            <div class="top_inner">
                <ul class="top_list">
                    <li class="top_item">
                        <a href="" class="top_link">관심상품</a>
                    </li>
                    <li class="top_item">
                        <a href="/login" class="top_link" id="login">로그인</a>
                        <a class="top_link" id="logout">로그아웃</a>
                    </li>
                </ul>
            </div>
         </div>
         <div class="header_main">
            <div class="main_inner">
                    <a href="/" class="logo"><img src="https://kream.co.kr/_nuxt/img/login_title.9f9ccc8.png" alt=""></a>
                <div class="center">                  
                </div>
                <div class="right">
                    <div class="gnb_area">
                        <nav class="gnb">
                            <ul class="gnb_list">
                                <li class="gnb_item">
                                    <a href="/" class="gnb_link">HOME</a>
                                </li>
                                <li class="gnb_item">
                                    <a href="/shop" class="gnb_link">SHOP</a>
                                </li>
                                <li class="gnb_item">
                                    <a href="/my" class="gnb_link">MY</a>
                                </li>
                            </ul>
                        </nav>
                        <div class="search_btn_box">
                            <button class="btn_search">
                                <img src="https://user-images.githubusercontent.com/98297436/217512067-d5706d42-f578-44c5-86cd-e2fe7080c304.png" alt="">
                            </button>
                            <!-- <a href="" class="btn_search"> -->
                                
                            <!-- </a> -->
                        </div>
                    </div>
                </div>
            </div>
         </div>
         <ul class="ul_tab">
            <li class="li_tab">
                <a href="?" class="tab"><span class="tab_name">추천</span></a>
            </li>
            <li class="li_tab">
                <a href="?man" class="tab"><span class="tab_name">남성</span></a>
            </li>
            <li class="li_tab">
                <a href="?woman" class="tab"><span class="tab_name">여성</span></a>
            </li>
            <li class="li_tab">
                <a href="?brand" class="tab"><span class="tab_name">브랜드</span></a>
            </li>
            
            <li class="li_tab">
                <a href="" class="tab"><span class="tab_name">기획전</span></a>
            </li>
            
         </ul>
         <div class="main_inner"></div>
       </div>
          `

  document.body.append(headerEl)

  let token = localStorage.getItem('token')

  logoutBtnEl.addEventListener('click', () => {
    logout(token)
    window.alert('로그아웃 완료!')
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('displayName')
    location.replace('/login')
  })
  // const homeEl = document.querySelector('.gnb_link')
  // homeEl.addEventListener('click', () => {
  //     homeEl.classList.add('active')
  // })
}

export function appendHeadersub() {
  const headerEl = document.createElement('header')
  headerEl.className = 'header'
  headerEl.innerHTML = /*html*/ `
       <div class="header">
         <div class="header_top">
            <div class="top_inner">
                <ul class="top_list">
                    <li class="top_item">
                        <a href="" class="top_link">관심상품</a>
                    </li>
                    <li class="top_item">
                        <!-- <a href="/login" class="top_link">로그인</a> -->
                        <a href="/login" class="top_link" id="login">로그인</a>
                        <a class="top_link" id="logout">로그아웃</a>
                    </li>
                </ul>
            </div>
         </div>
         <div class="header_main">
            <div class="main_inner">
                <div class="center">                  
                    <a href="/" class="logo"><img src="https://kream.co.kr/_nuxt/img/login_title.9f9ccc8.png" alt=""></a>

                    </div>
                <div class="right">
                    <div class="gnb_area">
                        <nav class="gnb">
                            <ul class="gnb_list">
                                <li class="gnb_item">
                                    <a href="/" active>HOME</a>
                                </li>
                                <li class="gnb_item">
                                    <a href="/shop">SHOP</a>
                                </li>
                                <li class="gnb_item">
                                    <a href="/my">MY</a>
                                </li>
                            </ul>
                        </nav>
                        <div class="search_btn_box">
                            <a href="" class="btn_search">
                                <img src="https://user-images.githubusercontent.com/98297436/217512067-d5706d42-f578-44c5-86cd-e2fe7080c304.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
         </div>
       </div>
          `
  document.body.append(headerEl)

  let token = localStorage.getItem('token')

  const loginBtnEl = document.querySelector('#login')
  const logoutBtnEl = document.querySelector('#logout')
  if (token) {
    loginBtnEl.innerHTML = ''
  } else {
    logoutBtnEl.innerHTML = ''
  }

  logoutBtnEl.addEventListener('click', () => {
    logout(token)
    window.alert('로그아웃 완료!')
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('displayName')
    location.replace('/login')
  })
}

export function appendtitleBW() {
  const headertitleEl = document.createElement('div')
  headertitleEl.className = 'exhibition_title'
  headertitleEl.innerHTML = /*html*/ `
       <div class='exhibition_title_item'>
         <div class='exhibition_title_wrapper'>
            <h2 class='title'>Black vs White</h2>
            <p class='description'>블랙과 화이트, 심플함과 심플함</p>
         </div>
       </div>
    `
  document.body.append(headertitleEl)
}

export function appendtitleNike() {
  const headertitleEl = document.createElement('div')
  headertitleEl.className = 'exhibition_title'
  headertitleEl.innerHTML = /*html*/ `
       <div class='exhibition_title_item'>
         <div class='exhibition_title_wrapper'>
            <h2 class='title'>Nike AF1</h2>
            <p class='description'>나이키 에어포스의 모든것</p>
         </div>
       </div>
    `
  document.body.append(headertitleEl)
}

export function appendtitlejacket() {
  const headertitleEl = document.createElement('div')
  headertitleEl.className = 'exhibition_title'
  headertitleEl.innerHTML = /*html*/ `
       <div class='exhibition_title_item'>
         <div class='exhibition_title_wrapper'>
            <h2 class='title'>Director Classic Varsity Jacket</h2>
            <p class='description'>Jacket BEST 랭킹</p>
         </div>
       </div>
    `
  document.body.append(headertitleEl)
}
export function appendtitlehoodie() {
  const headertitleEl = document.createElement('div')
  headertitleEl.className = 'exhibition_title'
  headertitleEl.innerHTML = /*html*/ `
       <div class='exhibition_title_item'>
         <div class='exhibition_title_wrapper'>
            <h2 class='title'>The Best Hoodie</h2>
            <p class='description'>오랫동안 사랑받은 후드</p>
         </div>
       </div>
    `
  document.body.append(headertitleEl)
}
export function appendtitlepadding() {
  const headertitleEl = document.createElement('div')
  headertitleEl.className = 'exhibition_title'
  headertitleEl.innerHTML = /*html*/ `
       <div class='exhibition_title_item'>
         <div class='exhibition_title_wrapper'>
            <h2 class='title'>간절기 필수 패딩 베스트</h2>
            <p class='description'>Polo & Stone Island</p>
         </div>
       </div>
    `
  document.body.append(headertitleEl)
}
