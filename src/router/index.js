import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "loginPage",
    component: () => import('../components/page/LoginPage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;