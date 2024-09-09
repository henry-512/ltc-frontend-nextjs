export function concatCSS(...str: Array<string | null | undefined | boolean>) {
  return str.filter(Boolean).join(' ')
}

export function concat(...str: Array<string | null | undefined | boolean>) {
  return str.filter(Boolean).join('')
}

// https://stackoverflow.com/questions/11871077/proper-way-to-detect-webgl-support
export function webgl_support() {
  try {
    var canvas = document.createElement('canvas')
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch (e) {
    console.log(e)
    return false
  }
}
