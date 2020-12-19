<template>
  <div class="cart-list-item">
    <div class="check-button">
<cart-check-button :isCheck="item.checked" @click.native="isChecked"/>
    </div>
      <div class="image" >
        <img :src="item.imgURL">
        </div>
      <div class="text">
      <div class="title">{{item.title}}</div>
      <div class="desc">{{item.desc}}</div>
      <div class="priceNum">
      <span class="price">￥{{item.price}}</span>
      <span class="number">×{{item.count}}</span>
      </div>
      </div>
  </div>
</template>
<script>
import CartCheckButton from 'components/content/cartCheckButton/CartCheckButton'
export default {
  components:{
    CartCheckButton
  },
  props: {
  item: {
    typeof: Object,
    default: {}
  }
  },
  methods: {
    isChecked() {
      this.item.checked = !this.item.checked
    }
  },
}
</script>
<style scoped>
.cart-list-item{
  font-size: 13px;
}
.image img{
  width: 75px;
  height: 90px;
  border-radius: 4px;
}
.title, .desc{
overflow: hidden; 
white-space: nowrap;  
text-overflow: ellipsis;
margin-left: 15px;
margin-top: 10px;
width: 220px;
}
.priceNum{
  margin-top: 20px;
}
.price{
  margin-left: 15px;
  color: var(--color-high-text);
  font-size: 15px;
}
.number{
  margin-left: 120px;
}
.check-button{
  margin-right: 5px;
  margin-left: 5px;
}
</style>