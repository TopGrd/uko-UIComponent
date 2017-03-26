/**
 * @Date:   2017-03-24T13:58:20+08:00
 * @Email:  topgrd@outlook.com
 * @Last modified time: 2017-03-26T20:57:21+08:00
 */

import _ from 'util'
export default class Component {
  constructor(id) {
    this.$view = null
    this.$id = id
  }

  render(target){
    // console.log(this.$view)
    target.appendChild(this.$view)
  }
}
