<script setup>
import { ref } from "vue"
const props = defineProps({
    apt: Object,
})

const image = ref("/src/assets/no-image.png")
</script>

<template>
    <div class="card m-2 pt-2" style="width: 18rem">
        <img :src="image" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{{ apt.aptNm }}</h5>
            <p class="card-text">주소 : {{ apt.roadNm }}</p>
            <p>층 : {{ apt.floor }}층</p>
            <p>전용면적 : {{ apt.excluUseAr }}평</p>
            <p>가격 : {{ apt.dealAmount }}(만원)</p>
            <a href="#" class="btn btn-primary">Go Homepage</a>
        </div>
    </div>
</template>

<style scoped></style>
