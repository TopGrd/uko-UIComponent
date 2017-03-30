/**
 * @Date:   2017-03-22T14:01:49+08:00
 * @Email:  topgrd@outlook.com
 * @Last modified time: 2017-03-22T14:02:13+08:00
 */

import Component from "./Component"
import Ele from "./Element"
import $ from '../vendor/ukoQuery'
import _ from './util'

export default class Modal extends Component {
  constructor(options) {
    super(options)
    this.init()
  }

  createView() {
    this.$view = Ele("div", { id: this.$options.id, class: "modal-mask" }, [
      Ele("div", { class: "modal-container" }, [
        Ele("div", { class: "modal-header" }, [
          Ele("h2", { class: "modal-title" }, "info"),
          Ele("i", { class: "modal-close" }, "x")
        ]),
        Ele("div", { class: "modal-body" }),
        Ele("div", { class: "modal-footer" }, [
          Ele("button", { type: "button", class: "modal-cancel" }, "取消"),
          Ele("button", { type: "button", class: "modal-primary" }, "确定")
        ])
      ])
    ]).render()
  }

  open() {
    this.$view.addClass('modal-open')
  }

  close() {
    this.$view.removeClass('modal-open')
  }

  toggle() {
    this.$view.toggleClass('modal-open')
  }

  setContent() {
    this.$view.find('.modal-body').text(this.$options.content)
  }

  init() {
    this.createView()
    this.render(document.body)
    this.$view = $('#' + this.$options.id)
    this.$closeBtn = $(".modal-close")
    this.$cancelBtn = $(".modal-cancel")
    this.$confirmBtn = $(".modal-primary")

    this.$style = this.$view.style
    this.setContent()
    let self = this
    _.bindEvent(self.$closeBtn.dom, () => {
      self.close()
      if (_.exist(self.$options.cancel)) {
        self.$options.cancel()
      }
    })

    _.bindEvent(self.$cancelBtn.dom, () => {
      self.close()
      if (_.exist(self.$options.cancel)) {
        self.$options.cancel()
      }
    })

    _.bindEvent(self.$confirmBtn.dom, () => {
      self.close()
      if (_.exist(self.$options.confirm)) {
        self.$options.confirm()
      }
    })
  }
}
