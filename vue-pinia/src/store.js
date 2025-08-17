import {defineStore} from 'pinia';
import { computed, ref } from 'vue';

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

    // getter untuk mengakses nilai counte
    // mendeklarasikan computed property untuk menghitung nilai ganda dari counter
    const doubled = computed(() => {
        console.log("computed value called");
        // mengembalikan nilai ganda dari counter
        return counter.value * 2;
    });
    
    return{
        counter,
        increment,
        reset,
        doubled
    }
})