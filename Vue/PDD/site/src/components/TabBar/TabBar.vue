<template lang="html">
  <div class="tab-bottom">
    <span class="tab-item" @click="goTo('/home')">
      <img :src="$route.path.includes('/home') ? tabBarImgs[0].selected : tabBarImgs[0].normal" alt="" />
      <span :class="{on: $route.path.includes('/home')}">首页</span>
    </span>
    <span class="tab-item" @click="goTo('/recommend')">
      <img :src="$route.path.includes('/recommend') ? tabBarImgs[1].selected : tabBarImgs[1].normal" alt="" />
      <span :class="{on: $route.path.includes('/recommend')}">推荐</span>
    </span>
    <span class="tab-item" @click="goTo('/search')">
      <img :src="$route.path.includes('/search') ? tabBarImgs[2].selected : tabBarImgs[2].normal" alt="" />
      <span :class="{on: $route.path.includes('/search')}">搜索</span>
    </span>
    <span class="tab-item" @click="goTo('/chat')">
      <img :src="$route.path.includes('/chat') ? tabBarImgs[3].selected : tabBarImgs[3].normal" alt="" />
      <span :class="{on: $route.path.includes('/chat')}">聊天</span>
    </span>
    <span class="tab-item" @click="goTo('/me')">
      <img :src="$route.path.includes('/me') ? tabBarImgs[4].selected : tabBarImgs[4].normal" alt="" />
      <span :class="{on: $route.path.includes('/me')}">个人中心</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      tabBarImgs: [
        {
          normal: require('../../../static/img/icon_home.png'),
          selected: require('../../../static/img/icon_home_selected.png')
        },
        {
          normal: require('../../../static/img/icon_intro.png'),
          selected: require('../../../static/img/icon_intro_selected.png')
        },
        {
          normal: require('../../../static/img/icon_search.png'),
          selected: require('../../../static/img/icon_search_selected.png')
        },
        {
          normal: require('../../../static/img/icon_chat.png'),
          selected: require('../../../static/img/icon_chat_selected.png')
        },
        {
          normal: require('../../../static/img/icon_mine.png'),
          selected: require('../../../static/img/icon_mine_selected.png')
        }
      ]
    }
  },
  methods: {
    goTo(path){
      this.$router.replace(path)
    }
  }
};
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .tab-bottom
    width 100%
    height 50px
    background #fff
    position fixed
    bottom 0
    left 0
    display flex
    z-index 99
    .tab-item
      display flex
      flex 1
      flex-direction column
      align-items center
      justify-content center
      font-size 14px
      color #666
      img
        width 35%
        margin-bottom 2px
      .on
        color red
</style>
