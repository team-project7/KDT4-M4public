import appendFooter from './footer'
import Navigo from 'navigo'
import appendLogin from './login'
import appendJoin from './join'
const router = new Navigo('/')

appendFooter()

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
  .resolve()
