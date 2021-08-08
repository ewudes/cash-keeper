import Vue from 'vue';
import Vuelidate from 'vuelidate';
import Paginate from 'vuejs-paginate';
import VueMeta from 'vue-meta';
import messagePlugin from '@/utils/message.plugin';
import titlePlugin from '@/utils/title.plugin';
import Loader from '@/components/app/Loader.vue';
import firebase from 'firebase/app';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import dateFilter from './components/filters/date.filter';
import currencyFilter from './components/filters/currency.filter';
import localizeFilter from './components/filters/localize.filter';
import tooltipDirective from './directives/tooltip.directive';
import 'materialize-css/dist/js/materialize.min';

import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(VueMeta);
Vue.use(titlePlugin);
Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.filter('localize', localizeFilter);
Vue.use(Vuelidate);
Vue.directive('tooltip', tooltipDirective);
Vue.component('Loader', Loader);
Vue.component('Paginate', Paginate);

firebase.initializeApp({
  apiKey: 'AIzaSyCsE4ou4CY5tPNDIRd5XHJ6I9DIvS-BMD0',
  authDomain: 'vue-crm-92da5.firebaseapp.com',
  projectId: 'vue-crm-92da5',
  storageBucket: 'vue-crm-92da5.appspot.com',
  messagingSenderId: '907113975745',
  appId: '1:907113975745:web:3653f5feb62ad5d7182940',
  measurementId: 'G-10LMER4X4S',
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
