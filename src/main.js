import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import App from './App.vue';
import router from './router';
import store from './store';

// import 'bootstrap/dist/css/bootstrap.css';
// import './assets/theme_1595771679244.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/sass/index.sass';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
