
import discountbanner from '../image/discountbanner.jpg'
import exhibit_surgery1 from '../image/exhibit_surgery1.jpg'
import exhibit_surgery2 from '../image/exhibit_surgery2.jpg'
import exhibit_surgery3 from '../image/exhibit_surgery3.jpg'
import exhibit_surgery4 from '../image/exhibit_surgery4.jpg'
import exhibit_surgery5 from '../image/exhibit_surgery5.jpg'
import exhibit_surgery6 from '../image/exhibit_surgery6.jpg'
import exhibit_surgery7 from '../image/exhibit_surgery7.jpg'
import exhibit_surgery8 from '../image/exhibit_surgery8.jpg'
import exhibit_surgery9 from '../image/exhibit_surgery9.jpg'
import exhibit_surgery10 from '../image/exhibit_surgery10.jpg'
import exhibit_surgery11 from '../image/exhibit_surgery11.gif'

import exhibit_wnderkammer1 from '../image/exhibit_wnderkammer1.jpg'
import exhibit_wnderkammer2 from '../image/exhibit_wnderkammer2.jpg'
import exhibit_wnderkammer3 from '../image/exhibit_wnderkammer3.jpg'
import exhibit_wnderkammer4 from '../image/exhibit_wnderkammer4.jpg'
import exhibit_wnderkammer5 from '../image/exhibit_wnderkammer5.jpg'
import exhibit_wnderkammer6 from '../image/exhibit_wnderkammer6.jpg'
import exhibit_wnderkammer7 from '../image/exhibit_wnderkammer7.jpg'
import exhibit_wnderkammer8 from '../image/exhibit_wnderkammer8.jpg'
import exhibit_wnderkammer9 from '../image/exhibit_wnderkammer9.jpg'
import exhibit_wnderkammer10 from '../image/exhibit_wnderkammer10.jpg'
import exhibit_wnderkammer11 from '../image/exhibit_wnderkammer11.gif'
const discountarray = [discountbanner]
const exhibitcolor = ['#F3F1F2']
const surgerycolor = ['#CFCBBF','#343434','#F5F5F5','#FFFFF','#4F545A','#4F545A','#4F545A','#4F545A','#4F545A','#4F545A','#4F535A']
const exhibitarray = [exhibit_surgery1,exhibit_surgery2,exhibit_surgery3,exhibit_surgery4,exhibit_surgery5,
    exhibit_surgery6,exhibit_surgery7,exhibit_surgery8,exhibit_surgery9,exhibit_surgery10,exhibit_surgery11]

const wnderkammer = [exhibit_wnderkammer1,exhibit_wnderkammer2,exhibit_wnderkammer3,exhibit_wnderkammer4,exhibit_wnderkammer5,
    exhibit_wnderkammer6,exhibit_wnderkammer7,exhibit_wnderkammer8,exhibit_wnderkammer9,exhibit_wnderkammer10,exhibit_wnderkammer11]
const wnderkammercolor = ['#CCD0D3','#343434','#F5F5F5','FFFFF','#5A5750','#5A5750','#5A5750','#5A5750','#5A5750','#5A5750','#5A5750']
export function exhibitions() {

    const bannerHTML = document.createElement('div')
    let bannerEl = document.createElement('div');
    bannerEl.className = 'discountbanner';
    bannerEl.style.backgroundColor = `${exhibitcolor[0]}`;
    const bannerimgEl = document.createElement('img')
    bannerimgEl.src = discountarray[0];
    bannerimgEl.alt = 'banner';

    document.body.append(bannerHTML)
    bannerHTML.append(bannerEl)
    bannerEl.append(bannerimgEl);
}

export function exhibitsurgery() {

    const surgeryHTML = document.createElement('div')
    
    
    for(let i = 0; i<exhibitarray.length; i++) {
        let surgeryEl = document.createElement('div');
        surgeryEl.className = `exhibitsurgery${i}`;
        surgeryEl.style.backgroundColor = `${surgerycolor[i]}`;
        const surgeryimgEl = document.createElement('img')
        surgeryimgEl.className = `surgery${i}`
    surgeryimgEl.src = exhibitarray[i];
    surgeryimgEl.alt = 'surgery';
    document.body.append(surgeryHTML)
    surgeryHTML.append(surgeryEl)
    surgeryEl.append(surgeryimgEl);
    }
}

export function exhibitwnderkammer() {
    const wnderkammerHTML = document.createElement('div')
    for(let i = 0; i<wnderkammer.length; i++) {
        let wnderkammerEl = document.createElement('div');
        wnderkammerEl.className = `wnderkammer${i}`;
        wnderkammerEl.style.backgroundColor = `${wnderkammercolor[i]}`;
        const wnderkammerimgEl = document.createElement('img')
        wnderkammerimgEl.className = `wnderkammer${i}`
        wnderkammerimgEl.src = wnderkammer[i];
        wnderkammerimgEl.alt = 'wnderkammer';
    document.body.append(wnderkammerHTML)
    wnderkammerHTML.append(wnderkammerEl)
    wnderkammerEl.append(wnderkammerimgEl);
    }
}