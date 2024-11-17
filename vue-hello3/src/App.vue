<script setup>
import { ref } from "vue"
import { useCounterStore } from "@/stores/counter"

import AComponenet from "@/components/AComponent.vue"
import BComponenet from "@/components/BComponent.vue"
import { storeToRefs } from "pinia";

const store = useCounterStore()  // { count, doubleCount, increment } 객체 

console.log("1 : " + store.count)

const newNumber = store.count + 100

// store는 reactive 객체 >> store에서 destructuring 불가능.
const { count } = store
// 구조분해 하고싶을 때
//const {count} = storeToRefs(store)
console.log("2 : " + count)

// 새로운 상태값 추가
const num = ref(100)
store.number = num
</script>

<template>
  <div>
    <h1>State Management Library</h1>
    <div>store count (state) : {{ store.count }}</div>
    <div>new number : {{ newNumber }}</div>
    <div>destructuring count : {{ count }}</div>
    <div>임의로 추가한 store number : {{ store.number }}</div>
    <div>double counter (getters) : {{ store.doubleCount }}</div>
    <button @click="store.increment">App에서 count 증가</button>
    <AComponenet />
    <BComponenet />
  </div>
</template>

<style scoped></style>
