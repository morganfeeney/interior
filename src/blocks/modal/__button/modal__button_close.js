import { body } from '../../../js/global-vars.js'

// Remove the modal using a click event.
export default function modalClose () {
  const modalBody = document.querySelector('.js-code-sample-modal-body')
  const modalWrapper = document.querySelector('.js-code-sample-wrapper')

  body.classList.remove('modal-open')

  if (modalBody) {
    modalBody.innerHTML = ''
  }
  if (modalWrapper) {
    modalWrapper.remove()
  }
}
