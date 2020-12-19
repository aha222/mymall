<template>
<tab-bar>
    <tab-bar-item path="/home" colorStyle="deeppink">
      <img src="@/assets/img/tabbar/home.svg" alt="" slot="item_icon">
      <img src="@/assets/img/tabbar/home_active.svg" alt="" slot="item_active_icon">
      <div slot="item_text">首页</div>
    </tab-bar-item>
      <tab-bar-item path="category" colorStyle="deeppink">
      <img src="@/assets/img/tabbar/category.svg" alt="" slot="item_icon">
      <img src="@/assets/img/tabbar/category_active.svg" alt="" slot="item_active_icon">
      <div slot="item_text">分类</div>
    </tab-bar-item>
      <tab-bar-item path="cart" colorStyle="deeppink">
      <img src="@/assets/img/tabbar/shopcart.svg" alt="" slot="item_icon">
      <img src="@/assets/img/tabbar/shopcart_active.svg" alt="" slot="item_active_icon">
      <div slot="item_text">购物车</div>
    </tab-bar-item>
      <tab-bar-item path="profile" colorStyle="deeppink">
      <img src="@/assets/img/tabbar/profile.svg" alt="" slot="item_icon">
      <img src="@/assets/img/tabbar/profile_active.svg" alt="" slot="item_active_icon">
      <div slot="item_text">我的</div>
    </tab-bar-item>
    </tab-bar>
</template>
<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
<style scoped>
</style>