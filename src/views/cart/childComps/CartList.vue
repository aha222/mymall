<template>
  <div class="cart-list">
<cart-list-item class="list-item" v-for="(item, index) in list"
 :key="index" :item="item"/>
  </div>
</template>
<script>
import CartListItem from './CartListItem'

import {mapGetters} from 'vuex'
export default {
  components: {
    CartListItem
  },
    computed: {
    ...mapGetters({
      list: 'cartList'
    })
  }
}
</script>
<style scoped>
.list-item{
  display: flex;
    height: 100px;
  width: 100%;
  border-bottom: solid 1px rgb(223, 223, 223);
  align-items: center;
}
</style>