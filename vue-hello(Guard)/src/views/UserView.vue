<script setup>
import { ref } from 'vue'
import { useRoute, useRouter, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

const route = useRoute()
const router = useRouter()

const userId = ref(route.params.id)

const goHome = () => {
    // router.push({ name: 'home' })
    router.replace({ name: 'home' })
}

const routeUpdate = () => {
    router.push({ name: 'user', params: { id: 'kimssafy' } })
}

// onBeforeRouteLeave((to, from) => {
//     const answer = window.confirm("정말 페이지 이동?")
//     if (answer === false) {
//         return false
//     }
// })

// userId의 값 변경 확인!!!
// onBeforeRouteUpdate((to, from) => {
//     console.log(to)
//     userId.value = to.params.id
// })
</script>

<template>
    <div>
        <div>
            <RouterLink :to="{ name: 'user-profile' }">UserProfile</RouterLink>
            <RouterLink :to="{ name: 'user-posts', query: { no: 100 } }">UserPosts</RouterLink>
        </div>
        <h1>User View</h1>
        <h2>{{ $route.params.id }}`s User Page</h2>
        <h2>{{ userId }}`s User Page</h2>
        <button @click="goHome">홈으로!!!</button>
        <button @click="routeUpdate">kimssafy 유저 홈으로</button>
        <RouterView />
    </div>
</template>

<style scoped></style>