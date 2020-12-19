<template>
  <div class="tab-control">
<div class="tab-control-item" 
v-for="(item,index) in tabControlItem" :key="index"
 @click="itemClick(index)"
 :class="{active: currentIndex === index}">
<span>{{item}}</span>
</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    tabControlItem: {
      typeof: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      // 监听点击，完成页面数据的切换
      this.$emit('tabClick', index)
  
    }
  }
}
</script>
<style scoped>
.tab-control{
  display: flex;
text-align: center;
height:44px;
line-height: 44px;
}
.tab-control-item{flex:1;}
.tab-control-item span{padding: 5px;}
.active span{border-bottom:solid 2px var(--color-high-text);}
.active {color: var(--color-high-text);}
</style>