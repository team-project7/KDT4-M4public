import appendFooter from './footer'
import Navigo from 'navigo'
import appendLogin from './login'
import appendJoin from './join'
import appendbanner from './bannerswiper'
import shop from './shop'
import shopping from './shopping'
import {appendHeadermain, appendHeadersub} from './header'
import {
  bannerimg,
  bannerimg2,
  bannerimg3,
  bannerimg4,
  bannerimg5,
  bannerimg6,
  bannerimg7,
  footerbanner,
} from './banner'
import appendBrandFocus from './brandFocus'
import { logout } from './request'
/**header 구간 */
//잠시 주석 처리
// 로그아웃 버튼 기능 
// const logoutBtnEl = document.querySelector('.logout')
// const token = localStorage.getItem('token')
// logoutBtnEl.addEventListener('click', () => {
//   logout(token)
//   window.alert('로그아웃 완료!')
//   localStorage.removeItem('token')
//   localStorage.removeItem('email')
//   localStorage.removeItem('password')
//   localStorage.removeItem('displayName')
//   location.replace('/login')
// })
// 사용자 이름 표시
const displayName = document.querySelector('.dpname')
if (localStorage.getItem('displayName')) {
  displayName.textContent = `${localStorage.getItem(
    'displayName'
  )}님 환영합니다!!!`
}
const router = new Navigo('/')
appendHeadermain()
appendbanner()
bannerimg()
bannerimg2()
bannerimg3()
appendBrandFocus()
footerbanner()
appendFooter()

router
  .on('/login', function () {
    document.body.innerHTML = ''
    appendHeadersub()
    appendLogin()
    footerbanner()
    appendFooter()
  })
  .on('/join', function () {
    document.body.innerHTML = ''
    appendJoin()
    appendFooter()
  })
  .on('/shop', function () {
    document.body.innerHTML = ''
    shop()
    appendFooter()
  })
  .on('/shopping', function () {
    document.body.innerHTML = ''
    shopping()
  })
  .resolve()
