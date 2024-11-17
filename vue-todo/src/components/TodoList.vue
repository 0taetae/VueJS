<script setup>
import { useTodoStore } from "@/stores/todo";
import TodoListItem from "@/components/TodoListItem.vue";

const store = useTodoStore();
</script>

<template>

    <div>
        <TodoListItem v-for="(todo) in store.todos" :key="todo.id" :todo="todo"/>
    </div>
  
</template>

<style scoped>

</style>
