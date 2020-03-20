<template lang="html">
  <div id="search">
    <SearchNav :showSearchPanel="showSearchPanel"/>
    <div class="shop">
      <div class="menu-warpper">
        <ul class="menu-ul">
          <li class="menu-item"
              :class="{current: index1 === currentIndex}"
              v-for="(item, index1) in searchgoods"
              :key="index1"
              @click="clickLeftItem(index1)"
              ref="menulist"
          >
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="shop-warpper">
        <ul ref='shopsParent'>
          <li class="shop-li" v-for="(goods, index2) in searchgoods" :key="index2">
            <div class="shop-title">
              <h4>{{goods.name}}</h4>
              <a href="#">查看更多 ></a>
            </div>
            <ul class="phone-type" v-if="goods.tag === 'phone'">
              <li v-for="(phone, index) in goods.category" :key="index">
                <img :src="phone.icon" alt="">
              </li>
            </ul>
            <ul class="shop-items">
              <li v-for="(item, index3) in goods.items" :key="index3">
                <img :src="item.icon" alt="">
                <span>{{item.title}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!--搜索面板-->
    <search-panel v-if="isShow" :showSearchPanel="showSearchPanel"/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import SearchNav from './Children/SearchNav'
  import SearchPanel from './Children/SearchPanel'
  export default {
    name: "Search",
    data(){
      return {
        scrollY: 0, // 右侧列表滑动的Y轴坐标(实时更新)
        rightLiTops: [], // 所有分类的头部位置
        isShow: false
      }
    },
    components: {
      SearchNav,
      SearchPanel
    },
    computed: {
      ...mapState(['searchgoods']),
      currentIndex(){
        const {scrollY, rightLiTops} = this;
        return rightLiTops.findIndex((liTop, index) => {
          this._leftScroll(index);
          return scrollY >= liTop && scrollY < rightLiTops[index + 1];
        })
      }
    },
    mounted (){
      //请求搜索分类商品数据
      this.$store.dispatch('reqSearchGoods');
    },
    watch:{
      searchgoods(){
        this.$nextTick(()=>{
          this._initBScroll();
          this._initRightLiTops();
        })
      }
    },
    methods:{
      _initBScroll(){
        this.leftScroll = new BScroll('.menu-warpper',{
          scrollY: true,
          click: true
        });
        this.rightScroll = new BScroll('.shop-warpper',{
          probeType: 3
        });

        this.rightScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(pos.y);
        })
      },
      _initRightLiTops(){
        const tempArr = []
        let top=0;
        tempArr.push(top);
        let allLis = this.$refs.shopsParent.getElementsByClassName('shop-li')
        Array.prototype.slice.call(allLis).forEach(li => {
          top += li.clientHeight;
          tempArr.push(top);
        });
        this.rightLiTops = tempArr;
      },
      clickLeftItem(index){
        this.scrollY = this.rightLiTops[index];
        this.rightScroll.scrollTo(0, -this.scrollY, 300);
      },
      _leftScroll(index){
        let menuLists = this.$refs.menulist;
        let el = menuLists[index];
        this.leftScroll.scrollToElement(el, 300, 0, -100)
      },
      showSearchPanel(flag){
          this.isShow = flag;
      }
    }
  };
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

  #search
    background #F5F5F5
    width 100%
    height 100%
    overflow hidden
    .shop
      display flex
      position absolute
      top 60px
      bottom 50px
      width 100%
      .menu-warpper
        background #e0e0e0
        width 80px
        flex 0 0 80px
        .menu-ul
          padding 0
          .menu-item
            width 100%
            height 60px
            background #fafafa
            display flex
            justify-content center
            align-items center
            font-weight lighter
            color #666
            position relative

          .current
            color #e02e24
          .current::before
            content ''
            background #e02e24
            width 4px
            height 30px
            position absolute
            left 0

      .shop-warpper
        flex 1
        background #fff
        ul
          padding 0
          margin 0
          list-style-type none
          .shop-title
            display flex
            flex-direction row
            padding 0 10px
            height 44px
            align-items center
            justify-content space-between
            color #999
            a
              color #999
              text-decoration none
              font-weight lighter
          .phone-type
            width 100%
            display flex
            flex-direction row
            flex-wrap wrap
            border-bottom 1px silid #ccc
            li
              width 33.3%
              display flex
              flex-direction row
              align-items center
              justify-content center
              margin 5px 0
            img
              width 70%

          .shop-items
            display flex
            flex-wrap wrap
            margin-bottom 20px
            li
              display flex
              flex-direction column
              justify-content center
              align-items center
              width 33.3%
              height 90px
              color #666
              font-weight lighter
              font-size 14px
              img
                width 60%
                height 60%
                margin-bottom 5px

</style>
