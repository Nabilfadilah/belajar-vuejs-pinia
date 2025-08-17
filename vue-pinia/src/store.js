import {defineStore} from 'pinia';
import { ref } from 'vue';

// membuat store dengan nama 'counter'
export const useCounter = defineStore('counter', () => {
    
    // mendeklarasikan state counter
    const counter = ref(0);

    // mendeklarasikan action untuk mengubah state (Tugas 3)
    function increment() {
        counter.value++;    
    }

    // mendeklarasikan action untuk mereset state (Tugas 3)
    function reset() {
        counter.value = 0;
    }
    
    return{
        counter,
        increment,
        reset
    }
})