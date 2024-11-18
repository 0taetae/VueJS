<script setup>
import { useTodoStore } from "@/stores/todo"

import TodoListItem from "@/components/TodoListItem.vue"

const store = useTodoStore()
console.log(store.todos)
</script>

<template>
    <div>
        <TodoListItem v-for="(todo) in store.todos" :key="todo.id" :todo="todo" />
    </div>
</template>

<style scoped></style>