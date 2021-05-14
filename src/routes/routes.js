import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    redirect: 'DASHBOARD',
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        name: 'PANEL DE CONTROL',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/Dashboard.vue')
      },
      {
        path: '/circuitos',
        name: 'CIRCUITOS',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Circuito.vue')
      },
      {
        path: '/profile',
        name: 'PERFIL DE USUARIO',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/UserProfile.vue')
      },
      {
        path: '/maps',
        name: 'LOCALIZADOR',
        component: () => import(/* webpackChunkName: "demo" */ '../views/GoogleMaps.vue')
      },
      {
        path: '/tables',
        name: 'PANELES',
        component: () => import(/* webpackChunkName: "demo" */ '../views/RegularTables.vue')
      },
      {
        path: '/iconos',
        name: 'ICONOS',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Icons.vue')
      },

    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      { path: '*', component: NotFound }
    ]
  }
];

export default routes;
