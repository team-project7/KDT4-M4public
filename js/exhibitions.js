
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

import small_payco1 from '../image/smallpayco1.jpg'
import small_payco2 from '../image/smallpayco2.jpg'
import small_payco3 from '../image/smallpayco3.jpg'
import small_payco4 from '../image/smallpayco4.jpg'

import small_toss1 from '../image/smalltoss1.jpg'
import small_toss2 from '../image/smalltoss2.jpg'
import small_toss3 from '../image/smalltoss3.jpg'

import small_point1 from '../image/smallpoint1.jpg'
import small_point2 from '../image/smallpoint2.jpg'
import small_point3 from '../image/smallpoint3.jpg'
import small_point4 from '../image/smallpoint4.jpg'
import small_point5 from '../image/smallpoint5.jpg'
import small_point6 from '../image/smallpoint6.jpg'
import small_point7 from '../image/smallpoint7.jpg'
const discountarray = [discountbanner]
const exhibitcolor = ['#F3F1F2']
const surgerycolor = ['#CFCBBF','#343434','#F5F5F5','#FFFFF','#4F545A','#4F545A','#4F545A','#4F545A','#4F545A','#4F545A','#4F535A']
const exhibitarray = [exhibit_surgery1,exhibit_surgery2,exhibit_surgery3,exhibit_surgery4,exhibit_surgery5,
    exhibit_surgery6,exhibit_surgery7,exhibit_surgery8,exhibit_surgery9,exhibit_surgery10,exhibit_surgery11]

const wnderkammer = [exhibit_wnderkammer1,exhibit_wnderkammer2,exhibit_wnderkammer3,exhibit_wnderkammer4,exhibit_wnderkammer5,
    exhibit_wnderkammer6,exhibit_wnderkammer7,exhibit_wnderkammer8,exhibit_wnderkammer9,exhibit_wnderkammer10,exhibit_wnderkammer11]
const wnderkammercolor = ['#CCD0D3','#343434','#F5F5F5','FFFFF','#5A5750','#5A5750','#5A5750','#5A5750','#5A5750','#5A5750','#5A5750']

const payco = [small_payco1,small_payco2,small_payco3,small_payco4]
const paycocolor = ['#262626']

const toss = [small_toss1,small_toss2,small_toss3]
const tosscolor = ['#262626']

const point = [small_point1,small_point2,small_point3,small_point4,small_point5,small_point6,small_point7]
const pointcolor = ['#272727','#F9F9F9','#F9F9F9','#F9F9F9','#F9F9F9','#F9F9F9','#F9F9F9']

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

export function exhibitpayco() {
    const paycoHTML = document.createElement('div')
    for(let i = 0; i<payco.length; i++) {
        let paycoEl = document.createElement('div');
        paycoEl.className = `payco${i}`;
        paycoEl.style.backgroundColor = `${paycocolor[i]}`;
        const paycoimgEl = document.createElement('img')
        paycoimgEl.className = `payco${i}`
        paycoimgEl.src = payco[i];
        paycoimgEl.alt = 'payco';
    document.body.append(paycoHTML)
    paycoHTML.append(paycoEl)
    paycoEl.append(paycoimgEl);
    }
}
export function exhibittoss() {
    const tossHTML = document.createElement('div')
    for(let i = 0; i<toss.length; i++) {
        let tossEl = document.createElement('div');
        tossEl.className = `toss${i}`;
        tossEl.style.backgroundColor = `${tosscolor[i]}`;
        const tossimgEl = document.createElement('img')
        tossimgEl.className = `toss${i}`
        tossimgEl.src = toss[i];
        tossimgEl.alt = 'toss';
    document.body.append(tossHTML)
    tossHTML.append(tossEl)
    tossEl.append(tossimgEl);
    }
}
export function exhibitpoint() {
    const pointHTML = document.createElement('div')
    for(let i = 0; i<point.length; i++) {
        let pointEl = document.createElement('div');
        pointEl.className = `point${i}`;
        pointEl.style.backgroundColor = `${pointcolor[i]}`;
        const pointimgEl = document.createElement('img')
        pointimgEl.className = `point${i}`
        pointimgEl.src = point[i];
        pointimgEl.alt = 'point';
    document.body.append(pointHTML)
    pointHTML.append(pointEl)
    pointEl.append(pointimgEl);
    }
}