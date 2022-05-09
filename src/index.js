// 将所有的方法都耦合在一起
// class Vue{

// }
import { initMixin } from "./init"

function Vue(options) { //options就是用户的选项
  this._init(options)
}

initMixin(Vue)


export default Vue