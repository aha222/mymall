<template>
<div class="ProFile">
  <nav-bar class="pro-nav-bar"><div class="" slot="center">我的档案</div></nav-bar>
  <personal-message/>
  <personal-intergal/>
  <personal-tools/>
  <personal-cart/>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'

import PersonalMessage from './childComps/PersonalMessage'
import PersonalIntergal from './childComps/PersonalIntergal'
import PersonalTools from './childComps/PersonalTools'
import PersonalCart from './childComps/PersonalCart'
export default {
  components: {
    NavBar,
    PersonalMessage,
    PersonalIntergal,
    PersonalTools,
    PersonalCart
  }
}
</script>
<style scoped>
.pro-nav-bar{
  background-color: var( --color-high-text );
  color: #fff;
  font-size: 18px;
}
</style>