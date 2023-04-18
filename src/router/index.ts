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
      path: '/ag-grid-vue3',
      name: 'AgGridVue3',
      component: () => import('../views/AgGridVue3.vue')
    },
    {
      path: '/vue3-easy-data-table',
      name: 'Vue3EasyDataTable',
      component: () => import('../views/Vue3EasyDataTable.vue')
    },
    {
      path: '/vue-easy-table',
      name: 'VueEasytable',
      component: () => import('../views/VueEasytable.vue')
    },
    {
      path: '/revo-grid',
      name: 'RevoGrid',
      component: () => import('../views/RevoGrid.vue')
    },
    {
      path: '/bryntum-grid',
      name: 'BryntumGrid',
      component: () => import('../views/BryntumGrid.vue')
    },
    {
      path: '/vue-handsontable',
      name: 'VueHandsontable',
      component: () => import('../views/VueHandsontable.vue')
    },
    {
      path: '/syncfusion',
      name: 'Syncfusion',
      component: () => import('../views/Syncfusion.vue')
    }
  ]
})

export default router
