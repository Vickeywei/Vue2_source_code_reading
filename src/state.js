import { observer } from "./observer/index";
import { proxy } from "./proxy";
export function initState(vm) {
  //数据劫持
  const options = vm.$options;
  if (options.props) {
    initProps(vm)
  }
  if (options.data) {
    initData(vm);
  }

}

function initProps() {
  
}

function initData(vm) {
  let data = vm.$options.data;
  data = typeof data === 'function' ? data.call(this) : data
  vm._data = data
  //开始利用object.defineProperty进行数据劫持
  observer(data)
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      proxy(vm,'_data', key)
    }
  }

  


}