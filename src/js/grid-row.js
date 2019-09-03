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
      p.style.setProperty('--body-grid-row', 'span 3')
    }
  });
}

gridRow()