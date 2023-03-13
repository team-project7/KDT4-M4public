import appendFooter from './component/footer'
import Navigo from 'navigo'
import appendLogin from 'page/login'
import appendJoin from 'page/join'
import { appendMySnb } from 'page/my/my'
import { appendbanner, smallappendbanner } from 'component/bannerswiper'
import {
  appendShortcut,
  appendmenShortcut,
  appendwomenShortcut,
  appendbrandShortcut,
} from './component/shortcut'
import { appendPayment } from './page/payment'
import {
  exhibitions,
  exhibitsurgery,
  exhibitwnderkammer,
  exhibitpayco,
  exhibittoss,
  exhibitpoint,
} from 'page/exhibitions'
import {
  appendHeadermain,
  appendHeadersub,
  appendtitleBW,
  appendtitleNike,
  appendtitlejacket,
  appendtitlehoodie,
  appendtitlepadding,
  appendtitlemenshorcut,
  appendtitlewomenshorcut,
  appendtitletechshorcut,
  appendtitleluxshorcut,
} from 'component/header'
import {
  bannerimg,
  bannerimg2,
  bannerimg3,
  bannerimg4,
  footerbanner,
  line,
} from 'component/banner'
import {
  appendBrandFocus,
  appendManBrandFocus,
  appendWomanBrandFocus,
  appendBrandBrandFocus,
} from 'component/brandFocus'

import { appendProducts } from 'component/products'
import appendShopContent from 'page/shop'
import { appendsearch } from 'component/search'
import { adminPage } from 'admin'
import appendErrorPage from 'page/error'
import { appendMyAddress } from './page/my/myAddress'
import { appendMyBuying } from './page/my/myBuying'
import { appendMyProfile } from './page/my/myProfile'
import { appendMyWish } from './page/my/myWish'

import { searchById } from './api/request'

import { appendDetailedItem } from './page/detailedItem'
const router = new Navigo('/')

router
  .on('/', function (data) {
    document.body.innerHTML = ''
    appendHeadermain()
    switch (data.queryString) {
      case '':
        appendbanner()
        appendShortcut()
        line()
        appendProducts('남성', 4, 12, 0)
        line()
        appendBrandFocus()
        bannerimg()
        appendProducts('스니커즈', 4, 12, 0)
        bannerimg2()
        appendProducts('여성', 4, 12, 0)
        bannerimg3()
        appendProducts('후드', 4, 12, 0)
        bannerimg4()
        appendProducts('패딩', 4, 12, 0)
        break
      case 'man':
        appendmenShortcut()
        line()
        appendProducts('남성', 4, 12, 0)
        line()
        appendProducts('신발', 4, 12, 0)
        line()
        appendProducts('패딩', 4, 12, 0)
        line()
        appendManBrandFocus()
        line()
        appendProducts('셔츠', 4, 12, 0)
        line()
        appendProducts('아미', 4, 12, 0)
        line()
        appendProducts('후드', 4, 12, 0)
        line()
        appendProducts('니트웨어', 4, 12, 0)
        break
      case 'woman':
        appendwomenShortcut()
        line()
        appendProducts('여성', 4, 12, 0)
        line()
        appendProducts('아미', 4, 12, 0)
        line()
        appendProducts('Miu Miu', 4, 12, 0)
        line()
        appendWomanBrandFocus()
        line()
        appendProducts('니트웨어', 4, 12, 0)
        line()
        appendProducts('의류', 4, 12, 0)
        line()
        appendProducts('샌들/슬리퍼', 4, 12, 0)
        line()
        appendProducts('셔츠', 4, 12, 0)
        break
      case 'brand':
        appendbrandShortcut()
        line()
        appendProducts('Miu Miu', 4, 12, 0)
        line()
        appendProducts('Louis Vuitton', 4, 12, 0)
        line()
        appendProducts('Chanel', 4, 12, 0)
        line()
        appendBrandBrandFocus()
        line()
        appendProducts('Vivienne Westwood', 4, 12, 0)
        line()
        appendProducts('Rolex', 4, 12, 0)
        line()
        appendProducts('Maison Kitsune', 4, 12, 0)
        line()
        appendProducts('Lego', 4, 12, 0)
        break
    }

    appendsearch()
    footerbanner()
    appendFooter()
  })
  .on('/admin', function () {
    if (localStorage.getItem('email') === process.env.ADMIN_USER) {
      document.body.innerHTML = ''
      adminPage()
    } else {
      location.replace('/')
    }
  })
  .on('/login', function () {
    document.body.innerHTML = ''
    appendHeadersub()
    appendLogin()
    appendsearch()
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

  .on('/my', function () {
    if (!localStorage.getItem('token')) {
      alert('로그인이 필요한 서비스입니다')
      router.navigate('/login')
      return
    }
    document.body.innerHTML = ''
    appendHeadersub()
    appendMySnb()
    appendsearch()
    appendFooter()
  })
  .on('/my/address', function () {
    document.body.innerHTML = ''
    appendHeadersub()
    appendMyAddress()
    appendsearch()
    appendFooter()
  })
  .on('/my/buying', function () {
    document.body.innerHTML = ''
    appendHeadersub()
    appendMyBuying()
    appendsearch()
    appendFooter()
  })
  .on('/my/profile', function () {
    document.body.innerHTML = ''
    appendHeadersub()
    appendMyProfile()
    appendsearch()
    appendFooter()
  })
  .on('/my/wish', function () {
    document.body.innerHTML = ''
    appendHeadersub()
    appendMyWish()
    appendsearch()
    appendFooter()
  })

  .on('/exhibitions/:name', function ({ data }) {
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
      // 추천tab shorcut페이지
      case '남성 추천':
        appendtitlemenshorcut()
        appendProducts('남성', 20, 20, 0)
        break
      case '여성 추천':
        appendtitlewomenshorcut()
        appendProducts('여성', 20, 20, 0)
        break
      case '정가 아래':
        appendtitletechshorcut()
        appendProducts('테크', 20, 20, 0)
        break
      case '인기 럭셔리':
        appendtitleluxshorcut()
        appendProducts('Chanel', 20, 20, 0)
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
    appendsearch()
    footerbanner()
    appendFooter()
  })

  .on('/products/payment', async function (data) {
    const URLSearch = new URLSearchParams(location.search)
    const res = await searchById(URLSearch.get('productId'))
    document.body.innerHTML = ''
    appendPayment(res)
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
