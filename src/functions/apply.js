function apply(Fn, obj, args) {
  if (obj === undefined || obj === null) {
    obj = globalThis
  }

  // 为 obj 添加临时方法
  obj.temp = Fn
  // 执行方法
  let result = obj.temp(...args)

  delete obj.temp

  return result
}
