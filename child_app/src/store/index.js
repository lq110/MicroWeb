import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    globalInstan: {} // 全局通信对象
  },
  mutations: {
    setGlobalInstan(state, paylod) { // 设置通信对象
      state.globalInstan = paylod
    }
  },
  actions: {},
  modules: {}
})
