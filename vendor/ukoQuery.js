export default (selector) => {
  let domList = document.querySelectorAll(selector)
  if (domList.length === 0) {
    console.error(`can't find ${selector} element`)
  } else if (domList.length === 1) {
    return new ukoElement(domList[0])
  }
  return Array.prototype.slice.call(domList, 0).map(item => new ukoElement(item))
}

class ukoElement {
  constructor(dom) {
    this.dom = dom
    this.initial()
  }

  find(selector) {
    return new ukoElement(this.dom.querySelector(selector))
  }

  css(prop, val) {
    const win = this.dom.ownerDocument.defaultView;
    const css = win.getComputedStyle(this.dom, null)[prop]
    if (arguments.length === 2) {
      this.style[prop] = val
    }
    return css
  }

  addClass(className) {
    this.classList.add(className)
  }

  removeClass(className) {
    this.classList.remove(className)
  }

  toggleClass(className) {
    this.classList.toggle(className)
  }

  removeSelf() {
    this.parentNode.removeChild(this.dom)
  }

  text(val) {
    const textNode = document.createTextNode(val)
    this.dom.appendChild(textNode)
  }

  html(val) {
    this.dom.innerHTML = val
  }

  initial() {
    for (let key in this.dom) {
      this[key] = this.dom[key]
    }
  }
}
