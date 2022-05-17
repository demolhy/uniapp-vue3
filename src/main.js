import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import 'amfe-flexible'
import { Button, Tabbar, TabbarItem } from 'vant';



const app = createApp(App)
app.use(Button).use(Tabbar).use(TabbarItem);
app.use(router)
app.mount('#app')
