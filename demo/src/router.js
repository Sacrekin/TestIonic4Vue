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
        path: '',
        //name: 'home',
        component: Home
      },
      {
        path: '/Home',
        //name: 'home',
        component: Home
      },
      {
        path: '/Formtst',
        //name: 'form',
        component: FormTst,
      }]
    }]
});
