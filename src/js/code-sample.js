import { customMediaMin, customMediaMax } from './breakpoints.js';
import { body } from './global-vars.js';

const codeSampleModalButton = document.querySelector('.js-code-sample-open-modal');
const template = document.querySelector('.js-code-sample-template');
const root = document.querySelector(':root');

// This can't be set until the DOM parses it later on
let modalBorderWidth = '';

function executeCodeSampleModal() {
  const templateContent = document.importNode(template.content, true);
  const templateBody = templateContent.querySelector('.js-code-sample-modal-body');
  const templateWrapper = templateContent.querySelector('.js-code-sample-wrapper');

  codeSampleModalButton.addEventListener('click', function modalListener() {
    const placeHolder = document.querySelector('.js-placeholder-image');
    const codeSample = this.closest('.js-placeholder-image').querySelector('.js-code-sample');

    // Setup some body styles for the modal
    body.classList.add('modal-open');

    // Clone the code sample we want to display
    const clone = codeSample.cloneNode(true);

    // Get the distance from the top of the document and use it as an offset
    const offset = window.scrollY - parseInt(modalBorderWidth, 10) + placeHolder.getBoundingClientRect().top;

    // Append the cloned code sample to the template body
    templateBody.appendChild(clone);

    // Append the complete template to the document body
    body.appendChild(templateWrapper);

    const codeSampleInner = document.querySelector('.js-code-sample-inner');
    const theWindowMin = window.matchMedia(customMediaMin['--tablet']);
    const theWindowMax = window.matchMedia(customMediaMax['--tablet-max']);

    // Set the property by default
    if (theWindowMax.matches) {
      codeSampleInner.style.setProperty(
        '--code-sample-modal-offset', `${offset}px`,
      );
    } else {
      codeSampleInner.style.setProperty(
        '--code-sample-modal-offset', 0,
      );
    }

    // Remove the property across breakpoints if needed using the "change" event-listener
    const modalEventListener = (e) => {
      if (e.matches) {
        window.addEventListener(
          'change',
          codeSampleInner.style.setProperty(
            '--code-sample-modal-offset', 0,
          ),
        );
      } else {
        codeSampleInner.style.setProperty(
          '--code-sample-modal-offset', `${offset}px`,
        );
      }
    };

    theWindowMin.addListener(modalEventListener);
    closeModalViaOverlay();
  });
};

// Remove the modal using a click event.
export function closeModal() {
  const modalBody = document.querySelector('.js-code-sample-modal-body');
  const modalWrapper = document.querySelector('.js-code-sample-wrapper');

  body.classList.remove('modal-open');

  if (modalBody) {
    modalBody.innerHTML = '';
  }
  if (modalWrapper) {
    modalWrapper.remove();
  };
}

function closeModalViaOverlay() {
  const renderedWrapper = document.querySelector('.js-code-sample-wrapper');

  renderedWrapper.addEventListener('click', () => {
    closeModal();
  })
}

window.onload = () => {
  modalBorderWidth = window.getComputedStyle(root).getPropertyValue('--js-modal-border-width');

  if (template) {
    (function modalListener() {
      executeCodeSampleModal();
    }());
  }
};
