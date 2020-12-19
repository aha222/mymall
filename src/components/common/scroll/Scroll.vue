<template>
  <div class="wrapper" ref="wrapper">
<div class="content">
  <slot></slot>
</div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      scroll: null,
    }
  },
    props: {
           pullUpLoad: {
        typeof: Boolean,
        default() {
          return true
        }
      },
      probeType: {
        typeof: Number,
        default :0
      }
  },
  mounted() {
    // 创建bscroll实例
     this.scroll = new BScroll(this.$refs.wrapper,{
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true

    })

    // 监听是否滚动到底部，然后进行下拉加载操作
    if(this.pullUpLoad)  {
       this.scroll.on('pullingUp', () => {
      this.$emit('pullLoad')
    })
    }

    // 监测滚动的位置
     if(this.probeType === 2 || this.probeType === 3){
       this.scroll.on('scroll', position => {
         this.$emit('scroll', position)
       })
     }
  },
  methods: {

    // 刷新，为什么使用scroll&&,因为子组件的内容挂载好了，
    // scroll实例可能还没有创建
  refresh() {
this.scroll && this.scroll.refresh()

  },

  // 上拉加载更多完成
  finishPullUp() {
    this.scroll && this.scroll.finishPullUp()
  }, 

  // scrollTo获取位置
  scrollTo(x, y, time=500) {
    this.scroll && this.scroll.scrollTo(x, y, time)
  }
  }
}
</script>
<style scoped>

</style>