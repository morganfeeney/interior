import { 
  customMediaMin, 
  customMediaMinMax 
} 
from './breakpoints.js';

const rows = document.querySelectorAll('.type-body');
let documentComputedFontSize = '';
let getRowValue = '';
let getGridRowGap = '';
let gridRowGapUnit = '';
let rowHeightUnit = '';

function setUpRowVars() {
  documentComputedFontSize = window.getComputedStyle(root).getPropertyValue('font-size');
  getRowValue = window.getComputedStyle(root).getPropertyValue('--rh');
  getGridRowGap = window.getComputedStyle(document.querySelector('.type-body').closest('.grid')).getPropertyValue('grid-row-gap');
  gridRowGapUnit = getGridRowGap.split('px')[0];
  rowHeightUnit = ((documentComputedFontSize.split('px')[0]) * (getRowValue.split('rem')[0]));
}

function gridRow(p) {
  setUpRowVars();
  
  p.style.removeProperty('--body-grid-row');
  let compStyles = window.getComputedStyle(p);
  let h = compStyles.getPropertyValue('height').split('px')[0];
  let rowSpan = (Math.ceil(h / (rowHeightUnit + (gridRowGapUnit / 2))));

  if (h > rowHeightUnit) {
    // The condition will always be true due to grid-auto-rows being used.
    p.style.setProperty('--body-grid-row', `span ${rowSpan}`);
    // console.log(`Computed height of box: ${h}, a standard row height: ${rowHeightUnit}`)
  }
}

function mediaMatched() {
  rows.forEach(row => {
    gridRow(row)
  });
}

function matchesIt(blah) {
  if (blah.matches) {
    window.addEventListener('change', mediaMatched())
  }
}

function initCustomMedia(){
  for (const media in customMediaMinMax) {
    let myMedia = window.matchMedia(customMediaMinMax[media])

    if (myMedia.matches) {
      mediaMatched()
    }
    
    myMedia.addListener(matchesIt)
  }
}

initCustomMedia()

// gridRow(document.querySelector('.type-body'));

// setUpRows(rows)

// function mediaLoop() {
//   for (const media in customMediaMin) {
//     const m = window.matchMedia(customMediaMin[media]);
//     m.addListener(gridRowMediaListener); 
//   }
// }
