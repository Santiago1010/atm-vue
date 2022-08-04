import { createApp } from 'vue'
import './assets/styles/style.css'
import App from './App.vue'
import router from './assets/plugins/router.js'

createApp(App)
.use(router)
.mount('#app')