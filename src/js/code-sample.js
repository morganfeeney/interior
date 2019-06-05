const codeSample = document.querySelector('.js-code-sample');
let maybeabletouseavariablehere;
const codeSampleString =
  `<template class="js-code-sample-template">
    <div class="js-code-sample-wrapper code-sample__modal">
      <button class="js-code-sample-close-modal" onClick="closeModal()">Close</button>
      <div class="js-code-sample-modal-body code-sample__modal-body">
      ${maybeabletouseavariablehere}
      </div>
    </div>
  </template>`;

executeCodeSampleModal = () => {
  const template = document.querySelector('.js-code-sample-template');
  const templateContent = document.importNode(template.content, true);
  const templateBody = templateContent.querySelector('.js-code-sample-modal-body');
  const templateWrapper = templateContent.querySelector('.js-code-sample-wrapper');

  codeSample.addEventListener('click', function() {

    // Clone the code sample we want to display
    const clone = this.cloneNode(true);

    // Append the cloned code sample to the template body
    templateBody.appendChild(clone);
let maybeabletouseavariablehere = clone;
    body.appendChild(templateWrapper);
  });
};

// Remove the modal using a click event
closeModal = () => {
  document.querySelector('.js-code-sample-wrapper').remove();
}

insertTemplate = () => {
  return body.insertAdjacentHTML('beforeend', codeSampleString)
}


window.onload = () => {
  insertTemplate();
  if (document.querySelector('.js-code-sample-template')) {
    return executeCodeSampleModal();
  } else {
    return
  }
}
// Need to write some kind of check, possibly boolean, to see if the code has
// been appended or not, could posibly use a class, or see if content exists?
// then maybe destriy the modal and do it each time for every instance.
