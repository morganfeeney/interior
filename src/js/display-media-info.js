import { customMediaMinMax } from './breakpoints.js'

export function displyMediaInfo () {
  for (const media in customMediaMinMax) {
    // Destructure variables from customMediaMinMax object.
    const { breakpoint } = customMediaMinMax[media]
    const m = window.matchMedia(breakpoint)

    // Display media info on page load.
    if (m.matches) {
      console.log(`${media}: ${breakpoint}`)
    }

    // Display media info on change.
    m.addEventListener('change', (e) => {
      if (e.matches) {
        console.log(`${media}: ${breakpoint}`)
      }
    })
  }
}

displyMediaInfo()
