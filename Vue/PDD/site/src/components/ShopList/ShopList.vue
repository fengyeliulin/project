<template lang="html">
  <a class="recommend-item">
    <img :src="item.thumb_url" alt="" width="100%" v-if="item.thumb_url ">
    <h4 class="item-title">{{item.short_name}}</h4>
    <div class="item-bottom">
        <span class="item-price">￥{{item.price / 100}}</span>
        <span class="item-sales">{{item.sales_tip}}</span>
        <button class="item-btn" v-if="false">找相关</button>
        <span class="item-user" v-else>
          <img src="http://t20img.yangkeduo.com/a/7bb7677358604fcc75c86f37a2a567cfa1107684-1534773680?imageMogr2/thumbnail/100x" alt=""/>
          <img src="http://t20img.yangkeduo.com/a/f44b185c296fd8ef9302a2c70f2033c4133c85df-1532393091?imageMogr2/thumbnail/100x" alt=""/>
        </span>
    </div>
  </a>
</template>

<script>
export default {
  name: "ShopList",
  props: {
    item: Object
  }
};
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.recommend-item:nth-child(2n-1)
  margin-right 1%
.recommend-item
  display block
  width 49.5%
  background #FFF
  margin-bottom 15px
  padding-bottom 15px
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
    .item-btn
      flex 2
      border 1px solid orangered
      height 26px
      background transparent
      border-radius 5px
      color red
      font-size 10px
      padding 0
    .item-user
      img
        width 20px
        border-radius 50%
      img:nth-child(2)
        margin-left -5px
</style>
