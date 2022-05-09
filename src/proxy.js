export function proxy(vm,target, key){
  Object.defineProperty(vm, key, {
    get: function () {
      return vm[target][key]
    },
    set: function (newValue) {
      if (vm[target][key] === newValue) return
      vm[target][key] = newValue
    }
  })
}