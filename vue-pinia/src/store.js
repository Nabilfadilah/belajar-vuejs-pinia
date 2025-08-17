import {defineStore} from 'pinia';
import { ref } from 'vue';

// membuat store dengan nama 'counter'
export const useCounter = defineStore('counter', () => {
    
    // mendeklarasikan state counter
    const counter = ref(0);
    
    return{
        counter
    }
})