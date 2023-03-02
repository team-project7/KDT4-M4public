import { htmlMySideBar } from './my'

export function appendMyWish() {
  const myWishEl = document.createElement('div')
  myWishEl.className = 'mypage my_wish'
  myWishEl.innerHTML = htmlMySideBar
  myWishEl.innerHTML += /* html */ `
  
  `
  document.body.append(myWishEl)
}
