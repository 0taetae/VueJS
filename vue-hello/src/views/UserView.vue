<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView,useRoute ,useRouter} from 'vue-router'

const route = useRoute();
const router = useRouter();

const userId = route.params.id;
// server에서 userId에 해당하는 정보 얻기
console.log(userId)
const pgno = route.query.pgno;
console.log(pgno)

const goHome = () => {
    router.push({ name: 'home'});
}

</script>

<template>
    <div>
        <nav>
            <RouterLink :to="{name: 'user-profile'}">프로필</RouterLink>
            <RouterLink :to="{name: 'user-posts', params: {no:100}}">포스트</RouterLink>
        </nav>
        <h1>User 화면입니다.</h1>
        <h2>{{ $route.params.id }}님 페이지 </h2>
        <h2>{{ userId }}</h2>
        <button @click="goHome">홈으로</button>
        <RouterView/>
    </div>
</template>

<style scoped>
</style>