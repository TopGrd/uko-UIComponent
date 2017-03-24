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
  }
}

export default util
