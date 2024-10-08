import { createApp } from 'vue'
import App from './App.vue'

// 라우터
import router from './router/index.js'

createApp(App).use(router).mount('#app')
