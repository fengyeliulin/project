<template lang="html">
  <div id="search-nav">
    <a href="" class="search-nav-icon">
      <img src="../images/search.png" alt="" width="25">
      <span>撩课学院</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "SearchNav"
};
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

  #search-nav
    width 100%
    height 60px
    background-color #fff
    border-bottom 1px solid #ccc
    position fixed
    top 0
    left 0
    z-index 998
    display flex
    justify-content center
    align-items center
    .search-nav-icon
      width 90%
      height 70%
      background #e8e8e8
      border-radius 10px
      display flex
      justify-content center
      align-items center
      text-decoration none
      span
        color #ccc
        margin-left 6px
        font-size 18px

</style>
