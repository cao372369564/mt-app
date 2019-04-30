import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store.js';

Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.directive('document-listener',{
  bind(el,binding,vnode){
    
    // console.log(binding.value)
    document.addEventListener('click',binding.value,false);
    
  },

  inserted(){
    // console.log('inserted');
  },

  update(){
    // console.log('update');
  },

  
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


