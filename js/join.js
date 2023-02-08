import { createUser } from './request'

export default function appendJoin() {
  const loginEl = document.createElement('div')
  loginEl.className = 'login'
  loginEl.innerHTML = /*html*/ `
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
           <div class="login__input_box">
            <h3>비밀번호 확인</h3>
            <div class="login__input__item">
              <input
                class="login__input__pw-check"
                type="password"
                autocomplete="off"
              />
            </div>
            <p class="pw-check-error">
              입력하신 비밀번호가 일치하지 않습니다.
            </p>
          </div>
          <div class="login__input_box">
            <h3>닉네임</h3>
            <div class="login__input__item">
              <input
                class="login__input__displayname"
                type="text"
                autocomplete="off"
              />
            </div>
            <p class="displayname-error">
              닉네임은 3~10자로 입력해주세요. 특수문자는 허용되지 않습니다.
            </p>
          </div>
          <div class="join__btn">
            <a class="join__btn__link disable" href="#" >회원가입</a>
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
  const displayNameInput = document.querySelector('.login__input__displayname')
  const idErrorText = document.querySelector('.id-error')
  const pwErrorText = document.querySelector('.pw-error')
  const pwCheckErrorText = document.querySelector('.pw-check-error')
  const displayNameErrorText = document.querySelector('.displayname-error')
  const joinBtnEl = document.querySelector('.join__btn__link')
  // 유효성 검사 ID, password
  const idValidation = new RegExp('^[a-z0-9]+@[a-z]+.[a-z]{2,3}$')
  const pwValidation = new RegExp(
    '^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$'
  )
  const displayNameValidation = new RegExp(
    '^[A-Za-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{3,10}$'
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
  })

  document
    .querySelector('.login__input__pw-check')
    .addEventListener('input', (e) => {
      pwInput.value === e.target.value
        ? [
            (pwCheckErrorText.style.display = 'none'),
            (pwCheckErrorText.dataset.validate = 'true'),
          ]
        : [
            (pwCheckErrorText.style.display = 'block'),
            (pwCheckErrorText.dataset.validate = 'false'),
          ]
    })

  document
    .querySelector('.login__input__displayname')
    .addEventListener('input', (e) => {
      !displayNameValidation.test(e.target.value)
        ? [
            (displayNameErrorText.style.display = 'block'),
            (displayNameErrorText.dataset.validate = 'false'),
          ]
        : [
            (displayNameErrorText.style.display = 'none'),
            (displayNameErrorText.dataset.validate = 'true'),
          ]

      if (
        idErrorText.dataset.validate === 'true' &&
        pwErrorText.dataset.validate === 'true' &&
        pwCheckErrorText.dataset.validate === 'true' &&
        displayNameErrorText.dataset.validate === 'true'
      ) {
        joinBtnEl.classList.remove('disable')
      } else {
        joinBtnEl.classList.add('disable')
      }
    })

  document
    .querySelector('.join__btn__link')
    .addEventListener('click', async () => {
      if (
        idErrorText.dataset.validate === 'true' &&
        pwErrorText.dataset.validate === 'true' &&
        pwCheckErrorText.dataset.validate === 'true' &&
        displayNameErrorText.dataset.validate === 'true'
      ) {
        const userData = await createUser(
          idInput.value,
          pwInput.value,
          displayNameInput.value
        )
        if (userData.acessToken) {
          window.alert('가입이 완료되었습니다!!')
          localStorage.setItem('token', userData.accessToken)
          localStorage.setItem('email', userData.user.email)
          localStorage.setItem('displayName', userData.user.displayName)
          location.replace('/')
        } else {
          window.alert(`${userData}`)
          return
        }
      } else {
        window.alert('회원 정보를 입력하세요!')
        return
      }
    })
}
