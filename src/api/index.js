import apiUrl from './apiUrl'
import apiUtil from './apiUtil'

const generateApiMap = apiUtil.generateApiMap({...apiUrl})
console.log(generateApiMap)
export default {
  // ...generateApiMap // 取出所有可遍历属性赋值在新的对象上

install (Vue) {
  Vue.prototype.$http = generateApiMap
}

}
