<template>
  <div class="detail-shop-info">
<div class="name">
  <span>
    <img :src="shop.logo">
  </span>
  <span class="shopname">{{shop.name}}</span>
</div>
<div class="description">
  <div class="description1">
    <div class="sell">
  <div class="shopsell">{{((shop.sells)/10000).toFixed(1)}}万</div>
  <div>总销量</div>  
  </div>
  <div class="count">
  <div class="shopcount">{{shop.goodsCount}}</div>
  <div>全部宝贝</div>
  </div>
  </div>
 <div class="description2">
  <div v-for="(item, index) in shop.score" :key="index">
<span class="itemname">{{item.name}}</span>
<span class="itemscore" :class="{ishigh: item.isBetter}">{{item.score}}</span>
<span v-if="item.isBetter" class="high">高</span>
<span v-else class="low">低</span>
  </div>
  </div>
  </div>
  <div class="into">
    进店逛逛
  </div>
  </div>
</template>
<script>
export default {
  props: {
    shop: {
      typeof: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style scoped>
.detail-shop-info{
  border-bottom: solid 4px rgb(241, 241, 241);
  padding-bottom: 15px;
}
.name img{
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-right:10px;}
  .name{
    margin-top: 20px;
    margin-left: 10px;
  }
  .shopname{
    position: relative;
    top: -15px;
    }
    .description{
      display: flex;
      margin-left: 20px;
      margin-top: 20px;
      font-size: 13px;
    }
    .description1, .description2{
      flex: 1;
    }
    .description1{
      display: flex;
      text-align: center;
      margin-right: 35px;
      border-right: solid 1px rgb(199, 199, 199);
      padding-right: 10px;
      padding-top: 15px;
    }
    .sell, .count{
      flex: 1;
    }

    .description2 div{
      margin-bottom: 10px;
    }
    .itemname{
      margin-right: 10px;
    }
    .itemscore{
      color: rgb(109, 235, 109);
    }
    .ishigh{
      color: deeppink;
    }
    .high, .low{
      position: absolute;
      right: 15px;
      color: #fff;
    }
    .high{
      background-color: deeppink;
      padding: 2px;
    }

    .low{
      background-color: rgb(109, 235, 109);
      padding: 2px;
    }
    .shopsell, .shopcount{
      font-size: 18px;
      margin-bottom: 10px; 
    }
    .into{
      background-color: rgb(236, 236, 236);
      padding:4px 10px;
      border-radius: 10px;
      margin-top: 10px;
      width: 140px;
      text-align: center;
      margin:15px auto;
    }
</style>