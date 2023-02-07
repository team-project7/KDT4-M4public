import appendFooter from './footer'
import Navigo from 'navigo'
import appendLogin from './login'
import appendJoin from './join'
import appendbanner from './bannerswiper'
import shop from './shop';
import shopping from './shopping';

const router = new Navigo('/')
appendbanner();
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
