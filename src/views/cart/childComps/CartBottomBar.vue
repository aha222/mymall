<template>
  <div class="cart-bottom-bar ignore">
  <div class="checkButton">
  <cart-check-button :isCheck="isAllChecked" 
  @click.native="checkClick"/>
  </div>
  <div class="allChecked">全选</div>
  <div class="total">合计:{{total}}</div>
  <div class="calculate" @click="calcClick">去结算({{calculate}})</div>
  </div>
</template>
<script>
import CartCheckButton from 'components/content/cartCheckButton/CartCheckButton'

import {mapGetters} from 'vuex'
export default {
components: {
  CartCheckButton
},
methods: {
checkClick() {
if(this.isAllChecked) {
  this.cartList.forEach(item => item.checked = false)
}else {
  this.cartList.forEach(item => item.checked = true)
}
},
calcClick() {
  if(!this.calculate){
    this.$toast.isShow('请选择要购买的商品', 2000)
  }
}
},
computed: {
  // 通过遍历的方法获得总价格
  ...mapGetters(['cartList']),
  // total() {
  //   let total = 0
  //   for(let item of this.cartList){
  //     if(item.checked){
  //   total += item.price*item.count
  //   }
  //   }
  //   return total.toFixed(2)
  // },
  // 可以使用过滤器来计算总价格
  total() {
    return  '￥' + this.cartList.filter(item => {
      return item.checked
    }).reduce((preValue, item) => {
    return preValue + item.price*item.count
    },0).toFixed(2)
  },
  // 去计算的商品的数量获取
  calculate() {
    return this.cartList.filter(item => {
      return item.checked
    }).reduce((preValue, item) => {
    return preValue + item.count
    }, 0)
  },
  isAllChecked() {
    // 1.filter过滤器,但此方法性能较低，因为即使找到了未被选中的
    // 也会将数组遍历完
    if(!this.cartList.length){
      return false
    }
    // return !(this.cartList.filter(item => !item.checked).length)
    // 2.find方法，数组的高阶函数，找到符合条件的不在遍历
    // return !this.cartList.find(item => !item.checked)
    // 3.正常通过for循环遍历
    for(let item of this.cartList){
      if(!item.checked){
        return false
      }
    }
    return true
  }
}
 
}
</script>
<style scoped>
.cart-bottom-bar{
  height: 40px;
  width: 100%;
  background-color: rgb(236, 234, 234);
  position: fixed;
  bottom: 49px;
  z-index: 13;
  box-shadow: 0 -2px 2px rgb(230, 230, 230);
  display: flex;
}
.checkButton{
margin:10px 5px 10px 10px;
}
.allChecked, .total{
  margin-top: 10px;
  margin-right: 15px;
}
.calculate{
  width: 120px;
  background-color: orangered;
  text-align: center;
  line-height: 40px;
  position: absolute;
  right: 0px;
  color: #fff;

}
</style>