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
      },
      {
        name: 'NewProduct',
        path: '/new_product',
        component: () => import('pages/NewProduct.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
