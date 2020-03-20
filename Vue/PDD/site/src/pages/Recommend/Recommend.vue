<template lang="html">
  <div id="recommend-container" v-if="recommendshoplist.length > 0">
    <ul class="recommend">
      <ShopList v-for="(item, index) in recommendshoplist" tag="li" :item="item" :key="index" />
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import ShopList from '../../components/ShopList/ShopList'
  export default {
    name: "Recommend",
    data() {
      return {}
    },
    components: {
      ShopList
    },
    mounted (){
      //请求推荐商品的数据
      this.$store.dispatch('reqRecommendShopList');
    },
    computed: {
        ...mapState(['recommendshoplist'])
    },
  };
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  #recommend-container
    width 100%
    height 100%
    background #F5F5F5
    .recommend
      display flex
      flex-direction row
      flex-wrap wrap
      background #F5F5F5
      margin 0
      padding 0
      margin-bottom 50px



</style>
