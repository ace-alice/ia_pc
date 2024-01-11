export default function listAnimateHook() {
  function beforeEnter(el: any) {
    el.style.opacity = 0
  }
  // 段落列表
  function paragraphEnter(el: any, done: any) {
    const delay = el.dataset.index * 40
    setTimeout(() => {
      el.style.transition = 'opacity 0.4s '
      el.style.opacity = 1
      el.style.animation = 'paragraph-one-in 0.4s infinite'
      el.style['animation-iteration-count'] = 1
      done()
    }, delay)
  }
  // 交错列表
  function staggeredEnter(el: any, done: any) {
    const delay = el.dataset.index * 100
    const animation
      = el.dataset.index % 2 === 0
        ? 'one-in 0.4s infinite'
        : 'two-in 0.4s infinite'
    setTimeout(() => {
      el.style.transition = 'opacity 0.4s '
      el.style.opacity = 1
      el.style.animation = animation
      el.style['animation-iteration-count'] = 1
      done()
    }, delay)
  }

  return {
    beforeEnter,
    paragraphEnter,
    staggeredEnter,
  }
}
