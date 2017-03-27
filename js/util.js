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
      target.className = classes.join(' ');
    } else {
      console.log(`${target} can not find ${className}`);
    }
  }
}

export default util
