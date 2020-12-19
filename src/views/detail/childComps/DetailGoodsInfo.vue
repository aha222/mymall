<template>
  <div class="detail-info" v-if="Object.keys(detailInfo).length !== 0">
<div class="detailDesc">
  {{detailInfo.desc}}
</div>
<div class="detailKey">{{detailInfo.detailImage[0].key}}</div>
<div class="detailImage">
 <img  v-for="(item, index) in detailInfo.detailImage[0].list"
 :key="index"  :src="item" @load="imageLoad">
</div>
  </div>
</template>
<script>
export default {
  data() {
  return {
    imageLength: 0,
    count: 0
  }
  },
  props: {
    detailInfo: {
      typeof: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoad() {
        if(++this.count === this.imageLength){ 
        this.$emit('imageLoad')
        }
        }
  },
  watch: {
    detailInfo() {
      this.imageLength = this.detailInfo.detailImage[0].list.length
    }
  }


}
</script>
<style scoped>
.detailImage img{
width:100%;}
.detailDesc{
  position: relative;
  margin-top: 40px;
  margin-bottom: 35px;
  margin-left: 10px;
}
.detailDesc::before, .detailDesc::after{
content: '';
width:100px;
height: 1px;
background-color: rgb(221, 221, 221);
position: absolute;
 }
 .detailDesc::before{
   top: -18px;
 }
 .detailDesc::after{
   bottom: -15px;
   right: 10px;
 }
 .detailKey{
   margin-left: 10px;
 }
</style>