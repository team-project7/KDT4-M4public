export default function shop() {
    const promotionEl = document.createElement('div')
    const promoimgEl = document.createElement('img')
    promoimgEl.src = "https://user-images.githubusercontent.com/98297436/216832918-483e93c2-539e-4af8-bf4a-c62fd0852a64.jpg";
    promoimgEl.className = 'promotion';
    document.body.append(promotionEl)
    promotionEl.append(promoimgEl)
}

