import modalClose from './__button/modal__button_close.js'

export default function modalCloseOverlay () {
  const renderedWrapper = document.querySelector('.js-code-sample-wrapper')

  renderedWrapper.addEventListener('click', () => {
    modalClose()
  })
}
