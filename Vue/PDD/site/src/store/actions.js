import {getHomeCasual, getHomeNav, getHomeShopList, getRecommendShopList} from '../api'
import {HOME_CASUAL, HOME_NAV, HOME_SHOPLIST, RECOMMEND_SHOPLIST} from './mutation-types'

export default {
  //请求首页的轮播图
  async reqHomeCasual({commit}){
    const result = await getHomeCasual();
    commit(HOME_CASUAL, {homecasual: result.message.data})
  },

  //请求首页的导航
  async reqHomeNav({commit}) {
    const result = await getHomeNav();
    commit(HOME_NAV, {homenav: result.message.data})
  },

  //请求首页的商品列表
  async reqHomeShopList({commit}) {
    const result = await getHomeShopList();
    commit(HOME_SHOPLIST, {homeshoplist: result.message.goods_list})
  },

  //获取首页的商品列表
  async reqRecommendShopList({commit}) {
    const result = await getRecommendShopList();
    commit(RECOMMEND_SHOPLIST, {recommendshoplist: result.message.data})
  },
}
