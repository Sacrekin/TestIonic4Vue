import Vue from 'vue';
import Layout from './views/Layout.vue';
import Home from './views/Home.vue';
import FormTst from './views/FormTst.vue';
import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: 'history', // ! history mode in Ionic screws up animations
  base: '/',
  routes: [
    {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        redirect: {name: 'home'},
      },
      {
        path: '/Home',
        meta: {title: 'Demo Test App'},
        name: 'home',
        component: Home
      },
      {
        path: '/Formtst',
        meta: {title: 'V-Model Test'},
        name: 'form',
        component: FormTst,
      }]
    }]
});
