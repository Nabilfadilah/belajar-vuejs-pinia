<!-- Tugas 2: Counter Component -->
<!-- Kita akan buat State counter didalam Store useCounter
Kita akan buat komponen Counter
Lalu kita akan akan buat route /counter untuk menampilkan komponen Counter
Di komponen Counter, kita akan gunakan State yang ada di Store useCounter -->


<script setup>

import { useCounter } from '../../store.js';

// panggil store counter
const counter = useCounter();

function handleClick() {
    // panggil action increment
    // untuk menambah nilai counter
    counter.counter++;
}

// megubah state
function handleReset() {
    // panggil action reset
    counter.$patch({
        counter: 0
    });
}

// subscribe untuk mendengarkan perubahan state
counter.$subscribe((mutation, state) => {
    console.log('State changed:', mutation);
    console.log('State changed:', state);
});

</script>

<template>
  <div>
    <h2>Counter: {{ counter.counter }}</h2>
    <button @click="handleClick">Increment</button>
    <div class="reset-button">
        <button @click="handleReset">Reset</button>
    </div>
  </div>
</template>

<style scoped>
.reset-button {
    margin-top: 10px;
    display: flex;
    justify-content: center;    
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

</style>