<script setup>

import { useTodoStore } from "@/stores/todo";

const store = useTodoStore();

defineProps({
    todo: Object
})


</script>

<template>

    <div>
        <!-- todo의 iscompleted에 따라 class가 바뀌므로 바인딩 -->
        <span @click="store.completeTodo(todo.id)" :class="{'is-done':todo.isCompleted}">{{ todo.text  }}</span>
        <button>완료</button>
    </div>
  
</template>

<style scoped>
.is-done{
    text-decoration: line-through;
    font-weight: bold;
}
</style>
