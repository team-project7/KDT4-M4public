import Navigo from 'navigo'
import shop from './shop';
import shopping from './shopping';

const router = new Navigo('/')

router.on(
    '/shop', function () {
    document.body.innerHTML = ''
    shop();
  })
  .on(
    '/shopping', function () {
    document.body.innerHTML = ''
    shopping();
  })
  .resolve()