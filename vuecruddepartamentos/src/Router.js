import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue'
import DepartamentosComponent from './components/DepartamentosComponent.vue'
import CreateDepartamento from './components/CreateDepartamentos.vue';
import DetallesDepartamento from './components/DetallesDepartamentos.vue';
import UpdateDepartamento from './components/UpdateDepartamento.vue';

const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/detalles/:id/:nombre/:localidad", component: DetallesDepartamento
    },
    {
        path: "/update/:id", component: UpdateDepartamento
    },
    {
        path: "/departamentos", component: DepartamentosComponent
    },
    {
        path: "/create", component: CreateDepartamento
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;