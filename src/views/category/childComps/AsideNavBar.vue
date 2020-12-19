<template>
<scroll class="content" ref="scroll" v-if="list.length != 0">
  <div class="aside-nav-bar">
  <div class="aside-nav-bar-item" v-for="(item, index) in list"
  :key="index" :class="{active: index == currentIndex}"
    @click="itemClick(index)" >
  {{item.title}}
</div>  
  </div>
</scroll>
</template>
<script>
import Scroll from 'components/common/scroll/Scroll'
export default {
  components: {
  Scroll
  },
  data() {
  return {
    currentIndex: 0
  }
  },
    props: {
    list: {
      typeof: Array,
      default() {
        return []
      }
    }
  },
    methods: {
    itemClick(index) {
    this.currentIndex = index
    this.$emit('itemClick', index)
    },
  },
}
</script>
<style scoped>
.aside-nav-bar{
  width: 90px;
  background-color: rgb(241, 241, 241);
  font-size: 13px;
  text-align: center;
}
.content{ 
  overflow: hidden; 
   height: 100%;
}
.aside-nav-bar-item{
  padding: 15px 0;
}
.active{
  background-color: #fff;
  border-left: solid 4px var(--color-tint);
  color: var(--color-tint)
}
</style>