import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import DetallesSeries from './components/DetallesSeries.vue';

const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/detalles/:id", component: DetallesSeries
    },
    
    
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;