## A ui library for me  
### modal
usage:  
```js
const modal = new Modal({
  // 你要创建的modal的id
  id: 'modal',
  // modal的填充内容
  content: 'Text in a modal Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
  // 取消按钮事件
  cancel: () => {
    console.log('cancel')
  },

  // 确定按钮事件
  confirm: () => {
    console.log('confirm')
  }
})
```
### Tab  
```html
  <div id="tabs" class="tab-container">
    <ul class="tab-list">
      <li class="tab-header">
        <a href="javascript:void(0)">tab1</a>
      </li>
      <li class="tab-header">
        <a href="javascript:void(0)">tab2</a>
      </li>
      <li class="tab-header">
        <a href="javascript:void(0)">tab3</a>
      </li>
    </ul>
    <div class="tab-body">
      <div class="tab-panel">food1</div>
      <div class="tab-panel">food2</div>
      <div class="tab-panel">food3</div>
    </div>
  </div>
```
```js
  const tab = new Tab({
    id: 'tabs',
    // 设置当前展示的tab
    activeIndex: 2,
    // 主题 normal, card 默认 normal
    theme: 'card',
    // 点击tab事件 activeIndex
    tabClick(activeIndex) {
      console.log(activeIndex);
    }
  })
```
