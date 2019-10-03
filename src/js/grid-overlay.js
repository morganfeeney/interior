/* global localStorage */

import { body, main } from './global-vars.js'
const gridOverlaySpacers = 1000

// Create some divs
function gridOverlay (cols) {
  const grid = document.createElement('div')
  grid.setAttribute('class', 'grid grid-overlay master-grid')

  main.appendChild(grid)
  for (let i = 0; i < cols; i++) {
    const gridChild = document.createElement('div')
    grid.appendChild(gridChild)
  }
}

// Create a button to toggle the grid overlay.
function overlayToggle () {
  const toggle = document.createElement('button')
  toggle.setAttribute('class', 'button-grid-toggle')
  toggle.innerHTML = 'Toggle Grid'
  body.appendChild(toggle)

  // Check if localStorage has toggled the grid overlay
  if (localStorage.getItem('Overlay') === 'Toggled') {
    body.classList.add('grid-visible')
    main.classList.add('grid-overlay-parent')
  }

  // Toggle the overlay classes, first check to see if toggle has been set in localstorage
  toggle.addEventListener('click', (e) => {
    if (localStorage.getItem('Overlay') !== 'Toggled') {
      localStorage.setItem('Overlay', 'Toggled')
    } else {
      localStorage.removeItem('Overlay', 'Toggled')
    }
    body.classList.toggle('grid-visible')
    main.classList.toggle('grid-overlay-parent')
    e.preventDefault()
  })
}

if (gridOverlaySpacers >= 1) {
  overlayToggle()
  gridOverlay(gridOverlaySpacers)
}
