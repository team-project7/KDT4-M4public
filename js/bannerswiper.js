import Swiper from "swiper/swiper-bundle";
import 'swiper/swiper-bundle.css'
import { srcarray, smallswiper } from './bannerswiperitems';

export function appendbanner() {
const swiperHTML = document.createElement('div')
swiperHTML.className = 'swiper';
const wrapperHTML = document.createElement('div')
wrapperHTML.className = 'swiper-wrapper';


srcarray.map((banner) => {
  let sildeEl = document.createElement('div');
  sildeEl.className = 'swiper-slide';
  sildeEl.style.backgroundColor = `${banner.newcolor}`;
  const bannerimgEl = document.createElement('img')
  const linkEl = document.createElement('a')
  linkEl.href = `/exhibitions/${banner.name}`
  bannerimgEl.src = `${banner.img}`
  bannerimgEl.alt = 'banner';
  wrapperHTML.append(sildeEl);
  sildeEl.append(linkEl);
  linkEl.append(bannerimgEl);
})



const paginationEl = document.createElement('div')
paginationEl.className = 'swiper-pagination'

const buttonprevEl = document.createElement('div')
buttonprevEl.className = 'swiper-button-prev'

const buttonnextEl = document.createElement('div')
buttonnextEl.className = 'swiper-button-next'


document.body.append(swiperHTML)
swiperHTML.append(wrapperHTML,paginationEl,buttonprevEl,buttonnextEl)

const swiper = new Swiper('.swiper', {
    effect : 'fade', 
    autoplay: {
        delay: 2000
      },
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true,
      
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
      }
})

}


export function smallappendbanner() {
  const swiperHTML = document.createElement('div')
  swiperHTML.className = 'swiper';
  swiperHTML.style.height = '100px'
  swiperHTML.style.width = '1200px'
  const wrapperHTML = document.createElement('div')
  wrapperHTML.className = 'swiper-wrapper';
  

  smallswiper.map((banner) => {
    let sildeEl = document.createElement('div');
    sildeEl.className = 'swiper-slide';
    sildeEl.style.backgroundColor = `${banner.newcolor}`;
    const bannerimgEl = document.createElement('img')
    const linkEl = document.createElement('a')
    linkEl.href = `/exhibitions/${banner.name}`
    bannerimgEl.src = `${banner.img}`
    bannerimgEl.alt = 'banner';
    wrapperHTML.append(sildeEl);
    sildeEl.append(linkEl);
    linkEl.append(bannerimgEl);
  })
  

  const buttonprevEl = document.createElement('div')
  buttonprevEl.className = 'swiper-button-prev'
  
  const buttonnextEl = document.createElement('div')
  buttonnextEl.className = 'swiper-button-next'
  
  
  document.body.append(swiperHTML)
  swiperHTML.append(wrapperHTML,buttonprevEl,buttonnextEl)
  
  const swiper = new Swiper('.swiper', {
      effect : 'fade', 
      autoplay: {
          delay: 2000
        },
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
       
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next'
        }
  })
  
  }

 