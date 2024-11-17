<script setup>
import { ref } from 'vue';
import { useTodoStore } from "@/stores/todo";
const store = useTodoStore();
const todoText = ref("")
const formEl = ref(null)

const createTodo = () => {
    console.log(todoText)
    store.addTodo(todoText.value)
    //todoText.value = "";
    formEl.value.reset();
}
</script>

<template>

    <div>
        <!--<input type="text" v-model="todoText" @keyup.enter="createTodo">
        <button @click="createTodo">할일추가</button>-->

        <!--회원가입과 같이 여러개를 보내야할 때-->
        <!--submit이 발생하면 action은 가버림->"submit.prevent" -->
        <!--<form @submit.prevent="createTodo">
            <input type="text" v-model="todoText">
            <button type="submit">할일추가</button>
        </form>-->
        <!--form에 직접 접근할 때-->
        <form @submit.prevent="createTodo" ref="formEl">
            <input type="text" v-model="todoText">
            <button type="submit">할일추가</button>
        </form>
    </div>
  
</template>

<style scoped>

</style>
