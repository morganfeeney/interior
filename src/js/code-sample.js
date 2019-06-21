const codeSampleModalButton = document.querySelector('.js-code-sample-open-modal');
const template = document.querySelector('.js-code-sample-template');

executeCodeSampleModal = () => {
  const templateContent = document.importNode(template.content, true);
  const templateBody = templateContent.querySelector('.js-code-sample-modal-body');
  const templateWrapper = templateContent.querySelector('.js-code-sample-wrapper');

  codeSampleModalButton.addEventListener('click', function() {

    const codeSample = this.closest('.js-placeholder-image').querySelector('.js-code-sample');
    
    // Set the body to overflow hidden
    body.classList.add('modal-open');

    // Clone the code sample we want to display
    const clone = codeSample.cloneNode(true);

    // Get the distance from the top of the document and use it as an offset
    let offset = window.pageYOffset + this.getBoundingClientRect().top;

    // Append the cloned code sample to the template body
    templateBody.appendChild(clone);

    // Append the complete template to the document body
    body.appendChild(templateWrapper);

    // document.querySelector('.js-code-sample-inner').style.setProperty('--code-sample-modal-offset', offset + "px");
    closeModalViaOverlay();
  });
};

// Remove the modal using a click event
closeModal = () => {
  const modalBody = document.querySelector('.js-code-sample-modal-body');
  const modalWrapper = document.querySelector('.js-code-sample-wrapper');

  body.classList.remove('modal-open');

  if (modalBody ) {
    modalBody.innerHTML = '';
  }
  if (modalWrapper) {
    modalWrapper.remove();
  };
}

closeModalViaOverlay = () => {
  const renderedWrapper = document.querySelector('.js-code-sample-wrapper');
  
  renderedWrapper.addEventListener('click', () => {
    closeModal();
  })
}

window.onload = () => {
  if (template) {
    executeCodeSampleModal()
  } 
  else {
    return
  }
}
