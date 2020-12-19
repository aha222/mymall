<template>
  <div class="detail-bottom-bar">
    <div class="left">
     <div class="service">
    <div class="icon"></div>
    <div class="serviceBar">客服</div>
     </div>
     <div class="shop">
     <div class="icon"></div>
     <div class="shopBar">店铺</div>
     </div>
     <div class="collection">
       <div class="icon"></div>
       <div class="collectionBar">收藏</div>
     </div>
    </div>
    <div class="right">
      <div class="cart" @click="add">加入购物车</div>
      <div class="calc">去结算</div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    add() {
      this.$emit('addCart')
    }
  }
}
</script>
<style scoped>
.detail-bottom-bar{
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 49px;
  z-index: 6;
  background-color: #fff;
  overflow: hidden;
  text-align: center;
  font-size: 13px;
}
.left{
  width: 50%;
  display: flex;
  position: relative;
  bottom: 5px;
}
.icon{
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    background: url("~@/assets/img/detail/detail_bottom.png") 0 0/100%;
}
.service, .shop, .collection{
  flex: 1;
}
.shop .icon{
background-position: 0 -98px;
}
.service .icon{
  background-position: 0 -53px;
}
.right{
display: flex;
width: 50%;
height: 49px;
line-height: 49px;
font-size: 15px;
}
.cart{
  flex: 3;
  background-color: rgb(241, 224, 68);
}
.calc{
  flex: 2;
  background-color: rgb(253, 109, 157);
}

</style>