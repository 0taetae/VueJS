<script setup>
import IconMain from "@/components/icons/IconMain.vue";
import MainChild from "@/components/icons/MainChild.vue";

import { ref } from "vue";

const myName = ref("김싸피")
</script>

<template>
  <div class="main">
    <h1>
      <IconMain />메인 화면입니다.
    </h1>
    <MainChild my-msg="싸피 방문을 환영합니다."/>
  </div>
</template>

<style scoped></style>
