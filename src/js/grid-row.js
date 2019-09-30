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

  // Call the vars in this function as it is used by `mediaquerylist`.
  getComputedRowHeight();
  
  // Remove any previously set `--body-grid-row` properties otherwise the `rowsToSpan` calculation fails miserably.
  content.style.removeProperty('--body-grid-row');

  // Work out the computed height of any elements I select.
  let computedStyles = window.getComputedStyle(content);
  let contentHeight = parseFloat(computedStyles.getPropertyValue('height').split('px')[0]);
  let rowsToSpan = '';
  
  // Calculate how many grid-rows to span.
  for (const media in customMediaMinMax) {
  
    // Destructure variables from customMediaMinMax object.
    let { 
      breakpoint,
      lineHeight,
      lines,
    } = customMediaMinMax[media];

    let myMedia = window.matchMedia(breakpoint);

    // Test using `matches`, then span rows.
    if (myMedia.matches) {
      let totalLinesOfText = Math.floor(contentHeight / lineHeight);
      let totalGutters = gridRowGapUnit * Math.floor(totalLinesOfText / lines);

      // Make sure gutters are needed to span across, if not use the default CSS row height.
      if (totalGutters >= gridRowGapUnit ) {

        // Calculate how many rows to span without including the gutters.
        let totalHeight = contentHeight - totalGutters;
        let gapsToSpan = Math.floor(totalHeight / computedRowHeight);        

        // There's always 1 more row than there are gutters.
        rowsToSpan = gapsToSpan + 1;

        // Add it to the DOM!
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

// Apply all the functions via a range of conditions.
function initCustomMedia() {
  for (const media in customMediaMinMax) {
    let { breakpoint } = customMediaMinMax[media];
    let myMedia = window.matchMedia(breakpoint);

    // Test on page-load using `matches`, then span rows.
    if (myMedia.matches) {
      spanAllSelectedElements()
    }

    // Listen for media changes and then apply function to span rows via `change`.
    myMedia.addEventListener('change', (e) => {
      if (e.matches) {
        spanAllSelectedElements()
      }
    })
  }
}

// Run all the things.
initCustomMedia();
