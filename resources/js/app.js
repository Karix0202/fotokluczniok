import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import CKEditor from '@ckeditor/ckeditor5-vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(CKEditor);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
