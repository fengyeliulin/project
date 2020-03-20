import ajax from './ajax'

const BASE_URL = "http://127.0.0.1:3000";

export const getHomeCasual = () => ajax(BASE_URL + '/api/homecasual');

export const getHomeNav = () => ajax(BASE_URL + '/api/homenav');
//获取首页商品列表
export const getHomeShopList = () => ajax(BASE_URL + '/api/homeshoplist');
//获取推荐商品列表
export const getRecommendShopList = () => ajax(BASE_URL + '/api/recommendshoplist');
//获取推荐商品列表
export const getSearchGoods = () => ajax(BASE_URL + '/api/SearchGoods');
