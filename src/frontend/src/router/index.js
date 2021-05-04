import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '../views/Login.vue';
import Painel from '../views/Painel.vue';
import TermosDeRegistro from '../views/TermosDeRegistro.vue';
import Registro from '../views/Registro.vue';

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
    path: '/termos-de-registro',
    name: "Termos de Registro",
    component: TermosDeRegistro
  },
  {
    path: '/registro',
    name: "Registro",
    component: Registro
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