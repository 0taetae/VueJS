<script setup>
import {ref} from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute();

const articleNo = ref(route.params.no)
</script>

<template>
    <div>
        <h1>User Post</h1>
        <h2>{{ articleNo }}번 글 정보 출력</h2>
    </div>
</template>

<style scoped>

</style>