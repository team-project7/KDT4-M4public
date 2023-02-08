import appendFooter from './footer'
import Navigo from 'navigo'
import appendLogin from './login'
import appendJoin from './join'
import appendbanner from './bannerswiper'
import shop from './shop';
import shopping from './shopping';
import { bannerimg, bannerimg2, bannerimg3, bannerimg4, bannerimg5, bannerimg6, bannerimg7, footerbanner } from './banner'
import appendBrandFocus from './brandFocus'

const router = new Navigo('/')
appendbanner();
bannerimg();
bannerimg2();
bannerimg3();
// appendBrandFocus();
footerbanner();
appendFooter();

router
  .on('/login', function () {
    document.body.innerHTML = ''
    appendLogin()
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
