import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '../views/Login.vue';
import Painel from '../views/Painel.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/painel',
    name: "Painel Principal",
    component: Painel
  },
  {
    path: '/*',
    redirect: () => {
      return '/login';
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;