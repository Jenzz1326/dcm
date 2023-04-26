import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('../views/Layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/Layout/home/index.vue')
      },
      {
        path: 'collection',
        name: 'collection',
        component: () => import('../views/Layout/collection/index.vue')
      },
      {
        path: 'villageDetails/:id',
        name: 'villageDetails',
        component: () => import('../views/Layout/villageDetails/index.vue'),
        props: true
      },
      {
        path: 'vizenVillageGz',
        name: 'vizenVillageGz',
        component: () => import('../views/Layout/vizenVillageGz/index.vue'),
      }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
