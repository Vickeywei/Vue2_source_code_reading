function def(data, key, value) {
  observer(value)
  Object.defineProperty(data, key, {
    get: function () {
      //收集依赖
      return value
    },
    set: function (newVal) {
      if (value === newVal) return;
      //通知依赖
      observer(newVal);
      value = newVal
    },
    enumerable: true,
    configurable: true,
  })
}

class Observer {
  constructor(data) {
    this.data = data
    this.walk(this.data)
  }

  walk(data) {

    Object.keys(data).forEach(key => {
      let result = Object.hasOwnProperty(key);
      if (result) {
        def(data, key, data[key])
      }

    })

  }
}

export function observer(data) {
  if (typeof data !== 'object' || data == null) return;

  // 如果一个对象被劫持过了就不在劫持用实例来判断

  return new Observer(data)

}

