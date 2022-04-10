function debounce(fn, wait) {
  let timer = null
  return function (e) {
    if (timer !== null) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.call(this, e)
      timer = null
    }, wait)
  }
}
