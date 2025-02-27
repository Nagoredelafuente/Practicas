import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import NewAccountView from "@/views/NewAccountView.vue";
import MensajeRegistroView from "@/views/MensajeRegistroView.vue";
import ReservaView from "@/views/ReservaView.vue";
import RegisterView from "@/views/RegisterView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/newaccount",
      name: "newaccount",
      component: NewAccountView,
    },
    {
      path: "/registro",
      name: "registro",
      component: RegisterView,
    },
    {
      path: "/mensaje",
      name: "mensaje",
      component: MensajeRegistroView,
    },
    {
      path: "/reserva",
      name: "reserva",
      component: ReservaView,
    },
  ],
});
export default router;
