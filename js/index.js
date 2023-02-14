import appendFooter from './footer'
import Navigo from 'navigo'
import appendLogin from './login'
import appendJoin from './join'
import { appendbanner, smallappendbanner } from './bannerswiper'
import { appendShortcut } from './shortcut'
import {exhibitions, exhibitsurgery, exhibitwnderkammer} from './exhibitions'
import { appendHeadermain, appendHeadersub, appendtitleBW, appendtitleNike, appendtitlejacket, appendtitlechanel } from './header'
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
    appendProducts(' 남성', 6, 12)
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
    appendProducts(' 남성', 4, 12)
    footerbanner()
    appendFooter()
  })
  .on('/exhibitions/1', function () {
    document.body.innerHTML = ''
    appendHeadersub()
    exhibitions()
    appendProducts(' 신발', 12)
    footerbanner()
    appendFooter()
  })
  .on('/exhibitions/2', function () {
    document.body.innerHTML = ''
    appendHeadersub()
    smallappendbanner()
    appendProducts('Apple', 20)
    footerbanner()
    appendFooter()
  })
  .on('/exhibitions/3', function () {
    document.body.innerHTML = ''
    appendHeadersub()
    exhibitsurgery()
    appendProducts(' 후드','8')
    footerbanner()
    appendFooter()
  })
  .on('/exhibitions/4', function () {
    document.body.innerHTML = ''
    appendHeadersub()
    exhibitwnderkammer()
    appendProducts(' 셔츠', 20)
    footerbanner()
    appendFooter()
  })
  .on('/exhibitions/5', function () {
    document.body.innerHTML = ''
    appendHeadersub()
    smallappendbanner()
    appendProducts(' 셔츠', 20)
    footerbanner()
    appendFooter()
  })
  .on('/exhibitions/6', function () {
    document.body.innerHTML = ''
    appendHeadersub()
    appendtitleBW()
    appendProducts(' 셔츠', 20)
    footerbanner()
    appendFooter()
  })
  .on('/exhibitions/7', function () {
    document.body.innerHTML = ''
    appendHeadersub()
    appendtitleNike()
    appendProducts(' 셔츠', 20)
    footerbanner()
    appendFooter()
  })
  .on('/exhibitions/8', function () {
    document.body.innerHTML = ''
    appendHeadersub()
    appendtitlejacket()
    appendProducts(' 후드', 20)
    footerbanner()
    appendFooter()
  })
  .on('/exhibitions/8', function () {
    document.body.innerHTML = ''
    appendHeadersub()
    appendtitlejacket()
    appendProducts(' 후드', 20)
    footerbanner()
    appendFooter()
  })
  .on('/exhibitions/9', function () {
    document.body.innerHTML = ''
    // appendHeadersub()
    // appendtitlechanel()
    appendProducts('Chanel', 20)
    document.body.innerHTML = ''
    appendHeadersub()
    appendtitlechanel()
    appendProducts('Miu Miu', 20)
    footerbanner()
    appendFooter()
  })
  .on('/exhibitions/10', function () {
    document.body.innerHTML = ''
    appendHeadersub()
    appendtitlejacket()
    appendProducts(' 후드', 20)
    footerbanner()
    appendFooter()
  })
  .on('/exhibitions/11', function () {
    document.body.innerHTML = ''
    appendHeadersub()
    appendtitlejacket()
    appendProducts(' 후드', 20)
    footerbanner()
    appendFooter()
  })
  .on('/products', function () {
    document.body.innerHTML = ''
    appendHeadersub()
    appendProducts(' 남성', 4, 12)
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
