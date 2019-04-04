import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/layout/Default.vue'
import Blank from '@/layout/Blank.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Default',
      component: Default
    },{
      path: '/blank',
      name: 'Blank',
      component: Blank
    }
  ]
})
 