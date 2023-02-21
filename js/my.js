export function appendMySnb() {
  const mySnbEl = document.createElement('div')
  myEl.className = 'mySnb'
  myEl.innerHTML = `
  <div class="snb_area">
   <a href="">
     <h2 class="snb_main_title">마이 페이지</h2>
   </a>
   <nav class="snb">
     <div class="snb_list">
       <p class="snb_title">쇼핑 정보</p>
       <ul class="snb_menu">
         <li>구매 내역</li>
         <li>관심 상품</li>
       </ul>
     </div>
     <div class="snb_list">
       <p class="snb_title">내 정보</p>
       <ul class="snb_menu">
         <li>프로필 정보</li>
         <li>주소록</li>
         <li>포인트</li>
       </ul>
     </div>
   </nav>
   div>
  `
}

// export function appendMyHome() {
//   const myHomeEl = document.createElement('div')
//   myEl.className = 'myHome'
// }
