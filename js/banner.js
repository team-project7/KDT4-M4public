
const srcarray = ["https://user-images.githubusercontent.com/98297436/216817558-1bc5f74e-ef69-404a-8486-3c69df8150b3.png",
"https://user-images.githubusercontent.com/98297436/216817724-fb5d3c23-8ed2-4086-9456-27ba2621eb08.jpg" 
]

    const bannerHTML = document.createElement('div')
    let bannerEl = document.createElement('div');
    bannerEl.className = 'banner';
    const bannerimgEl = document.createElement('img')
    bannerimgEl.src = srcarray[0];
    bannerimgEl.alt = 'banner';


    document.body.append(bannerHTML)
    bannerHTML.append(bannerEl)
    bannerEl.append(bannerimgEl);



