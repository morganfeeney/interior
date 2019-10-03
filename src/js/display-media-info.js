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

    const displayMediaOnChange = () => {
      if (m.matches) {
        window.addEventListener('change', console.log(`${media}: ${breakpoint}`))
      }
    }

    m.addListener(displayMediaOnChange)
  }
}

displyMediaInfo()
