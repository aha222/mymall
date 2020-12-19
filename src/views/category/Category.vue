<template>
  <div class="category">
  <nav-bar class="cate-nav-bar">
    <div slot="center">商品分类</div>
  </nav-bar>
  <div class="content1">
  <aside-nav-bar :list="list" @itemClick="itemClick"/>
  <specific-cate :listItem="listItem" :currentIndex="index" 
  :goodsItems="goodsItems"/>
  </div>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'

import AsideNavBar from './childComps/AsideNavBar'
import SpecificCate from './childComps/SpecificCate'

import {getCategory, getSubCategory,getCategoryDetail} from 'network/category'
export default {
  data() {
  return {
    list: [],
    listItem: [],
    index: 0,
    goodsItems: []
  }
  },
  components: {
    NavBar,
    AsideNavBar,
    SpecificCate,
  },
  methods: {
   getCategory() {
    getCategory().then(res => {
    const data = res.data.data
    // 获取侧面导航栏分类名称数据
    this.list = data.category.list
    console.log(this.list)

    // 获取每个导航的详细信息
     this.getSubCategory() 

    //  获取详细的商品数据
    this.getCategoryDetail()

    console.log(this.listItem)
    console.log(this.goodsItems)
    })
  },
  // 获取每个导航栏的详细信息,使用了async/await,实现异步操作
  // 的同步化，在for循环中嵌套了异步操作，那么可以实现同步化
   async getSubCategory() {
    for(let item of this.list){
    await getSubCategory(item.maitKey).then( res => {
      const imageList =  res.data.data.list
      this.listItem.push(imageList)
    })
    }
    },

    // 获取的分类页面详细的商品数据
    async getCategoryDetail() {
    for(let item of this.list){
    await getCategoryDetail(item.miniWallkey).then( res => {
      const goodsList =  res.data
      this.goodsItems.push(goodsList)
    })
    }
    },
  // 监听侧面导航栏的点击
  itemClick(index) {
   this.index = index
  }
  },
  created() {
    // 获取侧面导航栏数据
    this.getCategory()
  }
}
</script>
<style scoped>
.cate-nav-bar{
  background-color: var( --color-high-text );
  color: #fff;
  font-size: 18px;
}
.category{
  height: 100vh;
  background-color: rgb(241, 241, 241);
  
}
.content1{
 height: calc(100% - 44px - 49px);
  display: flex;
  position: relative;
}
</style>