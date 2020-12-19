import Toast from './Toast'
const obj = {}
obj.install = function(vue) {
  // 创建一个关于Toast组件对象的组件构造器
  const toastContrustor = vue.extend(Toast)
  // new组件构造器创意一个新的组件对象
  const toast = new toastContrustor()
// 将新的组件对象挂载到div上
  toast.$mount(document.createElement('div'))
// 将div添加到页面中toast.$el指向div
document.body.appendChild(toast.$el)
vue.prototype.$toast = toast

}
export default obj