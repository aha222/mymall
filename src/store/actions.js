export default {
  addCart(context, payLoad) {
    // 判断如果加入购物车的是同一件商品，不需要再push一次，只需找到
    // 这个商品将其数量加1
    // let product = null
    // for(let item of state.cartList){
    //   if(item.iid === payLoad.iid){
    //     product = item
    //     break
    //   }
    // }
    return new Promise((resolve, reject) => {
      let product = context.state.cartList.find(item => item.iid  === payLoad.iid)
      if(product) {
        context.commit('addCount', product)
        resolve('添加购物车成功')
      }else {
        context.commit('addCart', payLoad)
        resolve('添加购物车成功')
  
      }
    })
  }
}