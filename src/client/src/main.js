import Vue from 'vue'
import Vuetify from './plugins/vuetify'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  vuetify: Vuetify,
  render: h => h(App),
}).$mount('#app')
