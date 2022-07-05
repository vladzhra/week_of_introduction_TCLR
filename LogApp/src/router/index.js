import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/login.vue'
import SecureView from "../views/secure.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: {
          name: "login"
      }
    },
    {
      path: "/login",
      name: "login",
      component: LoginView
    },
    {
      path: "/secure",
      name: "secure",
      component: SecureView
    }
  ]
})

export default router