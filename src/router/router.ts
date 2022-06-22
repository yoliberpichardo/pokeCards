import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import('../components/HomePokemon.vue'),
  },
  {
    path: '/AddFavorite',
    name: 'AddFavorite',
    component: () => import('../components/AddFavorite.vue')
  },
  ];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;