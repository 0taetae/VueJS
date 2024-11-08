<script setup>
// 1. 문자열 배열
defineProps(["myName", "myMsg"]);
</script>

<template>
    <div>
        <h2>{{myName}}님 {{myMsg}}</h2>
    </div>
</template>

<style scoped>

</style>