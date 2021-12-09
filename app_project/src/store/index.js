import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    globalState: {
      name: 'lq'
    }
  },
  mutations: {
    setGlobalState(state, paylod) { // 监听修改全局状态状态
      Object.keys(paylod).forEach(key=>{
        if(state.globalState[key] == paylod[key])return;
        state.globalState[key] = paylod[key]
      })
    },
   
  },
  actions: {},
  modules: {}
})
