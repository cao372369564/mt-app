import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/layout/Default.vue'
import Blank from '@/layout/Blank.vue'
import Search from '@/components/main/ProductList.vue';
import Main from '@/components/main/Main.vue'
import ChangeCity from '@/components/main/ChangeCity.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // name: 'default',
      component: Default,
      children : [{
        path: '/',
        name: 'Main',
        component: Main
      },{
        path: '/search',
        name: 'search',
        component: Search
      },{
        path: '/changecity',
        name: 'ChangeCity',
        component: ChangeCity
      }]
    },{
      path: '/blank',
      name: 'blank',
      component: Blank
    }
  ]
})
 