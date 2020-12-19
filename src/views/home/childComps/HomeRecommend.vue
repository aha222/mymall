<template>
  <div class="recommend">
<div v-for="(item, index) in recommends" :key="index"
 class="recommend-item">
  <a :href="item.link">
    <img :src="item.image"> 
    <div >{{item.title}}</div>
    </a>
  </div>
  </div>
</template>
<script>
export default {
  props:{
    recommends: {
      typeof: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style scoped>
.recommend {display: flex;
justify-content: space-around;
margin-top:10px;}
.recommend-item img{
  width:75px;
height:75px;
margin-bottom:10px;}

</style>