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

  // Check if localStorage has toggled the grid overlay
  if (localStorage.getItem('Overlay') === 'Toggled') {
    body.classList.add('grid-visible');
    main.classList.add('grid-overlay-parent');
  }

  // Toggle the overlay classes, first check to see if toggle has been set in localstorage
  toggle.addEventListener('click', function(e) {
    if (localStorage.getItem('Overlay') !== 'Toggled') {
      localStorage.setItem('Overlay', 'Toggled');
    } else {
      localStorage.removeItem('Overlay', 'Toggled');
    }
    body.classList.toggle('grid-visible');
    main.classList.toggle('grid-overlay-parent');
    e.preventDefault();
  });
}
if (cols >= 1) {
  overlayToggle();
  gridOverlay(cols);
}
