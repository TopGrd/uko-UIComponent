/**
 * @Date:   2017-03-24T13:58:20+08:00
 * @Email:  topgrd@outlook.com
 * @Last modified time: 2017-03-26T20:57:21+08:00
 */

import _ from 'util'
export default class Component {
  constructor(options) {
    this.$view = null
    this.$options = {}
    Object.assign(this.$options, options)
  }

  render(target){
    target.appendChild(this.$view)
  }
}
