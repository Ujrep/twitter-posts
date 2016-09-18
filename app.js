// import 'common/base.scss';
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from 'components/home.vue';

Vue.use(VueRouter);
Vue.component('home', Home);
const App = Vue.extend();

const router = new VueRouter({
  linkActiveClass: 'selected',
  hashbang: false,
  history: true
});

router.start(App, '#app');
