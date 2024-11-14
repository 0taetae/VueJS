<script setup>

import { ref } from 'vue'

const props = defineProps({
    myName: {
        type: String,
        //Required: true  // 디버깅
        default: "김싸피",
    },
    messageData: {
        type: Object,
    },
});  // 객체로 
console.log(props.messageData);

const emit = defineEmits(["changeName"]);

const name = ref("");
const modifyName = () => {
    emit("changeName", name.value);
};
</script>

<template>
    <div class="child-item">
        <h3>{{ `${messageData.no},${myName}님 ${messageData.msg}` }}</h3>
        <div>
            이름변경 : <input type="text" v-model="name"/>
            <button @click=" modifyName">변경</button>
        </div>
    </div>
</template>

<style scoped>
.child-item{
    background-color: cyan;
}
</style>