import Vue from 'vue'
import App from './App.vue'
import './assets/scss/style.scss'
import router from './router'
Vue.config.productionTip = false
import VueAwesomeSwiper from 'vue-awesome-swiper'

import axios from 'axios'
Vue.prototype.$http = axios.create({
  // baseURL: 'http://localhost:3000/web/api'
  baseURL: process.env.VUE_APP_API_URL || '/web/api'
})
// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'
import Card from './components/Card.vue'
Vue.component('m-card', Card)

import ListCard from './components/ListCard.vue'
Vue.component('m-list-card', ListCard)
Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')