import Vue from 'vue';
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';
import store from './store/index'


import router from './routes/router';

Vue.use(DashboardPlugin);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),

});
