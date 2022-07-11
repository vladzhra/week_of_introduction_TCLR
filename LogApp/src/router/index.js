import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/login.vue'
import SecureView from "../views/secure.vue"

const routes = [
  {
    path: '/',
    redirect: {
      name: "login"
    }
  },
  {
    path: '/#/',
    redirect: {
      name: "login"
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: "/secure",
    name: "secure",
    component: SecureView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
