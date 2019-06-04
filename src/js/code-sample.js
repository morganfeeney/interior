// const wrapper = template.querySelector('.js-code-sample-wrapper');
const codeSample = document.querySelector('.js-code-sample');
const codeSampleTemplate = document.querySelector('.js-code-sample-template');

const codeSampleString =
  `<template class="js-code-sample-template">
    <div class="js-code-sample-wrapper code-sample__modal">
      <button class="js-code-sample-close-modal">Close</button>
      <div class="js-code-sample-modal-body code-sample__modal-body">
      </div>
    </div>
  </template>`;

executeCodeSampleModal = (c) => {

  const template = document.importNode(codeSampleTemplate.content, true);
  const templateBody = template.querySelector('.js-code-sample-modal-body');
  const closeModal = template.querySelector('.js-code-sample-close-modal');
  // Clone the code sample we want to display
  const clone = c.cloneNode(true);

  // Append the cloned code sample to the template body
  templateBody.appendChild(clone);

  // Append all of it to the body
  body.appendChild(template);

  // Remove the modal using a click event
  closeModal.addEventListener('click', () => {
    wrapper.remove();
  })
};

  window.onload = document.querySelector('body').insertAdjacentHTML('beforeend', codeSampleString);

  codeSample.addEventListener('click', function() {
    executeCodeSampleModal(this);
  });
// Need to write some kind of check, possibly boolean, to see if the code has
// been appended or not, could posibly use a class, or see if content exists?
// then maybe destriy the modal and do it each time for every instance.
