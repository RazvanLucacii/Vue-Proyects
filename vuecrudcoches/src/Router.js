import { createRouter, createWebHistory } from "vue-router";
import CocheComponent from './components/CochesComponent.vue'
import CreateCoche from './components/CreateCoches.vue';
import DetallesCoches from './components/DetallesCoches.vue';
import UpdateCoche from './components/UpdateCoches.vue';
import DeleteCoche from './components/DeleteCoches.vue';
import HomeComponent from './components/HomeComponent.vue';

const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/detalles/:id", component: DetallesCoches
    },
    {
        path: "/update/:id", component: UpdateCoche
    },
    {
        path: "/coches", component: CocheComponent
    },
    {
        path: "/create", component: CreateCoche
    },
    {
        path: "/delete/:id", component: DeleteCoche
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;