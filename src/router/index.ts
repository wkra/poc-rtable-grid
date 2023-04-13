import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/TheHome.vue')
    },
    {
      path: '/first-sample-grid',
      name: 'firstSampleGrid',
      component: () => import('../views/FirstSampleGrid.vue')
    },
    {
      path: '/second-sample-grid',
      name: 'secondSampleGrid',
      component: () => import('../views/SecondSampleGrid.vue')
    },
    {
      path: '/ag-grid-vue3',
      name: 'agGridVue3',
      component: () => import('../views/AgGridVue3.vue')
    }
  ]
})

export default router
