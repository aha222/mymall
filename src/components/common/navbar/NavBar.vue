<template>
  <div id="nav-bar">
<div class="left"><slot name="left"></slot></div>
<div class="center"><slot name="center"></slot></div>
<div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
#nav-bar{height: 44px;
line-height: 44px;
text-align: center;
box-shadow: 0 2px 2px rgb(243, 240, 240);
}
.left, .right{width:60px;}
</style>