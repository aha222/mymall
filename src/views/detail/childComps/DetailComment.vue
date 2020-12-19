<template>
  <div class="comment"  v-if="Object.keys(comment).length !== 0" >
    <div class="moreComment">
  <span class="userComment">用户评价</span>
  <span class="more">更多</span>
  </div>
  <div class="user">
    <span class="head">
      <img :src="comment.list[0].user.avatar">
    </span>
    <span class="name">{{comment.list[0].user.uname}}</span>
  </div>
  <div class="detailComment">{{comment.list[0].content}}</div>
  <span class="created">{{comment.list[0].created | showDate}}</span>
  <span class="style">{{comment.list[0].style}}</span>
  <div class="images">
  <img :src="item" v-for="(item, index) in comment.list[0].images"
  :key="index">
</div>
  </div>
</template>
<script>
import { formatDate } from 'common/utils'
export default {
  props: {
    comment: {
      typeof: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
  showDate(value) {
    const date = new Date(value*1000)
    return formatDate(date, 'yyyy-MM-dd')
  }
  }
}
</script>
<style scoped>
.moreComment{
  border-bottom: solid 1px rgb(223, 223, 223);
  padding-bottom: 10px;
  margin-bottom: 10px;
}
.comment{
  font-size: 13px;
  border-bottom: solid 4px var(--color-content);
  padding-bottom: 10px;
  padding-top: 15px;
  border-top: solid 4px rgb(245, 245, 245);
}
.userComment{
  margin-left: 20px;
}
.more{
  position: absolute;
  right: 10px;
}
.user{
  margin-bottom: 7px;
  position: relative;
}
.head img{
  width: 35px;
  height: 35px;
  border-radius: 50px;
  margin-left: 10px;
}
.name{
  margin-left: 10px;
  position: absolute;
  top: 14px;
}
.detailComment{
  margin-left: 10px;
  margin-right: 5px;
  line-height: 18px;
  margin-bottom: 6px;
  
}
.created{
  margin-left: 10px;
  margin-right: 10px;
  color:rgb(175, 175, 175);
}
.style{
  color: rgb(175, 175, 175);
}
.images img{
  margin-top: 10px;
  margin-left: 10px;
  width: 80x;
  height: 60px;
  }
</style>