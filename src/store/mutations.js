export default {
  addCount( state, product) {
    product.count += 1
  },
  addCart(state, payLoad) {
    payLoad.checked = true
    payLoad.count = 1
    state.cartList.push(payLoad)

  },
}