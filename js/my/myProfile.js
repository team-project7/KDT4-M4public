import { htmlMySideBar } from './my.js'
import blank_profile from '../../image/blank_profile.png'
import { doc } from 'prettier'
import { getUserInfo, modifyUserName, modifyUserPassword } from '../request.js'

const $ = (selector) => document.querySelector(selector)
export async function appendMyProfile() {
  const myProfileEl = document.createElement('div')
  myProfileEl.className = 'mypage my_profile'
  myProfileEl.innerHTML = htmlMySideBar
  myProfileEl.innerHTML += /* html */ `
  <div class="content_area">
    <div class="my_profile">
      <div class="content_title border">
        <div class="title">
          <h3>프로필 정보</h3>
        </div>
      </div>
      
      <div class="user_profile">
        <div class="profile_thumb">
          <img
          src= "${blank_profile}"
          alt="사용자 이미지"
          class="thumb_img"
          />
        </div>
        <div class="profile_detail">
          <strong class="name"></strong>
          <div class="profile_btn_box">
          <a href="javascript:void(0)" class="btn outlinegrey small change"> 이미지 변경 </a
          ><a href="javascript:void(0)" class="btn outlinegrey small btndelete"> 삭제 </a>
        </div>
      </div>
    </div>
    
    <input type="file" accept="image/jpeg,image/png" hidden="hidden" />
    <canvas width="1000" height="1000" style="display: none"></canvas>
    <div class="profile_info">
      <div class="profile_group">
        <h4 class="group_title">로그인 정보</h4>
        <div class="unit">
          <h5 class="title">이메일 주소</h5>
          <p class="desc email">w*******8@naver.com</p>
        </div>
        <div class="unit">
          <h5 class="title">비밀번호</h5>
          <input type="password" id="oldPassword" class="desc password" placeholder="●●●●●●●●" disabled = true/> 
          <button type="button" class="btn btn_modify outlinegrey small btn_password">
            변경
          </button>
        </div>
        <div class="unit modify_password">
          <h5 class="title">변경할 비밀번호를 입력해주세요.</h5>
          <input class="input_password" type="password" />
          <p class="hint">영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)</p>
          <button type="button" class="btn btn_password_change outlinegrey small">
            확인
          </button>
          <button type="button" id="btn_password_cancel" class="btn btn_cancel outlinegrey small">
            취소
          </button>
        </div>
        <div class="unit">
          <h5 class="title">닉네임</h5>
          <p class="desc nick_name">닉</p>
          <button type="button" class="btn btn_modify outlinegrey small btn_name">
            변경
          </button>
        </div>
        <div class="unit modify_name">
          <h5 class="title">변경할 닉네임을 입력해주세요.</h5>
          <input class="input_name" type="text" />
          <p class="hint">닉네임은 3~10자로 입력해주세요. 특수문자는 허용되지 않습니다.</p>
          <button type="button" class="btn btn_name_change outlinegrey small">
            확인
          </button>
          <button type="button" id="btn_name_cancel" class="btn btn_cancel outlinegrey small">
            취소
          </button>
        </div>
      </div>
    </div>
  </div>
  `

  document.body.append(myProfileEl)

  const userInfo = await getUserInfo()

  const myUserName = $('.name')
  const myUserID = $('.email')
  const nick_name = $('.nick_name')

  myUserName.innerText = userInfo.displayName
  myUserID.innerText = userInfo.email
  nick_name.innerText = userInfo.displayName
  const modify_password = $('.modify_password')
  const modify_name = $('.modify_name')

  $('.btn_password').addEventListener('click', () => {
    modify_password.style.display = 'block'
    $('.password').disabled = false
    $('.input_password').value = ''
    $('#oldPassword').disabled = false
    $('#oldPassword').placeholder = '비밀번호를 입력하세요.'

    $('.input_password').focus()
  })

  $('.btn_name').addEventListener('click', () => {
    modify_name.style.display = 'block'
    $('.input_name').value = ''
    $('.input_name').focus()
  })

  $('#btn_password_cancel').addEventListener('click', () => {
    modify_password.style.display = 'none'
    $('#oldPassword').disabled = true
    $('#oldPassword').value = ''
    $('#oldPassword').placeholder = '●●●●●●●●'
  })
  $('#btn_name_cancel').addEventListener('click', () => {
    modify_name.style.display = 'none'
  })

  $('.btn_password_change').addEventListener('click', async (e) => {
    const pwValidation = new RegExp(
      '^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$'
    )

    const changePassword = await modifyUserPassword()
    console.log(changePassword)
    if (changePassword.email) {
      alert('비밀번호가 변경되었습니다.')
      modify_password.style.display = 'none'
      $('#oldPassword').value = ''
      appendMyProfile()
    } else {
      alert(changePassword)
    }
  })

  $('.btn_name_change').addEventListener('click', async () => {
    const displayNameValidation = new RegExp(
      '^[A-Za-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{3,10}$'
    )
    console.log($('.input_name').value)
    if (displayNameValidation.test($('.input_name').value)) {
      const changeName = await modifyUserName()
      alert('닉네임이 변경되었습니다.')
      modify_name.style.display = 'none'
      appendMyProfile()
    } else {
      alert('유효한 닉네임이 아닙니다.')
    }
  })
}

function test() {
  if (confirm('정말 지우시겠습니까?')) console.log(1)
  else console.log(2)
}
