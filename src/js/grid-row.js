import { customMediaMinMax } from './breakpoints.js';

// Get all of the elements I want to apply CSS to.
const elements = document.querySelectorAll('.js-type-body');

// Declare variables to use in calculations which I can update later.
let documentComputedFontSize = '';
let rowHeight = '';
let gridRowGap = '';
let gridRowGapUnit = '';
let computedRowHeight = '';

// Assign values to variables in a function so they can be re-used.
function getComputedRowHeight() {
  documentComputedFontSize = window.getComputedStyle(document.documentElement).getPropertyValue('font-size');
  rowHeight = window.getComputedStyle(document.documentElement).getPropertyValue('--row-height');
  gridRowGap = window.getComputedStyle(document.querySelector('.js-type-body').closest('.grid')).getPropertyValue('grid-row-gap');
  gridRowGapUnit = parseInt(gridRowGap.split('px')[0]);
  computedRowHeight = (documentComputedFontSize.split('px')[0]) * (rowHeight.split('rem')[0]);
}

// Apply CSS to any elements we have selected.
function spanGridRows(content) {
  // call the vars in this function as it is used by `mediaquerylist`.
  getComputedRowHeight();
  
  // Remove any previously set `--body-grid-row` properties otherwise the `rowsToSpan` calculation fails miserably.
  content.style.removeProperty('--body-grid-row');

  // Work out the computed height of any elements I select.
  let computedStyles = window.getComputedStyle(content);
  let contentHeight = parseFloat(computedStyles.getPropertyValue('height').split('px')[0]);
  let rowsToSpan = '';
  
  // Calculate how many grid-rows to span.
  for (const media in customMediaMinMax) {
    // Destructure variables from customMediaMinMax object
    let { breakpoint, lineHeight, lines } = customMediaMinMax[media]; 
    let myMedia = window.matchMedia(breakpoint)

    // Test on page-load using `matches`, then span rows.
    if (myMedia.matches) {
      let test = Math.ceil(contentHeight / lineHeight);
      console.log(`contentHeight: ${contentHeight}`);
      console.log(`lineHeight: ${lineHeight}`);
      console.log(`test: ${test}`);

      rowsToSpan = Math.ceil(test / lines);
      
      console.log(`rowsToSpan: ${rowsToSpan}`);

      // Make sure this doesn't kick-off if there is only a single row of content & 1 gutter.
      if ((contentHeight / lineHeight) >= (lines + 1)) {
        content.style.setProperty('--body-grid-row', `span ${rowsToSpan}`);
      }
    }
  }
}

// Get all elements and make them span based on their own computed height.
function spanAllSelectedElements() {
  elements.forEach(element => {
    spanGridRows(element)
  });
}

// Detect changes in media then make all elements span rows.
function spanElementsOnChange(element) {
  if (element.matches) {
    window.addEventListener('change', spanAllSelectedElements())
  }
}

// Apply all the functions via a range of conditions.
function initCustomMedia(){
  for (const media in customMediaMinMax) {
    let myMedia = window.matchMedia(customMediaMinMax[media].breakpoint)

    // Test on page-load using `matches`, then span rows.
    if (myMedia.matches) {
      spanAllSelectedElements()
    }

    // Listen for media changes and then apply function to span rows via `change`.
    myMedia.addListener(spanElementsOnChange)
  }
}

// Run all the things.
initCustomMedia();
