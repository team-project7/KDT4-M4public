import Navigo from 'navigo'

// 유효성 검사 ID, password

// 회원가입 페이지로 넘어가기
const router = new Navigo('/')
router
  .on('/join', function () {
    document.querySelector('.login').innerHTML = `
       <div class="content lg">
        <div class="login__area">
          <h2 class="login__title"></h2>
          <div class="login__input_box">
            <h3>이메일 주소</h3>
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
            <h3>비밀번호</h3>
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
          <div class="login__btn">
            <a class="login__btn__link " href="/">취소</a>
          </div>
        </div>
      </div>
        `
    document.querySelector('.login__btn').addEventListener('click', () => {
      window.alert('fuckyou')
    })
  })
  .resolve()
