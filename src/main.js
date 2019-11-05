import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase/app'
import firebaseConfig from './firebase-config'
import router from './router/router'
import BASE_ICON from './base-components/BASE_ICON'
import BASE_ERROR from './base-components/BASE_ERROR'
import BASE_BUTTON from './base-components/BASE_BUTTON'
import './assets/css/main.scss'

Vue.config.productionTip = false;

Vue.component('BaseIcon', BASE_ICON);
Vue.component('BaseError', BASE_ERROR);
Vue.component('BaseButton', BASE_BUTTON); 

firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
