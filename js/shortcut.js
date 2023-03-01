import { shortcutItems, menshortcutItems, womenshortcutItems, brandshortcutItems } from './shortcutItems'

export function appendShortcut() {
  const shortcutEl = document.createElement('div')
  shortcutEl.classList.add('shortcut_items_wrap')

  shortcutItems.map((item) => {
    const shortcutItem = document.createElement('div')
    shortcutItem.classList.add('shortcut_item')
    shortcutItem.innerHTML = `
      <a href="${item.href}">
        <div class="shortcut_item_img_wrap">
          <img src="${item.img}" class="shortcut_item_img_bg" alt="${item.itemTitle}">
        </div>
        <h4>${item.title}</h4>
      </a>
  `

    shortcutEl.append(shortcutItem)
  })
  document.body.append(shortcutEl)
}
export function appendmenShortcut() {
  const shortcutEl = document.createElement('div')
  shortcutEl.classList.add('shortcut_items_wrap')

  menshortcutItems.map((item) => {
    const shortcutItem = document.createElement('div')
    shortcutItem.classList.add('shortcut_item')
    shortcutItem.innerHTML = `
      <a href="${item.href}">
        <div class="menshortcut_item_img_wrap">
          <img src="${item.img}" class="shortcut_item_img_bg" alt="${item.itemTitle}">
        </div>
        <h4>${item.title}</h4>
      </a>
  `

    shortcutEl.append(shortcutItem)
  })
  document.body.append(shortcutEl)
}

export function appendwomenShortcut() {
  const shortcutEl = document.createElement('div')
  shortcutEl.classList.add('shortcut_items_wrap')

  womenshortcutItems.map((item) => {
    const shortcutItem = document.createElement('div')
    shortcutItem.classList.add('shortcut_item')
    shortcutItem.innerHTML = `
      <a href="${item.href}">
        <div class="menshortcut_item_img_wrap">
          <img src="${item.img}" class="shortcut_item_img_bg" alt="${item.itemTitle}">
        </div>
        <h4>${item.title}</h4>
      </a>
  `

    shortcutEl.append(shortcutItem)
  })
  document.body.append(shortcutEl)
}
export function appendbrandShortcut() {
  const shortcutEl = document.createElement('div')
  shortcutEl.classList.add('shortcut_items_wrap')

  brandshortcutItems.map((item) => {
    const shortcutItem = document.createElement('div')
    shortcutItem.classList.add('shortcut_item')
    shortcutItem.innerHTML = `
      <a href="${item.href}">
        <div class="menshortcut_item_img_wrap">
          <img src="${item.img}" class="shortcut_item_img_bg" alt="${item.itemTitle}">
        </div>
        <h4>${item.title}</h4>
      </a>
  `

    shortcutEl.append(shortcutItem)
  })
  document.body.append(shortcutEl)
}
