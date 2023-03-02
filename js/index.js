import appendFooter from './footer'
import Navigo from 'navigo'
import appendLogin from './login'
import appendJoin from './join'
import { appendbanner, smallappendbanner } from './bannerswiper'
import { appendShortcut } from './shortcut'
import { appendPayment } from './payment'
import {
  exhibitions,
  exhibitsurgery,
  exhibitwnderkammer,
  exhibitpayco,
  exhibittoss,
  exhibitpoint,
} from './exhibitions'
import {
  appendHeadermain,
  appendHeadersub,
  appendtitleBW,
  appendtitleNike,
  appendtitlejacket,
  appendtitlehoodie,
  appendtitlepadding,
} from './header'
import {
  bannerimg,
  bannerimg2,
  bannerimg3,
  bannerimg4,
  footerbanner,
  line,
} from './banner'
import {
  appendBrandFocus,
  appendManBrandFocus,
  appendWomanBrandFocus,
  appendBrandBrandFocus,
} from './brandFocus'
import { logout, searchAll } from './request'
import { appendProducts } from './products'
import appendShopContent from './shop'
import { appendsearch } from './search'
import { adminPage, appendAdminPage } from './admin'
import appendErrorPage from './error'
import { searchIndividualItem } from './adminRequest'
import dotenv from 'dotenv'

dotenv.config()
import { appendDetailedItem } from './detailedItem'
const router = new Navigo('/')

router
  .on('/', function (data) {
    appendHeadermain()
    appendbanner()
    appendShortcut()

    line()
    appendProducts('남성', 4, 12, 0)
    line()
    switch (data.queryString) {
      case '':
        appendBrandFocus()
        break
      case 'man':
        appendManBrandFocus()
        break
      case 'woman':
        appendWomanBrandFocus()
        break
      case 'brand':
        appendBrandBrandFocus()
        break
    }
    bannerimg()
    appendProducts('스니커즈', 4, 12, 0)
    bannerimg2()
    appendProducts('여성', 4, 12, 0)
    bannerimg3()
    appendProducts('후드', 4, 12, 0)
    bannerimg4()
    appendProducts('패딩', 4, 12, 0)
    appendsearch()
    footerbanner()
    appendFooter()
  })
  .on('/admin', function () {
    if (localStorage.getItem("email") === process.env.ADMIN_USER){
    document.body.innerHTML = ''
    adminPage()
    }
    else {
      location.replace("/")
    }
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
  .on('/shop', function (datadata) {
    document.body.innerHTML = ''
    appendHeadersub()
    smallappendbanner()
    appendShopContent()
    /*  appendProducts(` ${searchParams.get('id')}`, 4, 12) */
    appendsearch()
    footerbanner()
    appendFooter()
  })
  .on('/exhibitions/:name', function ({ data }) {
    console.log(data)
    document.body.innerHTML = ''
    appendHeadersub()
    switch (data.name) {
      // main banner-swiper 페이지
      case '스마트워치':
        exhibitions()
        appendProducts(data.name, 8, 12, 0)
        break
      case '남성':
        exhibitsurgery()
        appendProducts(data.name, 8, 12, 0)
        break
      case '셔츠':
        exhibitwnderkammer()
        appendProducts(data.name, 8, 12, 0)
        break
      case '셔츠':
        break
      // shop small-swiper 페이지
      case '스니커즈':
        appendtitleNike()
        appendProducts(data.name, 8, 12, 0)
        break
      case 'payco':
        exhibitpayco()
        break
      case 'toss':
        exhibittoss()
        break
      case 'point':
        exhibitpoint()
        break
      case 'Instagram':
        location.replace('https://www.instagram.com/kream.co.kr/')
        break
      // 고정 bannerimg 페이지
      case '신발':
        appendtitleBW()
        appendProducts(data.name, 8, 12, 0)
        break
      case '의류':
        appendtitlejacket()
        appendProducts(data.name, 8, 12, 0)
        break
      case '후드':
        appendtitlehoodie()
        appendProducts(data.name, 8, 12, 0)
        break
      case '패딩':
        appendtitlepadding()
        appendProducts(data.name, 8, 12, 0)
        break
      default:
        appendProducts(data.name, 12, 12, 0)
    }
    appendsearch()
    footerbanner()
    appendFooter()
  })

  .on('/products', function () {
    document.body.innerHTML = ''
    appendHeadersub()
    appendDetailedItem()
    footerbanner()
    appendFooter()
  })
// 오류 페이지
router
  .notFound(() => {
    document.body.innerHTML = ''
    appendHeadermain()
    //에러 페이지 추가
    appendErrorPage()
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
