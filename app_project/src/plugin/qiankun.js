import {
  registerMicroApps,
  start,
} from 'qiankun'

import './state'

registerMicroApps([{
    name: 'app1', // app name registered
    // entry: '//localhost:8080', //应用 开发环境
    entry: '/test1/', // 上线环境
    container: '#app1',
    activeRule: '/test',
    props: {
      name: 'lq'
    }
  },
  // {
  //   name: 'vue app',
  //   entry: { scripts: ['//localhost:7100/main.js'] },
  //   container: '#yourContainer2',
  //   activeRule: '/yourActiveRule2',
  // },
]);

start()
