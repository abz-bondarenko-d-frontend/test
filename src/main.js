import Vue from 'vue';
import { VueMaskDirective } from 'v-mask';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import store from './store';

Vue.directive('mask', VueMaskDirective);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  render: (h) => h(App),
}).$mount('#app');
