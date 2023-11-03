import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

var app = createApp(App)

app.config.globalProperties.$filters = {
    
    tablaMultiplicar(numero1, numero2){
        return numero1 * numero2;
    },
    
    operacionTabla(numero1, numero2){
        return numero1 + " * " + numero2;
    }
}

app.use(router).mount('#app')
