<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
<a :href="item.link">
<img :src="item.image" @load="swiperLoad(index)">
</a>
    </swiper-item>
  </swiper>
</template>
<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'
export default {
  data() {
   return {
     isLoad: false
   }
  },
  components: {
    Swiper, 
    SwiperItem,
  
  },
  props: {
    banners: {
      typeof: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    swiperLoad(index) {
      if(!this.isLoad){
      this.$emit('swiperLoadOver')
      this.isLoad = true
      }
    }
  }
}
</script>
<style scoped>

</style>