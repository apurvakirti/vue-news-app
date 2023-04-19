import Vue from 'vue'
import Vuex from "vuex";
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes'
import store from './store/store';
Vue.use(Vuex);
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes,

})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
