<script setup>
import { useCounterStore } from "@/stores/counter.js"

const store = useCounterStore()
</script>

<template>
  <div>
    <h1>B Component Child입니다.</h1>
    <div>B Component Child의 store count : {{ store.count }}</div>
    <button @click="store.increment">B Component Child에서 count 증가</button>
  </div>
</template>

<style scoped></style>
