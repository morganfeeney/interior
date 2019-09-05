const rows = document.querySelectorAll('.type-body');
const documentComputedFontSize = window.getComputedStyle(root).getPropertyValue('font-size');
const getRowValue = window.getComputedStyle(root).getPropertyValue('--row-height');
const getGridRowGap = window.getComputedStyle(document.querySelector('.type-body').closest('.grid')).getPropertyValue('grid-row-gap');
const gridRowGapUnit = getGridRowGap.split('px')[0];
const rowHeightUnit = ((documentComputedFontSize.split('px')[0]) * (getRowValue.split('rem')[0]));

gridRow = () => {
  rows.forEach(p => {
    let compStyles = window.getComputedStyle(p);
    let h = compStyles.getPropertyValue('height').split('px')[0];

    if (h > rowHeightUnit) {
      // The condition will always be true due to grid-auto-rows being used.
      let rowSpan = (Math.ceil((h - gridRowGapUnit) / (rowHeightUnit + (gridRowGapUnit / 2))));
      p.setAttribute('style', `grid-row: span ${rowSpan}`);
      
      // console.log(`Computed height of box: ${h}, a standard row height: ${rowComputedHeight}`)      
    }
  });
}

gridRow();