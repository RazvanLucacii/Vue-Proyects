import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/HomeComponent.vue'
import PadreSuma from './components/PadreSuma.vue'
import PadreDeporte from './components/PadreDeporte.vue'
import ComicsComponent from './components/ComicsComponent.vue'
import SelectMultiple from './components/SeleccionMultiple.vue'
import NumeroDoble from './components/NumeroDoble.vue'
import TablaMultiplicar from './components/TablaMultiplicarRouter.vue'

const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/deporte", component: PadreDeporte
    },
    {
        path: "/suma", component: PadreSuma
    },    
    {
        path: "/comic", component: ComicsComponent
    },    
    {
        path: "/select", component: SelectMultiple
    },    
    {
        path: "/numeroDoble/:numero?", component: NumeroDoble
    },
    {
        path: "/multiplicar/:numero", component: TablaMultiplicar
    },   
]
//creamos una constante para el historial y el array de rutas
//dicha constante sera la que utilizamos dentro de main.js
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;