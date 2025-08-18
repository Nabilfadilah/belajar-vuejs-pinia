<script setup>
import { useTodoList } from '../../useTodoList.js';

const todoList = useTodoList();

</script>

<template>
    <div>
        <h1>List Todo</h1>
        <router-link to="/todolist/add">Add Todo</router-link>
        <table class="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="todo in todoList.todos" :key="todo.id">
                    <td>{{ todo.id }}</td>
                    <td>{{ todo.name }}</td>
                    <td>
                        <router-link :to="{name: 'todo-edit', params: {id: todo.id}}">Edit</router-link>
                        <button @click="todoList.removeTodo(todo.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.table {
    width: 100%;
    border-collapse: collapse;
}

thead th,
tbody td {  
    border: 1px solid #ddd;
    padding: 8px;
}

tr {
    background-color: saddlebrown;
    text-align: left;
    transition: background-color 0.2s;
}

</style>