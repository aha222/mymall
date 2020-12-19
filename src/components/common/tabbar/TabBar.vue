<template>
  <div class="tabbar ignore">
    <slot></slot>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.tabbar{
  display:flex;
  height: 49px;
  background-color: rgb(245, 244, 244);
  position: absolute;
  box-shadow: 0 -2px 1px rgb(236, 235, 235);
   text-align: center;
   bottom:0px;
   left:0px;
   right:0px;}
</style>