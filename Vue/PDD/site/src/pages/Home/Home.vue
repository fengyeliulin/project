<template lang="html">
  <div id="home">
    <ly-tab v-model="selectedId" :items="items" :options="options" @change="handleChange" class="fix"/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data () {
    return {
      selectedId: 0,
      items: [
        {label: '热门'},
        {label: '服饰'},
        {label: '鞋包'},
        {label: '母婴'},
        {label: '百货'},
        {label: '食品'},
        {label: '内衣'},
        {label: '男装'},
        {label: '电器'}
      ],
      options: {
        activeColor: '#e9232c'
      },
      subRouteUrl: ['/home/hot', '/home/dress', '/home/box', '/home/general', '/home/food', '/home/shirt', '/home/man', '/home/mbaby', '/home/ele']
    }
  },
  methods:{
    handleChange(item, index){
      //console.log(item, index)
      this.$router.replace(this.subRouteUrl[index])
    }
  }
};
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  #home
    background #f5f5f5
    width 100%
    height 100%
    .fix
      position fixed
      left 0
      top 0
      z-index 199
</style>
