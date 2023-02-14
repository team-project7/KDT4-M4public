import banner1 from '../image/banner1.jpg';
import banner2 from '../image/banner2.jpg';
import banner3 from '../image/banner3.jpg';
import banner4 from '../image/banner4.jpg';
import banner5 from '../image/banner5.jpg';
import banner6 from '../image/banner6.jpg';
import footerbanner1 from '../image/footerbanner1.png';
import footerbanner2 from '../image/footerbanner2.png';


const srcarray = [banner1,banner2,banner3,banner4,banner5,banner6,footerbanner1,footerbanner2]
const bannercolor = ['#F2F2F2','#9A9C9E','#9094A5','#BFBBB3','#C3C8C4','#D1D3D7']
const linkarray = ["/exhibitions/6",'/exhibitions/7','/exhibitions/8','/exhibitions/9','/exhibitions/10','/exhibitions/11']

export function bannerimg() {
    const bannerHTML = document.createElement('div')
    let bannerEl = document.createElement('div');
    bannerEl.className = 'banner';
    bannerEl.style.backgroundColor = `${bannercolor[0]}`;
    const linkEl = document.createElement('a')
    linkEl.href = linkarray[0]
    const bannerimgEl = document.createElement('img')
    bannerimgEl.src = srcarray[0];
    bannerimgEl.alt = 'banner';


    document.body.append(bannerHTML)
    bannerHTML.append(bannerEl)
    bannerEl.append(linkEl)
    linkEl.append(bannerimgEl);

}
export function bannerimg2() {
    const bannerHTML = document.createElement('div')
    let bannerEl = document.createElement('div');
    bannerEl.className = 'banner';
    bannerEl.style.backgroundColor = `${bannercolor[1]}`;
    const linkEl = document.createElement('a')
    linkEl.href = linkarray[1]
    const bannerimgEl = document.createElement('img')
    bannerimgEl.src = srcarray[1];
    bannerimgEl.alt = 'banner';

    document.body.append(bannerHTML)
    bannerHTML.append(bannerEl)
    bannerEl.append(linkEl)
    linkEl.append(bannerimgEl);

}
export function bannerimg3() {
    const bannerHTML = document.createElement('div')
    let bannerEl = document.createElement('div');
    bannerEl.className = 'banner';
    bannerEl.style.backgroundColor = `${bannercolor[2]}`;
    const linkEl = document.createElement('a')
    linkEl.href = linkarray[2]
    const bannerimgEl = document.createElement('img')
    bannerimgEl.src = srcarray[2];
    bannerimgEl.alt = 'banner';

    document.body.append(bannerHTML)
    bannerHTML.append(bannerEl)
    bannerEl.append(linkEl)
    linkEl.append(bannerimgEl);

}
export function bannerimg4() {
    const bannerHTML = document.createElement('div')
    let bannerEl = document.createElement('div');
    bannerEl.className = 'banner';
    bannerEl.style.backgroundColor = `${bannercolor[3]}`;
    const linkEl = document.createElement('a')
    linkEl.href = linkarray[3]
    const bannerimgEl = document.createElement('img')
    bannerimgEl.src = srcarray[3];
    bannerimgEl.alt = 'banner';

    document.body.append(bannerHTML)
    bannerHTML.append(bannerEl)
    bannerEl.append(linkEl)
    linkEl.append(bannerimgEl);

}
export function bannerimg5() {
    const bannerHTML = document.createElement('div')
    let bannerEl = document.createElement('div');
    bannerEl.className = 'banner';
    bannerEl.style.backgroundColor = `${bannercolor[4]}`;
    const linkEl = document.createElement('a')
    linkEl.href = linkarray[4]
    const bannerimgEl = document.createElement('img')
    bannerimgEl.src = srcarray[4];
    bannerimgEl.alt = 'banner';

    document.body.append(bannerHTML)
    bannerHTML.append(bannerEl)
    bannerEl.append(linkEl)
    linkEl.append(bannerimgEl);

}
export function bannerimg6() {
    const bannerHTML = document.createElement('div')
    let bannerEl = document.createElement('div');
    bannerEl.className = 'banner';
    bannerEl.style.backgroundColor = `${bannercolor[5]}`;
    const linkEl = document.createElement('a')
    linkEl.href = linkarray[5]
    const bannerimgEl = document.createElement('img')
    bannerimgEl.src = srcarray[5];
    bannerimgEl.alt = 'banner';

    document.body.append(bannerHTML)
    bannerHTML.append(bannerEl)
    bannerEl.append(linkEl)
    linkEl.append(bannerimgEl);

}


export function footerbanner() {
    const bannerbottom = document.createElement('div')
    bannerbottom.className = 'banner_bottom'
    const bannerinfo = document.createElement('div')
    bannerinfo.className = 'banner_info'
    const infosubtitle = document.createElement('strong')
    infosubtitle.className = 'info_subtitle'
    const infotitle = document.createElement('p')
    infotitle.className = 'info_title'
    const infotxt = document.createElement('span')
    infotxt.className = 'info_txt'

    const bannerinfo2 = document.createElement('div')
    bannerinfo2.className = 'banner_info'
    const infosubtitle2 = document.createElement('strong')
    infosubtitle2.className = 'info_subtitle'
    const infotitle2 = document.createElement('p')
    infotitle2.className = 'info_title'
    const infotxt2 = document.createElement('span')
    infotxt2.className = 'info_txt'
    
    const linkEl = document.createElement('a')
    const linkEl2 = document.createElement('a')

    linkEl.className = 'banner_box'
    linkEl2.className = 'banner_box'
    linkEl.href = linkarray[0]
    linkEl2.href = linkarray[0]
    const banbottomimg = document.createElement('img')
    const banbottomimg2 = document.createElement('img')

    banbottomimg.src = srcarray[6];
    banbottomimg2.src = srcarray[7];
    banbottomimg.alt = 'banbottom';
    banbottomimg2.alt = 'banbottom';
    document.body.append(bannerbottom)
    bannerbottom.append(linkEl, linkEl2)
    linkEl.append(banbottomimg, bannerinfo)
    linkEl2.append(banbottomimg2, bannerinfo2)
    bannerinfo.append(infosubtitle, infotitle, infotxt)
    bannerinfo2.append(infosubtitle2, infotitle2, infotxt2)

    infosubtitle.innerHTML = 'SERVICE GUIDE'
    infotitle.innerHTML= 'KREAM은 처음이지? <br> 서비스 소개를 확인해보세요.'
    infotxt.innerHTML = '서비스 안내'

    infosubtitle2.innerHTML = 'DOWNLOAD THE APP'
    infotitle2.innerHTML = 'KREAM 앱을 설치하여<br>한정판 스니커즈를 FLEX 하세요!.'
    infotxt2.innerHTML = '앱 설치하기'

}


