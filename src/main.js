import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import LoginComponent from './pages/views/LoginComponent'
import HomeComponent from './pages/views/HomeComponent'
import Upload from './pages/views/Upload'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', name:'login', component: LoginComponent },
  { path: '/home', name:'home', component: HomeComponent },
  { path: '/upload', name:'upload', component: Upload }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
