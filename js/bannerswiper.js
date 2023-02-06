import Swiper from "swiper/swiper-bundle";
import 'swiper/swiper-bundle.css'

export default function appendbanner() {
const swiperHTML = document.createElement('div')
swiperHTML.className = 'swiper';
const wrapperHTML = document.createElement('div')
wrapperHTML.className = 'swiper-wrapper';

const srcarray = ["https://user-images.githubusercontent.com/98297436/216630777-e6bf3f13-ec80-4596-b36f-c70ddee5085b.jpg",
"https://user-images.githubusercontent.com/98297436/216636101-7b2184a7-8d0f-4d76-8615-fbd8bae602c8.jpg",
"https://user-images.githubusercontent.com/98297436/216637176-e221ab1a-260e-4818-8b54-ed0c886b40c1.jpg",
"https://user-images.githubusercontent.com/98297436/216636101-7b2184a7-8d0f-4d76-8615-fbd8bae602c8.jpg",
"https://user-images.githubusercontent.com/98297436/216637186-76faf753-77a6-4e8a-839f-0cd8c54e41ef.jpg",
]
const linkarray = ["/shop","/shopping","/mall","/event","/bonus"]
for(let i = 0; i<=4; i++) {
    let sildeEl = document.createElement('div');
    sildeEl.className = 'swiper-slide';
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
    autoplay: {
        delay: 1000
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

 