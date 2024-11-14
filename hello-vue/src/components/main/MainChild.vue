<script setup>
import MainChildItem from "@/components/main/MainChildItem.vue";

import { ref } from 'vue';

// 1. 문자열 배열
const props = defineProps(["myName", "myMsg"]);
//console.log(props) // 객체를 받아옴
console.log(props.myName);

// 리스트에서 서버에서 목록 얻어오고
// 테이블의 tr를 리스트 아이템으로 만든 후 목록을 item에 전달
// => 게시판 
const messages = ref([
    { no: 1, msg: "안녕 하세요" },
    { no: 2, msg: "취업 축하해요" },
    { no: 3, msg: "대박 나세요." },
]);

//const name = props.myName;

const emit = defineEmits(["changeName", "sendArgs"]);

const modifyName = (cname) => {
    emit("changeName",cname)
};

const sendArgs = () => {
    emit("sendArgs", "오늘은 ", "날씨가 ", "좋습니다.")
};

</script>

<template>
    <div class ="child">
        <h2>{{myName}}님 {{myMsg}}</h2>
        <div>
            <button @click="$emit('emitEvent','취업을 축하합니다.')">부모메시지 변경</button>
            <button @click="sendArgs">여러개의 인자를 넘길 경우</button>
        </div>
        <MainChildItem 
            v-for="msg in messages" 
            :key="msg.no" 
            :my-name="myName" 
            :message-data="msg"
            @change-name="modifyName"/>
    </div>
</template>

<style scoped>
.child{
    background-color: pink;
}
</style>