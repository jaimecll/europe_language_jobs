import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
// import { createRouter, createWebHashHistory, } from 'vue-router';
// import Maquetacion from './components/Maquetacion.vue';
// import Form from './components/FormPerros.vue';
import { router } from './router/routes'






// const routes = [
//     {
//         path:'/',name:'maquetacion', component: Maquetacion,
//     },
//     {
//         path:'/form',name:'form', component: Form,
//     }
// ]

// const router = createRouter({
//     history: createWebHashHistory(),
//     routes,
// })


createApp(App).use(Quasar, quasarUserOptions, router).mount('#app')
