const codeSampleModalButton = document.querySelector('.js-code-sample-open-modal');
const template = document.querySelector('.js-code-sample-template');

executeCodeSampleModal = () => {
  const templateContent = document.importNode(template.content, true);
  const templateBody = templateContent.querySelector('.js-code-sample-modal-body');
  const templateWrapper = templateContent.querySelector('.js-code-sample-wrapper');

  codeSampleModalButton.addEventListener('click', function() {

    const codeSample = this.closest('.js-placeholder-image').querySelector('.js-code-sample');
    
    // Setup some body styles for the modal
    body.classList.add('modal-open');

    // Clone the code sample we want to display
    const clone = codeSample.cloneNode(true);

    // Get the distance from the top of the document and use it as an offset
    let offset = window.pageYOffset + codeSample.getBoundingClientRect().top;

    // Append the cloned code sample to the template body
    templateBody.appendChild(clone);

    // Append the complete template to the document body
    body.appendChild(templateWrapper);

    let test = document.querySelector('.js-code-sample-inner'); 

    // test.style.setProperty('--code-sample-modal-offset', offset + "px")
    // window.matchMedia('(max-width: 767px)').addEventListener("change", console.log('test'));

    let wMax = window.matchMedia('(max-width: 767px)');
    let wMin = window.matchMedia('(min-width: 768px)');

    // Set the property by default

    if (wMax) {
      test.style.setProperty(
        '--code-sample-modal-offset', offset + "px"
        ) 
    } else if (wMin) {
      test.style.setProperty(
        '--code-sample-modal-offset', 0
        ) 
    }
      // Remove the property across breakpoints if needed
    myTest = (e) => {
      if (e.matches) {
        window.addEventListener(
          "change", 
          test.style.setProperty(
            '--code-sample-modal-offset', 0
            )
          )
      } else {
        test.style.setProperty(
          '--code-sample-modal-offset', offset + "px"
          ) 
      }  
    }

    wMin.addListener(myTest);

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

updateCssProperty = (property, value) => {
  style.setProperty(property, value)
}

window.onload = () => {
  if (template) {
    executeCodeSampleModal()
  } 
  else {
    return
  }
}
