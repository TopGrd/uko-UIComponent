/**
 * @Date:   2017-03-27T11:13:17+08:00
 * @Email:  topgrd@outlook.com
 * @Filename: Tab.js
 * @Last modified time: 2017-03-27T19:14:11+08:00
 */

import Component from "./Component"
import $ from '../vendor/ukoQuery'
import _ from './util'

export default class Tabs extends Component {
  constructor(options) {
    super(options)
    this.$activeIndex = options.activeIndex || 0
    this.$prevIndex = 0
    this.$view = $('#tabs')
    this.$list = $('.tab-list li')
    this.$panel = $('.tab-body div')
    this.$tabClick = this.$options.tabClick
    this.$theme = this.$options.theme || 'normal'
    this.init()
  }

  changeTheme() {
    const themes = {
      'normal': 'tab-normal',
      'card': 'tab-card'
    }
    let removeClass = '';
    let className = themes[this.$theme]
    this.$list.map(item => {
      item.find('a').addClass(className)
      return item
    })
  }

  switchTab(e) {
    e.preventDefault()
    const self = this
    let clickNode = event.target.parentElement
    const item = this.$list.map((li, index) => {
      if (li.dom === clickNode) {
        self.$prevIndex = self.$activeIndex
        self.$activeIndex = index
        return index
      }
    })

    if (this.$activeIndex === this.$prevIndex) {
      return
    }
    this.$list[this.$activeIndex].addClass('tab-active')
    this.$list[this.$prevIndex].removeClass('tab-active')
    this.$panel[this.$activeIndex].addClass('tab-active')
    this.$panel[this.$prevIndex].removeClass('tab-active')
  }

  setActiveTab() {
    this.$list[this.$activeIndex].addClass('tab-active')
    this.$panel[this.$activeIndex].addClass('tab-active')
  }

  tabClick() {
    _.bindEvent(this.$view.find('.tab-list').dom, this.$tabClick.bind(this, this))
  }

  initEvents() {
    _.bindEvent(this.$view.find('.tab-list').dom, this.switchTab.bind(this))
  }

  init() {
    this.changeTheme()
    this.setActiveTab()
    this.initEvents()
    if (this.$tabClick) {
      this.tabClick()
    }
  }

}
