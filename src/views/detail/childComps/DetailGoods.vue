<template>
  <div class="detail-goods" v-if="Object.keys(goods).length !== 0">
    <div class="goodsItem1">
<div class="title">{{goods.title}}</div>
<span class="newPrice">{{goods.newPrice}}</span>
<span class="oldPrice" v-if="goods.oldPrice"><s>{{goods.oldPrice}}</s></span>
<span class="discount" v-if="goods.discount">{{goods.discount}}</span>
<div class="information">
  <div v-for="(itemone, indexone) in goods.columns"
   :key="indexone">
   <div v-if=" indexone < (goods.columns.length-1)">{{itemone}}</div>
  </div>
  <div>
   <div v-for="(itemtwo, indextwo) in goods.services" :key="indextwo">
   <div v-if="indextwo === goods.services.length-1">{{itemtwo.name}}</div>
   </div>
   </div>
   </div>
    </div>
   <div class="goodsItem2">
     <div>
   <div v-for="(itemthree, indexthree) in goods.services" :key="indexthree">
   <div v-if="indexthree < goods.services.length-1">
   <img :src="itemthree.icon">
   {{itemthree.name}}
   </div>
   </div>
   </div>
   </div>
</div>
</template>
<script>
export default {
  props: {
    goods: {
      typeof: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style scoped>
.goodsItem1{
  /* margin-left: 5px; */
  width: 100%;
  border-bottom: solid 1px rgb(212, 212, 212);
}
.title{
  font-size: 16px;
  margin: 10px auto;
}
.newPrice{
  color: var(--color-high-text);
font-size: 25px;
margin-left: 8px;}
.oldPrice{
  color: rgb(153, 153, 153);
  font-size: 13px;
  margin-left: 6px;
}
.discount{
  padding: 3px 5px;
  background-color: var(--color-tint);
  border-radius: 10px;
  color: #fff;
  font-size:12px;
  margin-left: 3px;
  position: relative;
  top: -8px;
  }
  .information{
    margin-top:20px;
    margin-left: 5px;
   margin-right: 5px;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: rgb(153, 153, 153);
    padding-bottom: 20px;
    }
    .goodsItem2 img{
      width: 12px;
      height: 12px;
    }
    .goodsItem2>div{
      font-size: 14px;
      display: flex;
      flex-flow: nowrap row;
      justify-content: space-between;
      margin-top: 25px;
      padding-bottom: 25px;
      border-bottom: solid 4px rgb(241, 241, 241);
    }

</style>