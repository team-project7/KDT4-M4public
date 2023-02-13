import appendFooter from './footer'
import Navigo from 'navigo'
import appendLogin from './login'
import appendJoin from './join'
import { appendbanner, smallappendbanner } from './bannerswiper'
import { appendShortcut } from './shortcut'
import shop from './shop'
import exhibitions from './exhibitions'
import { appendHeadermain, appendHeadersub } from './header'
import {
  bannerimg,
  bannerimg2,
  bannerimg3,
  bannerimg4,
  bannerimg5,
  bannerimg6,
  footerbanner,
} from './banner'
import appendBrandFocus from './brandFocus'
import { logout, searchAll } from './request'
import { appendProducts } from './products'

const router = new Navigo('/')

router
  .on('/', function () {
    appendHeadermain()
    appendbanner()
    appendShortcut()
    bannerimg()
    bannerimg2()
    bannerimg3()
    bannerimg4()
    bannerimg5()
    bannerimg6()
    appendProducts(' 남성', 12)
    appendBrandFocus()
    footerbanner()
    appendFooter()
  })
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
    appendHeadersub()
    smallappendbanner()
    appendProducts(' 남성', 12)
    footerbanner()
    appendFooter()
  })
  .on('/exhibitions/816', function () {
    document.body.innerHTML = ''
    appendHeadersub()
    exhibitions()
    footerbanner()
    appendFooter()
  })
  .on('/products', function () {
    document.body.innerHTML = ''
    appendHeadersub()
    appendProducts(' 남성', 12)
    footerbanner()
    appendFooter()
  })
  .resolve()

let Top = document.createElement('div')
Top.className = 'top'
window.addEventListener('scroll', function () {
  if (this.scrollY > 200) {
    Top.classList.add('on')
  } else {
    Top.classList.remove('on')
  }
})
document.body.append(Top)
Top.addEventListener('click', function (e) {
  e.preventDefault()
  window.scrollTo({ top: 0, behavio: 'smooth' })
})
