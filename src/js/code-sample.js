const codeSample = document.querySelector('.js-code-sample');
const codeSampleTemplate = document.querySelector('.js-code-sample-template');
const template = document.importNode(codeSampleTemplate.content, true);
const templateBody = template.querySelector('.js-code-sample-modal-body');

executeCodeSampleModal = () => {
  codeSample.addEventListener('click', function() {

    // Clone the code sample we want to display
    const clone = this.cloneNode(true);

    // Append the cloned code sample to the template body
    templateBody.appendChild(clone);

    // Append all of it to the body
    body.appendChild(template);
  })
}

executeCodeSampleModal();


// Need to write some kind of check, possibly boolean, to see if the code has
// been appended or not, could posibly use a class, or see if content exists?
// then maybe destriy the modal and do it each time for every instance.
