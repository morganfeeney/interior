let rows = document.querySelectorAll('.type-body')
let documentComputedFontSize = window.getComputedStyle(root).getPropertyValue('font-size');
let getRowValue = window.getComputedStyle(root).getPropertyValue('--row-height');
let rowComputedHeight = ((documentComputedFontSize.split('px')[0]) * (getRowValue.split('rem')[0]));

gridRow = () => {
  rows.forEach(p => {
    let compStyles = window.getComputedStyle(p);
    let h = compStyles.getPropertyValue('height').split('px')[0];
    let lh = compStyles.getPropertyValue('line-height').split('px')[0];
    let fs = compStyles.getPropertyValue('font-size').split('px')[0];

    if (h > rowComputedHeight) {
      // The condition will always be true due to grid-auto-rows being used

      let rowSpan = (Math.floor((h - 32) / (rowComputedHeight + 16)) + 1);
      // p.style.setProperty('--body-grid-row', `span ${rowSpan}`);

      p.setAttribute('style', `grid-row: span ${rowSpan}`);
      
      // console.log(`Computed height of box: ${h}, a standard row height: ${rowComputedHeight}`)      
    }
  });
}

gridRow()