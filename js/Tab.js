/**
 * @Date:   2017-03-27T11:13:17+08:00
 * @Email:  topgrd@outlook.com
 * @Filename: Tab.js
 * @Last modified time: 2017-03-27T19:14:11+08:00
 */

import Component from "./Component"
import _ from './util'

export default class Tabs extends Component {
  constructor(options) {
    super(options)
    this.$activeIndex = options.activeIndex || 0
    this.$prevIndex = 0
    this.$view = _.$('#tabs')
    this.$list = _.$$('.tab-list li')
    this.$panel = _.$$('.tab-body div')
    this.$tabClick = this.$options.tabClick
    this.init()
  }

  switchTab(e) {
    e.preventDefault()
    const self = this;
    let clickNode = event.target.parentElement
    let list = _.$$('.tab-list li')
    let panel = _.$$('.tab-body div')
    list = Array.from(list)
    const item = list.map((li, index) => {
      if (li === clickNode) {
        self.$prevIndex = self.$activeIndex
        self.$activeIndex = index
        return index
      }
    })
    
    if (this.$activeIndex === this.$prevIndex) {
      return
    }
    _.addClass(this.$list[self.$activeIndex], 'tab-active')
    _.removeClass(this.$list[self.$prevIndex], 'tab-active')
    _.addClass(this.$panel[self.$activeIndex], 'tab-active')
    _.removeClass(this.$panel[self.$prevIndex], 'tab-active')
  }

  setActiveTab() {
    _.addClass(this.$list[this.$activeIndex], 'tab-active')
    _.addClass(this.$panel[this.$activeIndex], 'tab-active')
  }

  tabClick() {
    _.bindEvent(this.$view.querySelector('.tab-list'), this.$tabClick.bind(this, this))
  }

  initEvents() {
    _.bindEvent(this.$view.querySelector('.tab-list'), this.switchTab.bind(this))
  }

  init() {
    this.setActiveTab()
    this.initEvents()
    if (this.$tabClick) {
      this.tabClick()
    }
  }

}
