import Navigo from 'navigo'
import appendJoin from './join'
import { login } from './request'

export default function appendLogin() {
  const loginEl = document.createElement('div')
  loginEl.className = 'login'

  loginEl.innerHTML = /*html */ `
      <div class="content lg">
        <div class="login__area">
          <h2 class="login__title"></h2>
          <div class="login__input_box">
            <h3>이메일 주소</h3>
            <div class="login__input__item">
              <input
                class="login__input__id"
                type="email"
                placeholder="예)korea@korea.co.kr"
                autocomplete="off"
              />
            </div>
            <p class="id-error">이메일 주소를 정확히 입력해주세요</p>
          </div>
          <div class="login__input_box">
            <h3>비밀번호</h3>
            <div class="login__input__item">
              <input
                class="login__input__pw"
                type="password"
                autocomplete="off"
              />
            </div>
            <p class="pw-error">
              영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)
            </p>
          </div>
          <div class="login__btn">
            <a class="login__btn__link disable" href="#" >로그인</a>
          </div>
          <div class="join__btn">
            <a class="join__btn__link join" href="/join">회원 가입</a>
          </div>
           <div class="join__btn">
            <a class="join__btn__link join" href="/">메인 화면</a>
          </div>
        </div>
      </div>
  `
  document.body.append(loginEl)
  const idInput = document.querySelector('.login__input__id')
  const pwInput = document.querySelector('.login__input__pw')
  const idErrorText = document.querySelector('.id-error')
  const pwErrorText = document.querySelector('.pw-error')
  const loginBtnEl = document.querySelector('.login__btn__link')
  // 유효성 검사 ID, password
  const idValidation = new RegExp('^[a-z0-9]+@[a-z]+.[a-z]{2,3}$')
  const pwValidation = new RegExp(
    '^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$'
  )

  document.querySelector('.login__input__id').addEventListener('input', (e) => {
    !idValidation.test(e.target.value)
      ? [
          (idErrorText.style.display = 'block'),
          (idErrorText.dataset.validate = 'false'),
        ]
      : [
          (idErrorText.style.display = 'none'),
          (idErrorText.dataset.validate = 'true'),
        ]
  })

  document.querySelector('.login__input__pw').addEventListener('input', (e) => {
    !pwValidation.test(e.target.value)
      ? [
          (pwErrorText.style.display = 'block'),
          (pwErrorText.dataset.validate = 'false'),
        ]
      : [
          (pwErrorText.style.display = 'none'),
          (pwErrorText.dataset.validate = 'true'),
        ]

    if (
      idErrorText.dataset.validate === 'true' &&
      pwErrorText.dataset.validate === 'true'
    ) {
      loginBtnEl.classList.remove('disable')
    } else {
      loginBtnEl.classList.add('disable')
    }
  })
//아이디:adminTEAM7 비밀번호: adminTEAM7!
  document
    .querySelector('.login__btn__link')
    .addEventListener('click', async () => {
      if (
        idErrorText.dataset.validate === 'true' &&
        pwErrorText.dataset.validate === 'true'
      ) {
        const result = await login(idInput.value, pwInput.value)
        if (result.accessToken) {
          alert(`로그인 완료! 환영합니다`)
          localStorage.setItem('email', result.user.email)
          localStorage.setItem('displayName', result.user.displayName)
          localStorage.setItem('token', result.accessToken)
          if(idInput.value === "adminteam7@abc.com" && pwInput.value === "adminteam7!") {
            location.replace('/admin')
          }
          else{
            location.replace('/')
          }
          
        } else {
          window.alert(`${result}`)
          return
        }
      } else {
        window.alert('회원 정보를 입력하세요!')
        return
      }
    })

  // 회원가입 페이지로 넘어가기
  const router = new Navigo('/')
  router
    .on('/join', function () {
      appendJoin()
    })
    .resolve()
}
