import messageImage from '@/assets/icons/warning_01.png'

import { i18n } from '@/locale'

export default function (num: number) {
  const shopCartMessage = document.querySelector('#shop-limit-message')
  if (shopCartMessage) {
    return
  }

  const shopCart = document.querySelector('#sidebar-box')
  if (!shopCart) {
    return
  }

  const messageText = num > 10 ? i18n.global.t('orders_limit_15') : i18n.global.t('orders_limit_10')

  let baseURL = ''
  if (window.__WUJIE_PUBLIC_PATH__) {
    baseURL = window.__WUJIE_PUBLIC_PATH__.substring(0, window.__WUJIE_PUBLIC_PATH__.length - 1)
  }

  const html5 = `
  <div class="shop-limit-message">
    <img src="${baseURL}${messageImage}" alt="" />
    <div>${messageText}</div>
</div>
`
  const div: HTMLDivElement = document.createElement('div')
  div.setAttribute('id', 'shop-limit-message')
  div.innerHTML = html5
  shopCart.insertBefore(div, shopCart.childNodes[0])

  setTimeout(() => {
    const el = document.querySelector('#shop-limit-message')
    el && el.parentNode?.removeChild(el)
  }, 1500)
}
