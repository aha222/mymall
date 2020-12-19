<template>
  <div class="detail-params-info" v-if="Object.keys(paramsInfo).length !== 0">
    <table class="size">
      <tr v-for="(itemone, indexone) in paramsInfo.tables[0]" :key="indexone">
       <td v-for="(itemtwo, indextwo) in itemone" :key="indextwo">{{itemtwo}}</td>
      </tr>
    </table>
    <div class="disclaimer">
      {{paramsInfo.disclaimer}}
    </div>
    <div class="allParams">
   <div class="params" v-for="(item, index) in paramsInfo.set"
    :key="index">
    <span class="key">{{item.key}}</span>
    <span class="value">{{item.value}}</span>
   </div>
   </div>
  </div>
</template>
<script>
export default {
  props: {
    paramsInfo: {
      typeof: Object,
      default() {
      return {}
      }
    }
  }
}
</script>
<style scoped>
.detail-params-info{
  width: 300px;
  margin: 10px auto;
  border-top: solid 4px rgb(235, 235, 235);
  position: relative;
  font-size: 14px;
  }

table{
  border-collapse: collapse;
  width: 100%;
  font-size: 12px;
  }
tr{
    border-bottom: solid 1px rgb(226, 226, 226);
  }
td{
    padding: 15px;
  }
.disclaimer{
  margin-top: 5px;
  font-size: 13px;
  margin-bottom: 10px;
}
.key{
  margin-right: 35px;
}
.params{
  margin: 15px auto;
  border-bottom: solid 1px rgb(226, 226, 226);
  padding-bottom: 15px;
}
.value{
  position: absolute;
  left: 100px;
  color: var(--color-tint)
}
.allParams{
  padding-bottom: 10px;

  }
</style>