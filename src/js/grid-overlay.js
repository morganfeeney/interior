var cols = 1000;
var body = document.querySelector('body');
var main = document.querySelector('main');
var gridOverLay = document.querySelector('.grid-overlay');
var grid = document.createElement('div');
grid.setAttribute('class', 'grid grid-overlay master-grid');
function gridOverlay(cols){
  main.appendChild(grid);
  for (var i = 0; i < cols; i++) {
    var gridChild = document.createElement('div');
    grid.appendChild(gridChild);
  }
}
// Create a button to togglethe grid overlay.
function overlayToggle(e){
  var toggle = document.createElement('button');
  toggle.setAttribute('class', 'button-grid-toggle');
  toggle.innerHTML = "Toggle Grid";
  body.appendChild(toggle);
  toggle.addEventListener('click', function(e) {
    body.classList.toggle('grid-visible');
    main.classList.toggle('grid-overlay-parent');
    body.classList.toggle('baseline-grid');
    e.preventDefault();
  });
}
if (cols >= 1) {
  overlayToggle();
  gridOverlay(cols);
}
