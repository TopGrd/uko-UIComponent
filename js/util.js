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
  toArray(arr) {
    return Array.prototype.slice.call(arr, 0)
  }
}

export default util
