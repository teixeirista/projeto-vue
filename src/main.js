import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from './pages/views/Login'
import Register from './pages/views/Register'
import List from './pages/views/List'
import Upload from './pages/views/Upload'
import File from './pages/views/File'
import Guard from './services/middleware.js'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', name:'login', component: Login }, //Rota de login
  { path: '/register', name:'register', component: Register }, //Rota de cadastro de usuário
  { path: '/home', name:'home', component: List, beforeEnter: Guard.auth }, //Rota da lista de arquivos
  { path: '/upload', name:'upload', component: Upload, beforeEnter: Guard.auth  }, //Rota de upload de arquivos
  { path: '/view', name:'view', component: File, beforeEnter: Guard.auth  } //Rota de upload de arquivos
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
