<template>
<swiper class="swiperImage">
  <swiper-item v-for="(item, index) in topImages" :key="index">
<img :src="item">
  </swiper-item>
</swiper>
</template>
<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'
export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      typeof: Array,
      default: []
    }
  }
}
</script>
<style scoped>
.swiperImage{
width:100%;
height:350px;}
</style>