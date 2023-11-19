import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import UpdateAlumno from "./components/UpdateAlumno.vue";
import AlumnosComponent from "./components/AlumnosComponent.vue"
import createAlumno from "./components/createAlumnno.vue"
import loginComponent from "./components/loginComponent.vue";

const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/login", component: loginComponent
    },
    {
        path: "/update/:id", component: UpdateAlumno
    },
    {
        path: "/alumnos", component: AlumnosComponent
    },
    {
        path: "/create", component: createAlumno
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;