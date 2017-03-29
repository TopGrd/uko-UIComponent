/**
 * @Date:   2017-03-24T14:01:58+08:00
 * @Email:  topgrd@outlook.com
 * @Filename: util.js
 * @Last modified time: 2017-03-28T15:12:30+08:00
 */

const util = {
  exist(target) {
    if (target !== null && typeof target !== 'undefined') {
      return true
    }
    return false
  },
  uniqueId() {
    return new Date().getTime().toString(16)
  },
  getFromArray(array, id) {
    array.filter(item => {
      return item.id === id
    })
  },
  bindEvent(context, handler) {
    context.addEventListener('click', handler, false)
  },
  $(selector) {
    return document.querySelector(selector)
  },
  $$(selector) {
    return document.querySelectorAll(selector)
  },
  addClass(target, classNames) {
    let classes = target.className.split(' ')
    let have = classes.findIndex((item, index) => {
      return item === classNames
    })
    if (have && have > -1) {
      return
    } else {
      target.className += ' ' + classNames
    }
  },
  removeClass(target, className) {
    let classes = target.className.split(' ')
    let removeIndex = classes.findIndex((item, index) => {
      return item === className
    })

    if (removeIndex > -1) {
      classes.splice(removeIndex, 1)
      target.className = classes.join(' ')
    } else {
      console.log(`${target} can not find ${className}`)
    }
  },
  replaceClass(target, className) {
    target.className = '';
    this.addClass(target, className)
  },
  toArray(arr) {
    return Array.prototype.slice.call(arr, 0)
  }
}

export default util
