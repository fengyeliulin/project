<template>
  <div class="hot-nav">
    <!--滚动区域-->
    <div class="hot-nav-content" v-if="homenav.length>0">
      <div class="nav-content-inner">
        <a class="inner-item" v-for="(nav, index) in homenav" :key="index">
          <img :src="nav.iconurl" alt="">
          <span>{{nav.icontitle}}</span>
        </a>
        <!-- <a class="inner-item">
          <img src="./../../imgs/nav/nav_icon02.png" alt="">
          <span>每日清仓</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/nav_icon03.png" alt="">
          <span>品牌馆</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/nav_icon04.png" alt="">
          <span>天天领红包</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/nav_icon05.png" alt="">
          <span>9块9特卖</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/nav_icon06.gif" alt="">
          <span>充值中心</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/nav_icon07.png" alt="">
          <span>秋冬上新</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/nav_icon08.png" alt="">
          <span>现金签到</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/nav_icon09.png" alt="">
          <span>食品超市</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/nav_icon10.png" alt="">
          <span>电器城</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/nav_icon11.png" alt="">
          <span>助力享免单</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/nav_icon12.png" alt="">
          <span>天天半价购</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/nav_icon13.png" alt="">
          <span>1分抽大奖</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/nav_icon14.png" alt="">
          <span>电器城</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/nav_icon15.png" alt="">
          <span>时尚穿搭</span>
        </a>
        <a class="inner-item">
          <img src="./../../imgs/nav/nav_icon16.png" alt="">
          <span>淘淘</span>
        </a> -->
      </div>
    </div>
    <!--进度条-->
    <div class="hot-nav-bottom">
      <div class="hot-nav-bottom-inner" :style="innerBarStyle"></div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "HotNav",
    data(){
      return {
        // 1. 屏幕的宽度
        screenW: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        // 2. 滚动内容的宽度
        scrollContentW: 640,
        // 3. 滚动条背景的长度
        bgBarW: 100,
        // 4. 滚动条的长度
        barXWidth: 0,
        // 5. 起点
        startX: 0,
        // 6. 记录结束点
        endFlag: 0,
        // 7. 移动的距离
        barMoveWidth: 0
      }
    },
    computed:{
      ...mapState(['homenav']),
      innerBarStyle(){
        return {
          width: `${this.barXWidth}px`,
          left: `${this.barMoveWidth}px`
        }
      }
    },
    mounted() {
       this.getBottomBarWidth();
       this.bindEvent();
    },
    methods:{
      // 获取滚动条的长度
      getBottomBarWidth(){
        this.barXWidth = this.bgBarW * (this.screenW / this.scrollContentW)
      },
      // 移动端事件监听
      bindEvent(){
         this.$el.addEventListener('touchstart',this.handleTouchStart,false);
         this.$el.addEventListener('touchmove',this.handleTouchMove,false);
         this.$el.addEventListener('touchend',this.handleTouchEnd,false);
      },
      // 开始触摸
      handleTouchStart(event){
         // console.log(event.touches);
         // 1. 获取第一个触点
        let touch = event.touches[0];
         // 2.求出起始点
        this.startX = Number(touch.pageX);
        // console.log(this.startX);
      },
      // 开始移动
      handleTouchMove(){
        // console.log('开始移动');
        // 1. 获取第一个触点
        let touch = event.touches[0];
        // 2. 求出移动的距离
        let moveWidth = Number(touch.pageX) - this.startX;
        // console.log(moveWidth);
        // 3. 求出滚动条走的距离
        this.barMoveWidth = -((this.bgBarW / this.scrollContentW) * moveWidth - this.endFlag);

        // 4. 边界值处理
        if(this.barMoveWidth <= 0){ // 左边
          this.barMoveWidth = 0;
        }else if(this.barMoveWidth >= this.bgBarW - this.barXWidth){ // 右边
          this.barMoveWidth = this.bgBarW - this.barXWidth;
        }
      },
      // 结束触摸
      handleTouchEnd(){
        console.log('结束触摸');
        this.endFlag = this.barMoveWidth;
      },
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .hot-nav
    width 100%
    height 180px
    position relative
    background-color #fff
    padding-bottom 10px
    .hot-nav-content
      width 100%
      overflow-x scroll
      .nav-content-inner
        width 640px
        height 100%
        display flex
        flex-wrap wrap
        .inner-item
          width 80px
          height 80px
          display flex
          flex-direction column
          justify-content center
          align-items center
          font-size 14px
          color #666666
          img
            width 40%
    .hot-nav-content::-webkit-scrollbar
      display none
    .hot-nav-bottom
      width 100px
      height 2px
      background-color #ccc
      position absolute
      left 50%
      margin-left -50px
      bottom 8px
      .hot-nav-bottom-inner
         position absolute
         left 0
         height 100%
         background-color orangered
         width 0
</style>
