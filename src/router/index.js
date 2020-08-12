import Vue from 'vue'
import VueRouter from 'vue-router'
import {userPortfolio} from '../dummy';

// import routes from './routes'

const defaultPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return defaultPush.call(this, location).catch(err => err)
};



Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function ( { store } ) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes:[{
      path: '/',
      component: () => import('layouts/MainLayout.vue'),
      children: [{
          name: 'Home',
          path: '',
          component: () => import('pages/Home.vue')
        },
        {
          name: 'Devices',
          path: 'devices',
          component: () => import('pages/Devices.vue')
        },
        {
          name: 'FirmwaresOverview',
          path: 'firmwaresOverview',
          component: () => import('pages/FirmwaresOverview.vue')
        },
        {
          name: 'Firmwares',
          path: 'firmware/:id',
          props: true,
          component: () => import('pages/Firmware.vue')
        },
        {
          name: 'Feedback',
          path: 'feedback',
          component: () => import('pages/Feedback.vue')
        }
      ],
      beforeEnter(to,from,next){
        // Make Api Call and populate store:
        // Apicall.then(data=>{
        //   store().dispatch("common/initializeData",data)
        // })
  
        // Dummy data
        store.dispatch("common/initializeData",userPortfolio);
        next();
      }
    },
  
    // Always leave this as last one,
    // but you can also remove it
    {
      path: '*',
      component: () => import('pages/Error404.vue')
    }
  ],

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  return Router
}
