import Modal from './js/modal'
import './css/modal.scss'

const modal = new Modal({
  id: 'modal',
  content: 'Text in a modal Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
  /*cancel: () => {
    console.log('cancel')
  },
  confirm: () => {
    console.log('confirm')
  }*/
})

const modalBtn = document.getElementById('modalBtn')
modalBtn.addEventListener('click', ()=>{
  modal.toggle()
}, false)
