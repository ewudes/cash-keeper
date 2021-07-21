import Vue from 'vue';
import Vuelidate from 'vuelidate';
import messagePlugin from '@/utils/message.plugin';
import Loader from '@/components/app/Loader.vue';
import firebase from 'firebase/app';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import dateFilter from './components/filters/date.filter';
import currencyFilter from './components/filters/currency.filter';
import 'materialize-css/dist/js/materialize.min';

import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.use(Vuelidate);
Vue.component('Loader', Loader);

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
