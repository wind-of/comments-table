import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import BASE_ICON from './base-components/BASE_ICON'
import BASE_ERROR from './base-components/BASE_ERROR'
import BASE_BUTTON from './base-components/BASE_BUTTON'
import './assets/css/main.scss'

Vue.config.productionTip = false;

// Yes, the Icon Template is used only in 1 component, but this is not for long.
Vue.component('BaseIcon', BASE_ICON);
Vue.component('BaseError', BASE_ERROR);
Vue.component('BaseButton', BASE_BUTTON); 

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
