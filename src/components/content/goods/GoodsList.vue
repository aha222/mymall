<template>
  <div class="goods">
<goods-list-item v-for="(item, index) in goods" :key="index"
:goodsItem="item" class="list-item"/>
  </div>
</template>
<script>
import GoodsListItem from './GoodsListItem'
export default {
  components: {
   GoodsListItem
  },
   props: {
    goods: {
      typeof: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style scoped>
.goods{display: flex;
flex-flow: wrap row;
margin: auto;
justify-content: space-around;
}
.list-item{
  width: 176px;
}
</style>