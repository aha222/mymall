<template>
  <div class="pre-cart">
  <div class="my-cart">
    <img src="@/assets/img/profile/cart.svg">
    <span>我的购物车</span>
  </div>
  <div class="load-cart">
    <img src="@/assets/img/profile/shopping.svg">
    <span>下载购物App</span>
  </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.pre-cart{
  background-color: #fff;
  margin-top: 10px;
}
img{
  width: 20px;
  margin-right: 10px;
  margin-left: 10px;
  vertical-align: middle;
}
.my-cart, .load-cart{
  height: 50px;
  line-height: 50px;;
}
.my-cart{
  border-bottom: solid 1px rgb(224, 224, 224);
  
}
</style>