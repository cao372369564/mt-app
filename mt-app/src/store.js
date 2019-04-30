import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    position : '郑州'
}

const mutations = {
    setPosition (state,val){
        state.position = val;
    }
}

const actions = {
    // setPosition (state,val){
    //     state.commit('setPosition',val)
    // }
    // //也可以利用解构赋值
    setPosition({ commit },val){
        //异步请求后端获取当前位置数据
        commit('setPosition',val)
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})