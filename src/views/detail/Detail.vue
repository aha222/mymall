<template>
  <div class="detail"> 
<detail-nav-bar @titleClick="titleClick" 
:currentIndex="currentIndex"/>
<b-scroll class="content" ref="scroll"
 @scroll="scroll"
 :probeType="3">
  <detail-swiper :topImages="topImages"/>
  <detail-goods :goods="goods"/>
  <detail-shop-info :shop="shop"/>
  <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"/>
  <detail-params-info :paramsInfo="paramsInfo" ref="paramsInfo"/>
  <detail-comment :comment="comment" ref="comment"/>
  <detail-recommend :recommend="recommend" ref="recommend"/>
</b-scroll>
<back-top @click.native="backClick" v-show="isBackShow"/>
<detail-bottom-bar @addCart="addCart"/>
<!-- <toast :message="message" :isShow="isShow"/> -->
  </div>
</template>
<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailGoods from './childComps/DetailGoods'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamsInfo from './childComps/DetailParamsInfo'
import DetailComment from './childComps/DetailComment'
import DetailRecommend from './childComps/DetailRecommend'
import DetailBottomBar from './childComps/DetailBottomBar'

import BScroll from 'components/common/scroll/Scroll'
// import Toast from 'components/common/toast/Toast'

import BackTop from 'components/content/backTop/BackTop'

import {debounce} from 'common/utils'
import{imageLoadListener} from 'common/mixin'

import {getDetail, Goods, Shop,ParamsInfo, recommend} from 'network/detail'

import {mapActions} from 'vuex'
export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    BScroll,
    DetailGoods,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailComment,
    DetailRecommend,
    DetailBottomBar,
    BackTop,
    // Toast,
  
  },
  data() {
    return {
      iid: null,
      topImages: null,
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      comment: {},
      recommend: [],
      imageLoadRefresh: null,
      assemblyTop:[0],
      currentIndex: 0,
      isBackShow: false,
      // message: '',
      // isShow: false
 
    }
  },
  created() {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then((res) => {
      console.log(res)
      const data = res.data.result
      // console.log(data)
      // 拿到轮播图的数据
      this.topImages = data.itemInfo.topImages
      // 拿到商品详细信息的数据
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // 拿到卖家的相关信息
      this.shop = new Shop(data.shopInfo)
      // 拿到商品的详情数据
      this.detailInfo = data.detailInfo
      // 拿到商品的参数信息
      if(data.itemParams.info && data.itemParams.rule) {
      this.paramsInfo = new ParamsInfo(data.itemParams.info, data.itemParams.rule)
      }
      // 拿到评论信息
      this.comment = data.rate
    })

  //请求推荐数据
  recommend().then((res) => {
    const list = res.data.data.list
    this.recommend = list
  })  
  },
  methods: {
    ...mapActions({
      addIntoCart: 'addCart'
    }),
    // 当商品详细信息数据加载完获取组件的高度
    imageLoad() {
    this.$refs.scroll.refresh()
    this.assemblyTop.push(this.$refs.paramsInfo.$el.offsetTop)
    this.assemblyTop.push(this.$refs.comment.$el.offsetTop)
    this.assemblyTop.push(this.$refs.recommend.$el.offsetTop)
    this.assemblyTop.push(Number.MAX_VALUE)
  },
  // 点击顶部导航栏实现内容的跳转
  titleClick(index) {
  this.$refs.scroll.scrollTo(0, -this.assemblyTop[index])
  },
  // 监听滑动位置实时改变顶部导航栏活跃显示
  scroll(position) {
      // if(this.assemblyTop[]<-position.y && this.assemblyTop[]>-position.y)
//  第一种方法采用逻辑，但是判断条件过于麻烦
//  for(let i = 0; i < this.assemblyTop.length; i++) {
//   if((i < this.assemblyTop.length-1 && -position.y >= this.assemblyTop[i] && -position.y < this.assemblyTop[i+1]) ||
//    (i == this.assemblyTop.length-1 && -position.y >= this.assemblyTop[i])){
//    if(this.currentIndex !== i){
//    this.currentIndex = i}
//     break;
//   }
//   }
    const position1 = -position.y
    const assemblyTop = this.assemblyTop
  // 第二种方法，在数组最后加一个很大的数与最后的推荐数据进行比较
  for(let i = 0; i < assemblyTop.length; i++) {
   if(position1 >= assemblyTop[i] && position1 < assemblyTop[i+1]) {
    if(this.currentIndex !== i) {
   this.currentIndex = i
   break;}
    
   }
  }
  // 监听滚动返回顶部
   this.isBackShow = -position.y > 1000 ? true : false
  },
  // 返回顶部
  backClick() {
    this.$refs.scroll.scrollTo(0, 0)
  },
  // 实现加入购物车的功能
  addCart() {
        const obj = {}
        obj.iid = this.iid
        obj.imgURL = this.topImages[0]
        obj.title = this.goods.title
        obj.desc = this.goods.desc
        obj.price = this.goods.realPrice
        // this.$store.dispatch('addCart', obj)
        this.addIntoCart(obj).then(res => {
          // this.message = res
          // this.isShow = true
          // setTimeout(() => {
          // this.isShow = false
          // },3000)
          this.$toast.isShow(res, 3000)
        })
  }
},
mixins: [imageLoadListener],
mounted() {
},
destroyed() {
  this.$bus.$off('imageLoadItem', this.imageLoadRefresh)
},
} 
</script>
<style scoped>
.detail{
  height: 100vh;
  position: relative;
}
.content{
height: calc(100% - 44px - 49px);
overflow: hidden;
position: absolute;
z-index: 6;
background-color: #fff;
}

</style>