import Swiper from "swiper/swiper-bundle";
import 'swiper/swiper-bundle.css'
// main swiper-banner
import swiper1 from '../image/bannerswiper1.jpg';
import swiper2 from '../image/bannerswiper2.jpg';
import swiper3 from '../image/bannerswiper3.jpg';
import swiper4 from '../image/bannerswiper4.jpg';
import swiper5 from '../image/bannerswiper5.jpg';


// small-swiper-banner
import smallswiper2 from '../image/smallswiper2.jpg';
import smallswiper4 from '../image/smallswiper4.jpg';
import smallswiper5 from '../image/smallswiper5.jpg';
import smallswiper6 from '../image/smallswiper6.jpg';
import smallswiper7 from '../image/smallswiper7.jpg';
import smallswiper8 from '../image/smallswiper8.jpg';

export function appendbanner() {
const swiperHTML = document.createElement('div')
swiperHTML.className = 'swiper';
const wrapperHTML = document.createElement('div')
wrapperHTML.className = 'swiper-wrapper';

const srcarray = [ swiper1,swiper2,swiper3,swiper4,swiper5]
const newcolor = ['#F5F3F3','#E7E3EF','#6A665E','#93586E','#F0EAE5']
const linkarray = ["/exhibitions/1","exhibitions/2","/exhibitions/3","/exhibitions/4",'/exhibitions/5']
for(let i = 0; i<=4; i++) {
    let sildeEl = document.createElement('div');
    sildeEl.className = 'swiper-slide';
    sildeEl.style.backgroundColor = `${newcolor[i]}`;
    const bannerimgEl = document.createElement('img')
    const linkEl = document.createElement('a')
    linkEl.href = linkarray[i]
    bannerimgEl.src = srcarray[i]
    bannerimgEl.alt = 'banner';
    wrapperHTML.append(sildeEl);
    sildeEl.append(linkEl);
    linkEl.append(bannerimgEl);
}

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
  
  const smallswiper = [smallswiper2,smallswiper4,smallswiper5,smallswiper6,smallswiper7,smallswiper8]
  const newcolor = ['#E8F0F9','#6868EA','#262626','#262626','#282828','#020423']
  const linkarray = ["exhibitions/7","/shop","/exhibitions/small/1","/exhibitions/small/2",'/exhibitions/small/3','https://www.instagram.com/kream.co.kr/']
  for(let i = 0; i<smallswiper.length; i++) {
      let sildeEl = document.createElement('div');
      sildeEl.className = 'swiper-slide';
      sildeEl.style.backgroundColor = `${newcolor[i]}`;
      const bannerimgEl = document.createElement('img')
      const linkEl = document.createElement('a')
      linkEl.href = linkarray[i]
      bannerimgEl.src = smallswiper[i]
      bannerimgEl.alt = 'banner';
      wrapperHTML.append(sildeEl);
      sildeEl.append(linkEl);
      linkEl.append(bannerimgEl);
  }
  
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

 