<template>
  <div class="shop-cart">
<nav-bar class="cart">
  <div slot="center">购物车({{length}})</div> 
</nav-bar>
<scroll class="content" ref="scroll">
<!-- <div> {{$store.state.cartList}}</div> -->
<cart-list/>
</scroll>
<cart-bottom-bar/>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

import {mapGetters} from 'vuex'
export default {
  components: {
    NavBar,
    Scroll,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters({
      length: 'cartLength',
      list: 'cartList'
    })
  },
  activated() {
    this.$refs.scroll.refresh()
  },
}
</script>
<style scoped>
.shop-cart{
  position: relative;
  height: 100vh;
}
.cart{
  background-color: var(--color-high-text);
  color: #fff;
  font-size: 18px;
  font-weight: 520;
}
.content{
  width: 100%;
height: calc(100% - 44px - 49px - 40px);
overflow: hidden;
position: absolute;
z-index: 6;
background-color: #fff;
}
</style>