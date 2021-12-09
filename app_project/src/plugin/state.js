import {
  initGlobalState
} from 'qiankun'
 import Store from'../store/index'
 

// 初始化 state
const actions = initGlobalState(Store.state.globalState);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
 
    Store.commit('setGlobalState',state)
});
// 设置value
// actions.setGlobalState(state);
export default actions