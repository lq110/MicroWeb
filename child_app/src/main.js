
import'./public-path'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// import router from './router'
import store from './store'
import routes from'./router/routes'

Vue.config.productionTip = false
Vue.use(VueRouter)
let router = null;
let instance = null;

function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/test/' : '/',
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
 

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
  console.log('开始挂载')
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  console.log('挂载成功')
  store.commit('setGlobalInstan',props)
  render(props);
  
  
  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev);
  });

  // props.setGlobalState({
  //   name:123
  // });
}
export async function unmount() {
  console.log('组件卸载')
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}