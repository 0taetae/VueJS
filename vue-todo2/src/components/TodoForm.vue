<script setup>
import { ref } from "vue"
import { useTodoStore } from "@/stores/todo"

const store = useTodoStore()

const todoText = ref("")
const formEl = ref(null) // form의 ref와 같은 이름으로 변수명을 만들어야 하며 null은 의미 없음.
const createTodo = () => {
    console.log(todoText.value)
    store.addTodo(todoText.value)

    // todoText.value = ""
    // 초기화 할 값이 많을경우 불편함 >> form의 reset 활용
    formEl.value.reset()
}
</script>

<template>
    <div>
        <!-- <input type="text" v-model="todoText" @keyup.enter="addTodo">
        <button @click="addTodo">할일추가</button> -->
        <form @submit.prevent="createTodo" ref="formEl">
            <input type="text" v-model="todoText">
            <button type="submit">할일추가</button>
        </form>
    </div>
</template>

<style scoped></style>