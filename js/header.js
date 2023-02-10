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
                        <a href="" class="top_link">고객센터</a>
                    </li>
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
                                    <a href="/" active>HOME</a>
                                </li>
                                <li class="gnb_item">
                                    <a href="">STYLE</a>
                                </li>
                                <li class="gnb_item">
                                    <a href="/shop">SHOP</a>
                                </li>
                                <li class="gnb_item">
                                    <a href="">MY</a>
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
         <ul class="ul_tab">
            <li class="li_tab">
                <a href="" class="tab" style="border-bottom-color: rgb(252, 28, 73);"><span class="tab_name" style="color:red">밸런타인 응모</span></a>
            </li>
            <li class="li_tab">
                <a href="" class="tab"><span class="tab_name">추천</span></a>
            </li>
            <li class="li_tab">
                <a href="" class="tab"><span class="tab_name">남성</span></a>
            </li>
            <li class="li_tab">
                <a href="" class="tab"><span class="tab_name">여성</span></a>
            </li>
            <li class="li_tab">
                <a href="" class="tab"><span class="tab_name">브랜드</span></a>
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
 
 const loginBtnEl = document.querySelector('#login')
 const logoutBtnEl = document.querySelector('#logout')
    if(token) {
        loginBtnEl.innerHTML = ''
     } 
     else {
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


export function appendHeadersub() {
    const headerEl = document.createElement('header')
    headerEl.className = 'header'
    headerEl.innerHTML = /*html*/ `
       <div class="header">
         <div class="header_top">
            <div class="top_inner">
                <ul class="top_list">
                    <li class="top_item">
                        <a href="" class="top_link">고객센터</a>
                    </li>
                    <li class="top_item">
                        <a href="" class="top_link">관심상품</a>
                    </li>
                    <li class="top_item">
                        <a href="/login" class="top_link">로그인</a>
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
                                    <a href="/" active>HOME</a>
                                </li>
                                <li class="gnb_item">
                                    <a href="">STYLE</a>
                                </li>
                                <li class="gnb_item">
                                    <a href="/shop">SHOP</a>
                                </li>
                                <li class="gnb_item">
                                    <a href="">MY</a>
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
}
  