<template>
<div class="per-data">
<div class="balance">
  <span class="number one">0</span><span>元</span>
  <div class="my-balance">我的余额</div>
</div>
<div class="discount">
  <span class="number two">0</span><span>个</span>
  <div class="my-discount">我的优惠</div>
</div>
<div class="integral">
  <span class="number three">0</span><span>分</span>
  <div class="my-integral">我的积分</div>
</div>
</div>  
</template>
<script>
export default {
  
}
</script>
<style scoped>
.per-data{
  height: 80px;
  background-color: #fff;
  box-shadow: 0 10px  rgb(236, 236, 236);
  display: flex;
  width: 100%;
  text-align: center;
  align-items: center;
}
.number{
  font-size: 25px;
  font-weight: 600;
  color: var(--color-tint);
}
.balance, .discount, .integral{
  flex: 1;
}
.my-balance, .my-discount, .my-integral{
  margin-top: 5px;
}
</style>