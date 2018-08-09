import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store'
import VueRouter from 'vue-router'
import routers from './router'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  routes: [
    ...routers
  ]
})

Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  router: router,
  store: store,
  template: '<app />',
  components: { App }
})

export default app
