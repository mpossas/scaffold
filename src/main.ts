import { createApp } from 'vue'
import '@/assets/style.css'
import i18n from '@/config/i18n'
import App from '@/App.vue'

createApp(App)
.use(i18n)
.mount('#app')
