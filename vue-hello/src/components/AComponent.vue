<script setup>
import { useCounterStore } from "@/stores/counter.js"

const store = useCounterStore()
</script>

<template>
  <div>
    <h1>A Component입니다.</h1>
    <div>A Component의 store count : {{ store.count }}</div>
    <button @click="store.increment">AComponent에서 count 증가</button>
  </div>
</template>

<style scoped></style>
