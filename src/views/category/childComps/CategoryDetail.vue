<template>
<div class="category-detail">
</div>  
</template>
<script>

export default {
  components: {
    
  },
  props: {
    goodsDetailItem: {
      typeof: Array,
      default() {
        return []
      }
    }
  },
  mounted() {
    console.log(this.goodsDetailItem)
  },
}
</script>
<style scoped>

</style>