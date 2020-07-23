import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import VueCarousel from '@chenfengyuan/vue-carousel';

Vue.use(VueCarousel);
// Or
Vue.component(VueCarousel.name, VueCarousel);
// Or
Vue.component('vue-carousel', VueCarousel);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
