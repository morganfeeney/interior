import { customMediaMin } from './breakpoints.js';

const rows = document.querySelectorAll('.type-body');
const documentComputedFontSize = window.getComputedStyle(root).getPropertyValue('font-size');
const getRowValue = window.getComputedStyle(root).getPropertyValue('--row-height');
const getGridRowGap = window.getComputedStyle(document.querySelector('.type-body').closest('.grid')).getPropertyValue('grid-row-gap');
const gridRowGapUnit = getGridRowGap.split('px')[0];
const rowHeightUnit = ((documentComputedFontSize.split('px')[0]) * (getRowValue.split('rem')[0]));

function gridRow(p) {
  let compStyles = window.getComputedStyle(p);
  let h = compStyles.getPropertyValue('height').split('px')[0];

  if (h > rowHeightUnit) {
    // The condition will always be true due to grid-auto-rows being used.
    let rowSpan = (Math.ceil(h / (rowHeightUnit + (gridRowGapUnit / 2))));
    // console.log(rowSpan);
    p.style.setProperty('--body-grid-row', `span ${rowSpan}`);
    // console.log(`Computed height of box: ${h}, a standard row height: ${rowComputedHeight}`)      
  }
}

// NEED TO MAKE THIS WORK FOR A SINGLE INSTANCE TO TEST IT OUT!!! READ UP ON MATCHMEDIA ONCE AGAIN!!!

function setUpRows(elements) {
  elements.forEach(e => {
    gridRow(e);
    // console.log(e);
    for (const media in customMediaMin) {
      const m = window.matchMedia(customMediaMin[media]);
      if (m.matches) {
        window.addEventListener(
          "change", 
          gridRow(e)
        )
      }
    }
  })
}

setUpRows(rows)

function gridRowMediaListener(event) {
  if (event.matches) {
    window.addEventListener(
      "change", 
      gridRow(event)
    )
  }
}

function mediaLoop() {
  for (const media in customMediaMin) {
    const m = window.matchMedia(customMediaMin[media]);
    m.addListener(gridRowMediaListener); 
  }
}


// window.matchMedia(customMediaMin['--iPhoneSE']).addListener(gridRowMediaListener)