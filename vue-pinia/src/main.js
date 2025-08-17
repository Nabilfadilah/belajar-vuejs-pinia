import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import Counter from './components/tugas2/Counter.vue'
import { createRouter , createWebHistory } from 'vue-router'
import Counter3 from './components/tugas3/Counter.vue'
import MultipleCounter from './components/MultipleCounter.vue'

// store management with Pinia
const pinia = createPinia()

const router = createRouter({
    routes: [
        {
            path: '/counter',
            component: Counter
        },
        {
            path: '/counter-tugas3',
            component: Counter3
        },
        {
            path: '/counter-tugas4',
            component: MultipleCounter
        },
    ],

    // untuk membuat history mode
    history: createWebHistory()
})

createApp(App).use(pinia).use(router).mount('#app')
