import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import ConjeturaCollatz from './components/ConjeturaCollatz.vue';
import TablaMultiplicar from './components/TablaMultiplicar.vue';

const Routes = [
    {
        path:"/", component: HomeComponent
    },
    {
        path:"/collatz", component: ConjeturaCollatz
    },
    {
        path:"/multiplicar", component: TablaMultiplicar
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: Routes
})

export default router;