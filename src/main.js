import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store/index'

Vue.use(VueRouter)

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
