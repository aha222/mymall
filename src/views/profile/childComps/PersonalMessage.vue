<template>
<div class="per-infor">
<div class="portrait">
  <img src="@/assets/img/profile/avatar.svg">
</div>
<div class="information">
<div class="register-sign">
<span class="register">注册</span> /
<span class="sign">登录</span>
</div>
<div class="binding">
  <img src="@/assets/img/profile/phone.svg">
  <span class="isbinding">暂无绑定手机号</span>
</div>
</div>
<div class="back">
  <img src="@/assets/img/common/arrow-left.svg">
  </div>
</div>  
</template>
<script>
export default {
  
}
</script>
<style scoped>
.per-infor{
  height: 100px;
  background-color: var(--color-high-text);
  font-size: 16px;
  color: #fff;
  position: relative;
}
.portrait img{
  width: 80px;
  height: 80px;
  margin: 10px 20px 10px;
  vertical-align: middle;
}
.binding img{
 width: 20px;
 height:20px;
 margin-left: -5px;
 margin-top: 10px;
}
.isbinding{
  position: relative;
  top: -5px;
}
.portrait, .information, .back{
  float: left;
}
.register-sign{
  margin-top: 30px; 
}
.back img{
  width: 20px;
  height: 20px;
}
.back{
  position: absolute;
  right: 10px;
  top: 35px;
}
</style>