<script setup>
import { ref } from 'vue';
import { useTodoList } from '../../useTodoList.js';
import { useRouter } from 'vue-router';

const {id} = defineProps(["id"]);
const todoList = useTodoList();
const todo = todoList.getTodo(Number(id));
const router = useRouter();

const name = ref(todo.name);
// const name = ref(todoList.getTodo(Number(id)).name);

function update() {
    todoList.updateTodo(Number(id), name.value);
    router.push('/todolist');
}

</script>

<template>
  <div>
    <h1>Edit Todo</h1>
    <input v-model="name" type="text" placeholder="Enter todo name" />
    <button @click="update">Update Todo</button>
  </div>
</template>

<style scoped>

</style>