<!-- Tugas 3: Action -->
<!-- Sekarang kita akan ubah aksi untuk melakukan increment di komponen Counter menjadi Action di Store
Termasuk kita akan ubah aksi untuk melakukan reset di komponen Counter menjadi Action di Store -->

<script setup>

import { useCounter } from '../../store.js';

// panggil store counter
const counter = useCounter();

// subscribe untuk mendengarkan perubahan state
counter.$subscribe((mutation, state) => {
    console.log('State changed:', mutation);
    console.log('State changed:', state);
});

// subscribe, onAction untuk mendengarkan action yang dipanggil
counter.$onAction((action) => {
    console.log(action);
})

// fungsi untuk log nilai doubled
// ini akan dipanggil setiap kali nilai doubled berubah
function logDoubled() {
  console.log(counter.doubled);
}

</script>

<template>
  <div>
    <h1>Tugas 3</h1>
    <h2>Counter: {{ counter.counter }}</h2>
    <button @click="counter.increment">Increment</button>
    <div class="reset-button">
        <button @click="counter.reset">Reset</button>
    </div>
    <button @click="logDoubled">Log Double</button>
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

button {
    padding: 10px 20px;
    margin-top: 5px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

</style>