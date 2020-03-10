import { body, root } from '../../../js/global-vars.js'
import modalCloseOverlay from '../../modal/modal-close-overlay.js'

const codeSampleModalButtons = document.querySelectorAll('.js-code-sample-open-modal')
const template = document.querySelector('.js-code-sample-template')

export default function executeCodeSampleModal () {
  const templateContent = document.importNode(template.content, true)
  const templateBody = templateContent.querySelector('.js-code-sample-modal-body')
  const templateWrapper = templateContent.querySelector('.js-code-sample-wrapper')
  const modalBorderWidth = window.getComputedStyle(root).getPropertyValue('--modal-border-width')

  codeSampleModalButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const placeHolder = this.closest('.js-placeholder-image')
      const codeSample = placeHolder.querySelector('.js-code-sample')

      // Setup some body styles for the modal
      body.classList.add('modal-open')

      // Clone the code sample to display in the modal
      const clone = codeSample.cloneNode(true)

      // Get the distance from the top of the document and use it as an offset
      const offset = window.scrollY - parseInt(modalBorderWidth, 10) + placeHolder.getBoundingClientRect().top

      // Append the cloned code sample to the template body
      templateBody.appendChild(clone)

      // Append the complete template to the document body
      body.appendChild(templateWrapper)

      const codeSampleInner = document.querySelector('.js-code-sample-inner')

      codeSampleInner.style.setProperty(
        '--code-sample-modal-offset', `${offset}px`
      )

      modalCloseOverlay()
    })
  })
}
executeCodeSampleModal()
