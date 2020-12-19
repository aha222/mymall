<template>
  <div class="toast" v-show="show">
   {{message}}
  </div>
</template>
<script>
export default {
  data() {
    return {
    message: '',
    show: false
    }
  },
  methods: {
    isShow(message='默认文字', delayTime=3000) {
          this.message = message
          this.show = true
          setTimeout(() => {
          this.show = false
          },delayTime)
    }
  }
}
</script>
<style scoped>
.toast{
  background-color: rgba(0, 0, 0, .7);
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 15;
  padding: 10px 18px;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  font-size: 15px;
  color: #fff;
}
</style>