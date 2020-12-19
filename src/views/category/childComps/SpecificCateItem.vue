<template>
  <div class="specific-cate-item">
    <a :href="cateItem.link">
      <div class="cateImage">
    <img :src="cateItem.image" @load="imageLoad">
    <div class="desc">{{cateItem.title}}</div>
    </div>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    cateItem: {
      typeof: Object,
      default: {}
    }
  },
  methods: {
    imageLoad() {
      this.$emit('imageLoad')
    }
  }
}
</script>
<style scoped>
.cateImage img{
  width: 65px;
  height: 65px;
  text-align: center;
}
.specific-cate-item{
  margin: 5px 13px;
}
.cateImage{
  text-align: center;
  margin: 5px auto;
}
.desc{
  margin-top: 12px;
}

</style>