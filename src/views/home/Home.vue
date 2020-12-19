<template>
<div id="home">
<nav-bar class="home-nav-bar"><div slot="center">购物街</div></nav-bar>
  <tab-control :tabControlItem="['流行','新款','精选']"
  @tabClick="tabClick"
  class="tabControl1"
  ref="tabControl1"
  v-show="isShow"></tab-control>
<b-scroll class="content" 
 ref="scroll"
 @pullLoad="pullLoad"
 @scroll="scroll"
 :pullUpLoad="true"
  :probeType="3">
  <home-swiper :banners="banners" 
  @swiperLoadOver="swiperLoadOver"></home-swiper>
  <home-recommend :recommends="recommends"></home-recommend>
  <home-feature/>
  <tab-control :tabControlItem="['流行','新款','精选']"
  @tabClick="tabClick" ref="tabControl2"></tab-control>
  <goods-list :goods="goods[currentIndex].list"></goods-list>
  </b-scroll>
  <back-top v-show="isLook" @click.native="backClick"></back-top>
  </div>
</template>
<script>
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import HomeFeature from './childComps/HomeFeature'

import NavBar from 'components/common/navbar/NavBar'
import BScroll from 'components/common/scroll/Scroll'

import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'
import TabControl from 'components/content/tabControl/TabControl'

import {getHomeMultidata, getHomeGoods} from 'network/home'

import{ imageLoadListener } from 'common/mixin'
export default {
  data() {
    return {
    banners: [],
    recommends: [],
    goods: {
      'pop': {page: 0, list: []},
      'new': {page: 0, list: []},
      'sell': {page: 0,list: []}
    },
    currentIndex: 'pop',
    tabOffsetTop: 0,
    isShow: false,
    isLook: false,
    imageLoadRefresh: null
  
  }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    BScroll,
    TabControl,
    GoodsList,
    BackTop,
    
  },
  methods: {
    // 请求商品数据
  getHomeGoods(type) {
    const page = this.goods[type].page + 1
    getHomeGoods(type, page).then((res) => {
      // 遍历拿到list中的每个商品对象
      // for(item of res.data.data.list)
      // {
      //   this.goods[type].list.push(item)
      // }
      const data = res.data
      this.goods[type].list.push(...data.data.list)
      this.goods[type].page += 1
      //上拉加载更多完成
      this.$refs.scroll.finishPullUp()
      
    })
  },

// 请求轮播图及一些其他多个数据
getHomeMultidata() {
    getHomeMultidata().then((res) => {
      const data = res.data.data
     this.banners = data.banner.list
     this.recommends = data.recommend.list
    })
},

// 接收上拉事件，完成上拉加载更多的操作
pullLoad() {
this.getHomeGoods(this.currentIndex)
},

// 接收tabcontrol的点击事件
tabClick(index) {
  console.log(11111111)
switch(index){
  case 0:
  this.currentIndex = 'pop'
  break
  case 1:
  this.currentIndex = 'new'
  break
  case 2:
  this.currentIndex = 'sell'
  break
}
this.$refs.tabControl1.currentIndex = index
this.$refs.tabControl2.currentIndex = index
},
// 监听滚动，获取滚动的位置
scroll(position) {
    this.isLook = -position.y > 1000
    this.isShow = -position.y > this.tabOffsetTop

},

// 监听轮播图加载完成，才能获取到tabcontrol准确的高度
swiperLoadOver() {
  this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop 
},

// 监听返回顶部图片的点击
backClick() {
  this.$refs.scroll.scrollTo(0, 0)
}

  },
  
  created() {
    // 请求轮播图及一些其他多个数据
    this.getHomeMultidata() 

    // 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('sell')
    this.getHomeGoods('new')
  },

  // 当离开某一页面时，取消其刷新事件
  deactivated() {
    this.$bus.$off('imageLoadItem', this.imageLoadRefresh)
  },

  // 使用混入实现mounted的复用来完成刷新
mixins: [imageLoadListener],
mounted() {
}

}
</script>
<style scoped>
#home{
  height:100vh;
  position: relative;
  }

.home-nav-bar{
  font-size: 19px;
color: #fff;
background-color: var( --color-high-text );
}

.content{
  height: calc(100% - 44px - 49px);
overflow: hidden;
position: relative;
}

.tabControl1{
left: 0px;
  right: 0px;
  z-index: 9;
 background-color: #fff; 
  position: fixed;
  z-index: 9;
  }
  
</style>