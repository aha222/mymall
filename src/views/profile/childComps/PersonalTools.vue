<template>
  <div class="pre-tools">
<div class="my-message">
  <img src="@/assets/img/profile/message.svg">
  <span>我的消息</span>
  </div>
<div class="points-mall">
  <img src="@/assets/img/profile/pointer.svg">
  <span>积分商城</span>
  </div>
<div class="membership-card">
  <img src="@/assets/img/profile/vip.svg">
  <span>会员卡</span>
  </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.pre-tools{
    height: 150px;
  background-color: #fff;
  box-shadow: 0 10px  rgb(236, 236, 236);
  margin-top: 10px;
}
img{
  width: 20px;
  margin-right: 10px;
  margin-left: 10px;
  vertical-align: middle;
}
.my-message, .points-mall, .membership-card{
  height: 50px;
  line-height: 50px;;
}
.my-message, .points-mall{
  border-bottom: solid 1px rgb(224, 224, 224);
  
}
</style>