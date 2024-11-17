<script setup>
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";
import { useTodoStore } from "./stores/todo";
const store = useTodoStore();
</script>

<template>

    <div>
        <h1>오늘의 할일!!!</h1>
        <h3>할일 : {{ store.totalTodoCount }}</h3>
        <h3>완료한 일 : </h3>
        <h3>남은 일 : </h3>
        <TodoForm/>
        <TodoList/>
    </div>
  
</template>

<style scoped>

</style>
