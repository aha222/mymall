<template>
<goods-list :goods="recommend"/>
</template>
<script>
import GoodsList from 'components/content/goods/GoodsList'
export default {
  components: {
  GoodsList
  },
  props: {
    recommend: {
      typeof: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style scoped>

</style>