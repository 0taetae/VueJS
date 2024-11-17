<script setup>
import { useCounterStore } from "@/stores/counter.js"
import BComponentChild from "@/components/BComponentChild.vue"

const store = useCounterStore()
</script>

<template>
  <div>
    <h1>B Component입니다.</h1>
    <div>B Component의 store count : {{ store.count }}</div>
    <button @click="store.increment">B Component에서 count 증가</button>
    <button @click="store.number++">B Component에서 임의로 추가한 number 증가</button>
    <BComponentChild />
  </div>
</template>

<style scoped></style>
