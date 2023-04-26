import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
// 引入第三方组件
app.use(router)
app.use(store)
// 挂载
app.mount('#app')
