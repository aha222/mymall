<template>
<scroll class="content" ref="scroll">
  <div class="specific-cate">
   <specific-cate-item v-for="(item, index) in listItem[currentIndex]"
   :key="index" :cateItem="item" @imageLoad="imageLoad"/>
  </div>
  <tab-control :tabControlItem="['综合', '新品', '销量']"/>
  <div class="list-item">
  <goods-list-item v-for="(item, index) in goodsItems[currentIndex]"
   :key="index" :goodsItem="item" class="category-goods-item"/>
   </div>
  </scroll>
</template>
<script>
import SpecificCateItem from './SpecificCateItem'

import Scroll from 'components/common/scroll/Scroll'

import TabControl from 'components/content/tabControl/TabControl'
import GoodsListItem from 'components/content/goods/GoodsListItem'

import {debounce} from 'common/utils'

import{imageLoadListener} from 'common/mixin'
export default {
  components: {
    SpecificCateItem,
    Scroll,
    TabControl,
    GoodsListItem
  },
  props: {
    listItem: {
      typeof: Array,
      default() {
        return []
      }
    },
      goodsItems: {
      typeof: Array,
      default() {
        return []
      }
    },
    currentIndex: {
      typeof: Number,
      default: 0
    }
  },
  methods: {
    // 分类图片加载完成后进行刷新
    imageLoad() {
    const refresh = debounce(this.$refs.scroll.refresh, 500)
    refresh()
    },
  },
  // 具体图片加载完成后进行刷新
  mixins: [imageLoadListener],
  activated() {
    this.$refs.scroll.refresh()
  },
}
</script>
<style scoped>
.specific-cate{
  display: flex;
  flex-flow: wrap row;
  background-color: #fff;
  font-size: 13px;
  width: 300px;
}
.content{ 
   overflow: hidden; 
  height: 100%;
  background-color: #fff;
 }
 .category-goods-item{
   flex-flow: wrap row;
   position: relative;
   width: 145px;
 }
 .list-item{
   width: 300px;
   display: flex;
   flex-flow: wrap row;
   justify-content: space-around;
 }
 </style> 