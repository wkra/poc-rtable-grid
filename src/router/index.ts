import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
