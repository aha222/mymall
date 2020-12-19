<template>
  <nav-bar>
    <div class="detail-back" slot="left" @click="backClick">
      <img src="@/assets/img/common/back.svg">
    </div>
    <div class="detail-nav" slot="center">
    <div v-for="(item, index) in titles" :key="index"
    class="title" @click="titleClick(index)"
    :class="{active: index === currentIndex}">{{item}}</div>
    </div>
  </nav-bar>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  components: {
    NavBar
  },
  props: {
  currentIndex: {
    typeof: Number,
    default: 0
  }
  },
  data() {
    return {
      titles: ['商品','参数', '评论', '推荐'],
    }
  },
  methods: {
    titleClick(index) {
    this.$emit('titleClick', index)
    },
    backClick() {
      // this.$router.push('/home')
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.detail-back img{
  margin-top:12px;
}
.detail-nav{
  display: flex;
}
.title{margin:0 12px;}
.active{color: var(--color-high-text);}
</style>