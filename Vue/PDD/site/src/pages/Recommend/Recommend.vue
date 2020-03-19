<template lang="html">
  <div id="recommend-container" v-if="recommendshoplist.length > 0">
    <ul class="recommend">
      <li class="recommend-item" v-for="(item, index) in recommendshoplist" :key="index">
        <img :src="item.thumb_url" alt="" v-if="item.thumb_url ">
        <h4 class="item-title">{{item.short_name}}</h4>
        <div class="item-bottom">
            <span class="item-price">￥{{item.price / 100}}</span>
            <span class="item-sales">{{item.sales_tip}}</span>
            <button class="btn">找相关</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "Recommend",
    data() {
      return {}
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

      .recommend-item:nth-child(2n-1)
        margin-right 1%
      .recommend-item
        display block
        width 49.5%
        background #FFF
        margin-bottom 15px
        padding-bottom 15px
        img
          width 100%
        .item-title
          line-height 20px
          font-size 13px
          font-weight lighter
          height 20px
          overflow hidden
          margin 5px 0
          padding 0 5px
        .item-bottom
          display flex
          flex-direction row
          align-items center
          padding 0
          .item-price
            flex 2
            font-size 12px
            font-weight bold
            color red
          .item-sales
            flex 4
            font-size 10px
            color #666
          .btn
            flex 2
            border 1px solid orangered
            height 26px
            background transparent
            border-radius 5px
            color red
            font-size 10px
            padding 0

</style>
