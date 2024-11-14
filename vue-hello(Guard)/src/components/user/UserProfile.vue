<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const userId = ref(route.params.id)
console.log(userId.value + "님 프로필 얻으러 가용")
</script>

<template>
    <div>
        <h1>User Profile</h1>
        <h3>{{ $route.params.id }}님 프로필이 보여요</h3>
    </div>
</template>

<style scoped></style>