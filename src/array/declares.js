function map(arr, callback) {
  // 声明一个空数组
  let result = []

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i))
  }

  return result
}

function reduce(arr, callback, initialValue) {
  let result = initialValue
  for (let i = 0; i < arr.length; i++) {
    result = callback(result, arr[i], i)
  }
  return result
}

function filter(arr, callback) {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    let res = callback(arr[i], i)
    res && result.push(res)
  }

  return result
}
