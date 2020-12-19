<template>
  <img src="@/assets/img/cart/tick.svg" :class="{active: isCheck}">
</template>
<script>
export default {
  props: {
    isCheck: {
      typeof: Boolean,
      default: false
    }
  },
}
</script>
<style scoped>
img{
  border-radius: 50px;
  border: solid 1px;
}
.active{
  background-color: var(--color-high-text);

}
</style>