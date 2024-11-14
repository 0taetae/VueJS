<script setup>
import IconMain from "@/components/icons/IconMain.vue";
import MainChild from "@/components/main/MainChild.vue";

import { ref } from "vue";

const myName = ref("김싸피");

// 동적으로 사용
const myMessage = ref("싸피 방문을 환영합니다.");
// 이벤트 핸들러 함수 추가

const callBack = (msg) => {
  console.log("자식이 이벤트 발생!!!", msg);
  myMessage.value = msg;
};

const modifyName = (cname) => {
  myName.value = cname;
};

const receiveArgs = (...msg) => {
  console.log(msg);
  myMessage.value = msg.join("");
};

</script>

<template>
  <div class="main">
    <h1>
      <IconMain />메인 화면입니다.
    </h1>

    <!-- 정적 -> 동적 -->
    <!--<MainChild :my-name="myName" my-msg="싸피 방문을 환영합니다."/>-->
    <MainChild 
    :my-name="myName" 
    :my-msg="myMessage" 
    @emit-event="callBack" 
    @change-name="modifyName"
    @send-args="receiveArgs"/>


  </div>
</template>

<style scoped></style>
