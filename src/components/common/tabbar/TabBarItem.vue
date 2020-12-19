<template>
  <div class="tab-bar-item">
  <div  v-if="!isActive" @click="tabClick"><slot name="item_icon"></slot></div>
  <div v-else><slot name="item_active_icon"></slot></div>
  <div :style="activeStyle" @click="tabClick"><slot name="item_text"></slot></div>
  <!-- <div :class="{active: activeStyle}" ><slot name="item_text"></slot></div> -->
  </div>
</template>
<script>
export default {
  props: {
    path: {
      typeof: String,
      default(){
        return ''
      }
    },
    colorStyle: {
      typeof: String,
      default() {
        return 'red'
      }
      }
  },
    data() {
      return {
        // activeStyle: true
      }
    },
  methods: {
    tabClick() {
     this.$router.push(this.path)
    },
  },
  computed: {
      isActive() {
    return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      // return this.$route.path.indexOf(this.path) !== -1
      return this.isActive ? {color:this.colorStyle}: {}
    }
  }
}
</script>
<style scoped>
.tab-bar-item{
  flex: 1;
  margin-top: 5px;
  }
  img{width: 24px;
  height: 24px;
  vertical-align: middle;}
  /* .active{color: rgb(253, 44, 155)} */
</style>