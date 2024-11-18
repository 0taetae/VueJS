<script setup>
import { useTodoStore } from "@/stores/todo"

const store = useTodoStore()

const props = defineProps({
    todo: Object
})

const deleteTodo = () => {
    store.removeTodo(props.todo)
}
</script>

<template>
    <div>
        <span @click="store.completTodo(todo.id)" :class="{ 'is-done': todo.isCompleted }">{{ todo.text }}</span>
        <button @click="deleteTodo">삭제</button>
    </div>
</template>

<style scoped>
.is-done {
    text-decoration: line-through;
}
</style>