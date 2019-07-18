import Vue from 'vue';
import App from './App.vue';
import router from './router';

import Ionic from '@ionic/vue';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import { addIcons } from "ionicons";
import { home, search, closeCircle } from "ionicons/icons";

Vue.use(Ionic);
Vue.config.productionTip = false;


addIcons({
    'ios-home': home.ios,
    'md-home': home.md,
    'ios-search': search.ios,
    'md-search': search.md,
    'ios-close-circle': closeCircle.ios,
    'md-close-circle': closeCircle.md,
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
