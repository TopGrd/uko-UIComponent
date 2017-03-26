/**
 * @Date:   2017-03-22T14:01:49+08:00
 * @Email:  topgrd@outlook.com
 * @Last modified time: 2017-03-22T14:02:13+08:00
 */
import Component from "./Component"
import Ele from "./Element"
import _ from './util'

export default class Modal extends Component {
  constructor(options) {
    super(options.$id)
    this.$options = {}
    Object.assign(this.$options, options)
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
    this.$style.display = "block"
  }

  close() {
    this.$style.display = "none"
  }

  toggle() {
    this.$style.display === "block"
      ? (this.$style.display = "none")
      : (this.$style.display = "block")
  }

  setContent() {
    let self = this;
    const textNode = document.createTextNode(self.$options.content);
    this.$view.querySelector(".modal-body").appendChild(textNode);
  }

  init() {
    this.createView()
    this.render(document.body)
    this.$closeBtn = document.querySelector(".modal-close")
    this.$cancelBtn = document.querySelector(".modal-cancel")
    this.$confirmBtn = document.querySelector(".modal-primary")

    this.$style = this.$view.style
    this.setContent()
    let self = this
    this.close()
    _.bindEvent(self.$closeBtn, () => {
      self.close()
      if (_.exist(self.$options.cancel)) {
        self.$options.cancel()
      }
    })

    _.bindEvent(self.$cancelBtn, () => {
      self.close()
      if (_.exist(self.$options.cancel)) {
        self.$options.cancel()
      }
    })

    _.bindEvent(self.$confirmBtn, () => {
      self.close()
      if (_.exist(self.$options.confirm)) {
        self.$options.confirm()
      }
    })
  }
}
