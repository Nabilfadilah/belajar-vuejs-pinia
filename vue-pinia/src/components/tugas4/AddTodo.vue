<!-- Tugas 4 -->
<!-- Sekarang kita akan membuat TodoList Management yang memiliki multi halaman
Kita akan manage halaman menggunakan Vue Router
Kita akan manage data TodoList nya menggunakan Vue Pinia -->

<script setup>
import { ref } from 'vue';
import { useTodoList } from '../../useTodoList.js';
import { useRouter } from 'vue-router';

const name = ref('');
const todoList = useTodoList(); 
const router = useRouter();

function add() {
    todoList.addTodo(name.value);
    router.push('/todolist');
}

</script>

<template>
  <div>
    <h1>Add Todo</h1>
    <input v-model="name" placeholder="Enter todo name" />
    <button @click="add">Add Todo</button>
  </div>
</template>

<style scoped>

</style>