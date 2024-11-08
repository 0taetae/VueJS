<script setup>
import TheHeader from "./components/TheHeader.vue";
import BaseMain from "./components/BaseMain.vue";
import BaseBoard from "./components/BaseBoard.vue";

import {ref} from "vue";

const view = ref("board")
</script>

<template>
    <div>
        <TheHeader/>
        <button @click="view = 'main'">main</button>
        <button @click="view = 'board'">board</button>
    </div>
    <BaseMain v-if="view === 'main'" />
    <BaseBoard v-if="view === 'board'" />
</template>

<style scoped>

</style>