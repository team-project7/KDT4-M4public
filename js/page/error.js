export default function appendErrorPage() {
  const errorConterEl = document.createElement('div')
  errorConterEl.className = 'error-container'
  errorConterEl.innerHTML = /*html */ `
  <div class="error-title">
        <h1 class=>여긴... 어디죠...?</h1>
      </div>
      <div class="error-content">
      <h2>찾을수 없는 페이지 입니다</h2>
      <p>
        주소가 올바르지 않거나 알수 없는 오류로 인해 페이지를 찾을수 없습니다.
      </p>
      <p>5초 뒤에 메인 페이지로 이동합니다.</p>
      </div>
         <div class="chart">
       
       </div>
       `
  document.body.append(errorConterEl)
  //5초뒤에 메인페이지로 이동

  setTimeout(() => {
    location.replace('/')
  }, 5000)
}
