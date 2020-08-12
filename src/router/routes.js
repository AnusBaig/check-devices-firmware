import store from '../store';
import {userPortfolio} from '../dummy';

const routes = [{
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
      store().dispatch("common/initializeData",userPortfolio);
      next();
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]


export default routes
