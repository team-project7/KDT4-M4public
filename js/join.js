export default function appendJoin() {
  const loginEl = document.createElement('div')
  loginEl.className = 'login'
  loginEl.innerHTML = `
       <div class="content lg">
        <div class="login__area">
          <h2 class="login__title"></h2>
          <div class="login__input_box">
            <h3>이메일 주소*</h3>
            <div class="login__input__item">
              <input
                class="login__input__text"
                type="email"
                placeholder="예)korea@korea.co.kr"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="login__input_box">
            <h3>비밀번호*</h3>
            <div class="login__input__item">
              <input
                class="login__input__text"
                type="email"
                placeholder="예)korea@krea.co.kr"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="login__input_box">
            <h3>비밀번호 확인*</h3>
            <div class="login__input__item">
              <input
                class="login__input__text"
                type="email"
                placeholder="예)korea@krea.co.kr"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="login__btn">
            <a class="login__btn__link disable" href="#">가입하기</a>
          </div>
          <div class="cancel__btn">
            <a class="cancel__btn__link " href="/login">취소</a>
          </div>
        </div>
      </div>
        `

  document.body.append(loginEl)

  document.querySelector('.login__btn').addEventListener('click', () => {
    window.alert('로그인 검사!')
  })
}
