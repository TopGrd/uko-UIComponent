import Modal from './js/Modal'
import Tab from './js/Tab'
import './css/main.scss'

const modal = new Modal({
  id: 'modal',
  content: 'Text in a modal Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
  cancel: () => {
    console.log('cancel')
  },
  confirm: () => {
    console.log('confirm')
  }
})

console.log(modal)
const modalBtn = document.getElementById('modalBtn')
modalBtn.addEventListener('click', ()=>{
  modal.toggle()
}, false)

const tab = new Tab({
  id: 'tabs',
  activeIndex: 2,
  theme: 'card',
  tabClick(tab) {
    console.log(tab);
  }
})
