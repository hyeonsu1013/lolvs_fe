import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// vuetify
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'

// 공통기능
import mixin from "./assets/js/mixin"

// Vuex
import { store } from '@/store/store'

// css
import './assets/style.css';
import './assets/scss/lolvs.scss';

// base axios
axios.defaults.baseURL = process.env.VUE_APP_SERVER_URL;
Vue.prototype.$axios = axios

Vue.config.productionTip = false

// mixin
Vue.mixin(mixin);

new Vue({
  vuetify,
  store: store,
  router,
  render: h => h(App)
}).$mount('#app')
