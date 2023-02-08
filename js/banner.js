const srcarray = ["https://user-images.githubusercontent.com/98297436/216817558-1bc5f74e-ef69-404a-8486-3c69df8150b3.png",
"https://user-images.githubusercontent.com/98297436/216817724-fb5d3c23-8ed2-4086-9456-27ba2621eb08.jpg",
"https://user-images.githubusercontent.com/98297436/217153588-99fe796c-1d90-4edb-a647-72a787da5382.jpg",
"https://user-images.githubusercontent.com/98297436/217153663-35ce5b46-eba4-4029-a620-7be0806b58f0.jpg",
"https://user-images.githubusercontent.com/98297436/217153726-5951e48f-0235-4402-8103-b46e7b90ad8c.jpg",
"https://user-images.githubusercontent.com/98297436/217153768-de6ff551-45ba-4426-a778-4e5b3e0db1ec.jpg",
"https://user-images.githubusercontent.com/98297436/217153802-a9dbf3a9-416d-4153-9feb-f74b56980b08.jpg",
"https://user-images.githubusercontent.com/98297436/217153854-6faf6fbc-b90a-4e8d-bcc3-e64c9cc4b336.jpg",
"https://user-images.githubusercontent.com/98297436/217157226-411f1a30-a093-4eac-b412-31f1218dcae3.png",
"https://user-images.githubusercontent.com/98297436/217164074-dd95805f-2d04-428a-a8a8-3b9756839270.png",
]
const linkarray = ["/shop"]

export function bannerimg() {
    const bannerHTML = document.createElement('div')
    let bannerEl = document.createElement('div');
    bannerEl.className = 'banner';
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
    const linkEl = document.createElement('a')
    linkEl.href = linkarray[0]
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
    const linkEl = document.createElement('a')
    linkEl.href = linkarray[0]
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
    const linkEl = document.createElement('a')
    linkEl.href = linkarray[0]
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
    const linkEl = document.createElement('a')
    linkEl.href = linkarray[0]
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
    const linkEl = document.createElement('a')
    linkEl.href = linkarray[0]
    const bannerimgEl = document.createElement('img')
    bannerimgEl.src = srcarray[5];
    bannerimgEl.alt = 'banner';

    document.body.append(bannerHTML)
    bannerHTML.append(bannerEl)
    bannerEl.append(linkEl)
    linkEl.append(bannerimgEl);

}
export function bannerimg7() {
    const bannerHTML = document.createElement('div')
    let bannerEl = document.createElement('div');
    bannerEl.className = 'banner';
    const linkEl = document.createElement('a')
    linkEl.href = linkarray[0]
    const bannerimgEl = document.createElement('img')
    bannerimgEl.src = srcarray[6];
    bannerimgEl.alt = 'banner';

    document.body.append(bannerHTML)
    bannerHTML.append(bannerEl)
    bannerEl.append(linkEl)
    linkEl.append(bannerimgEl);
}
export function bannerimg8() {
    const bannerHTML = document.createElement('div')
    let bannerEl = document.createElement('div');
    bannerEl.className = 'banner';
    const linkEl = document.createElement('a')
    linkEl.href = linkarray[0]
    const bannerimgEl = document.createElement('img')
    bannerimgEl.src = srcarray[7];
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

    banbottomimg.src = srcarray[8];
    banbottomimg2.src = srcarray[9];
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