
import exhibitbanner from '../image/discountbanner.jpg'

const srcarray = [exhibitbanner]
const bannercolor = ['']
const linkarray = [""]

export default function exhibitions() {

    const bannerHTML = document.createElement('div')
    let bannerEl = document.createElement('div');
    bannerEl.className = 'banner';
    // bannerEl.style.backgroundColor = `${bannercolor[5]}`;
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

