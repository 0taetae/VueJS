<script setup>
import { ref } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

const userId = ref(route.params.id)
const articleNo = ref(route.query.no)
</script>

<template>
    <div>
        <h1>User Posts</h1>
        <h3>{{ userId }}님 {{ articleNo }}번 글!!!</h3>
    </div>
</template>

<style scoped></style>