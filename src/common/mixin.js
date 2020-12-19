import {debounce} from 'common/utils'
export const imageLoadListener = {
  mounted() {
    this.$nextTick( function(){
      const refresh = debounce(this.$refs.scroll.refresh, 50)
      this.imageLoadRefresh = () => {
        refresh()
      }
      this.$bus.$on('imageLoadItem', this.imageLoadRefresh)
      
    })
  }
}