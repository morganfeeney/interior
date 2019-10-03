import { customMediaMin, customMediaMax } from '../../../js/breakpoints.js'
import { body, root } from '../../../js/global-vars.js'
import modalCloseOverlay from '../../modal/modal-close-overlay.js'

const codeSampleModalButton = document.querySelector('.js-code-sample-open-modal')
const template = document.querySelector('.js-code-sample-template')

export default function executeCodeSampleModal () {
  const templateContent = document.importNode(template.content, true)
  const templateBody = templateContent.querySelector('.js-code-sample-modal-body')
  const templateWrapper = templateContent.querySelector('.js-code-sample-wrapper')
  const modalBorderWidth = window.getComputedStyle(root).getPropertyValue('--modal-border-width')

  codeSampleModalButton.addEventListener('click', function () {
    const placeHolder = document.querySelector('.js-placeholder-image')
    const codeSample = this.closest('.js-placeholder-image').querySelector('.js-code-sample')

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
    const theWindowMin = window.matchMedia(customMediaMin['--tablet'])
    const theWindowMax = window.matchMedia(customMediaMax['--tablet-max'])

    // Set the property by default
    if (theWindowMax.matches) {
      codeSampleInner.style.setProperty(
        '--code-sample-modal-offset', `${offset}px`
      )
    } else {
      codeSampleInner.style.setProperty(
        '--code-sample-modal-offset', 0
      )
    }

    // Remove the property across breakpoints if needed using the "change" event-listener
    function modalEventListener (e) {
      if (e.matches) {
        window.addEventListener(
          'change',
          codeSampleInner.style.setProperty(
            '--code-sample-modal-offset', 0
          )
        )
      } else {
        codeSampleInner.style.setProperty(
          '--code-sample-modal-offset', `${offset}px`
        )
      }
    }

    theWindowMin.addListener(modalEventListener)
    modalCloseOverlay()
  })
}
executeCodeSampleModal()
