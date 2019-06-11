const codeSample = document.querySelector('.js-code-sample');

executeCodeSampleModal = () => {
  const template = document.querySelector('.js-code-sample-template');
  const templateContent = document.importNode(template.content, true);
  const templateBody = templateContent.querySelector('.js-code-sample-modal-body');
  const templateWrapper = templateContent.querySelector('.js-code-sample-wrapper');
  const renderedWrapper = document.querySelector('.js-code-sample-wrapper');

  codeSample.addEventListener('click', function() {

    // Set the body to overflow hidden
    body.classList.add('modal-open')

    // Clone the code sample we want to display
    const clone = this.cloneNode(true);

    // Append the cloned code sample to the template body
    templateBody.appendChild(clone);

    body.appendChild(templateWrapper);
  });
};

// Remove the modal using a click event
closeModal = () => {
  body.classList.remove('modal-open');
  document.querySelector('.js-code-sample-modal-body').innerHTML = '';
  document.querySelector('.js-code-sample-wrapper').remove();
}

window.onload = () => {
  if (document.querySelector('.js-code-sample-template')) {
    return executeCodeSampleModal();
  } else {
    return
  }
}
