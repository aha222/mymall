<template>
<div class="goods-list-item" @click="detailClick">
  <div class="goods-image">
  <img v-lazy="showImage" @load="imageLoad">
  </div>
  <div class="goods-text">
  <div class="goods-title">{{goodsItem.title}}</div>
  <div class="goods-content">
  <span class="price">{{goodsItem.price}}</span>
  <span class="cfav">{{goodsItem.cfav}}</span>
  </div>
  </div>
</div>
</template>
<script>
export default {
  props: {
    goodsItem: {
      typeof: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
  showImage() {
    if(!this.goodsItem.img){
    return this.goodsItem.image || this.goodsItem.show.img 
    }else{
      return this.goodsItem.img
    }

  }
  },
  methods: {
    imageLoad() {
    
    // 通过判断路径来发送事件 
    //   if(this.$route.path.indexOf('/home') !== -1)
    //   {this.$bus.$emit('homeImageLoadItem')}
    //  if(this.$route.path.indexOf('/detail') !== -1)
    //   {this.$bus.$emit('detailImageLoadItem')}
     this.$bus.$emit('imageLoadItem')
     
     // this.$emit('imageLoadItem')
    },

    // 监听点击跳转到详情页
    detailClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
}
</script>
<style scoped>
.goods-list-item{
  position: relative;
}
.goods-image img{
  width:100%;
border-radius: 5px;
}

.goods-text{
width:100%;
height:35px;
font-size:13px;
margin: 5px auto;
text-align: center;
}

.goods-title{
  overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
margin-bottom: 4px;
}

.goods-content .price{
  color: var(--color-high-text);
  margin-right: 25px;}

.goods-content .cfav{
  position: relative;}

  .goods-content .cfav::before{
   position: absolute;
   content: '';
   background: url('~@/assets/img/common/collect.svg') 0 0/14px 14px ;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
  }
</style>