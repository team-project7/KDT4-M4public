import { srcarray } from './banneritems';
import { appendHeadermain, appendHeadersub, appendtitleBW, appendtitleNike, appendtitlejacket, appendtitlechanel, appendtitlepadding } from './header'
export function bannerimg() {
   
    const bannerHTML = document.createElement('div')
    let bannerEl = document.createElement('div');
    bannerEl.className = 'banner';
    bannerEl.style.backgroundColor = `${srcarray[0].bannercolor}`;
    const linkEl = document.createElement('a')
    linkEl.href = `/exhibitions/${srcarray[0].name}`
    const bannerimgEl = document.createElement('img')
    bannerimgEl.src = srcarray[0].img;
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
    bannerEl.style.backgroundColor = `${srcarray[1].bannercolor}`;
    const linkEl = document.createElement('a')
    linkEl.href = `/exhibitions/${srcarray[1].name}`
    const bannerimgEl = document.createElement('img')
    bannerimgEl.src = srcarray[1].img;
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
    bannerEl.style.backgroundColor = `${srcarray[2].bannercolor}`;
    const linkEl = document.createElement('a')
    linkEl.href = `/exhibitions/${srcarray[2].name}`
    const bannerimgEl = document.createElement('img')
    bannerimgEl.src = srcarray[2].img;
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
    bannerEl.style.backgroundColor = `${srcarray[3].bannercolor}`;
    const linkEl = document.createElement('a')
    linkEl.href = `/exhibitions/${srcarray[3].name}`
    const bannerimgEl = document.createElement('img')
    bannerimgEl.src = srcarray[3].img;
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
    const banbottomimg = document.createElement('img')
    const banbottomimg2 = document.createElement('img')

    banbottomimg.src = srcarray[4].img;
    banbottomimg2.src = srcarray[5].img;
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


export function line () {
    const lineEl = document.createElement('div')
    lineEl.className = 'line'
    document.body.append(lineEl)
}