import { useState, useEffect } from 'react'

export function setWindowWidth (width, minWidth, maxWidth) {
  switch (true) {
    case !minWidth:
      return width <= maxWidth
    case !maxWidth:
      return width >= minWidth
    default:
      return width >= minWidth && width <= maxWidth
  }
}

export function useDevice () {
  const [width, setWidth] = useState(window.innerWidth)

  const resizeHandler = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  const device = {
    isMobile: setWindowWidth(width, 0, 768),
    isDesktop: setWindowWidth(width, 769, 0)
  }

  return { device }
}
