<script setup>
import { onMounted, ref } from 'vue'
import axios from "axios"

import { VueSpinnerAudio } from "vue3-spinners";

// mount 하는 순간에 화면에 뿌리기
onMounted(() => {
    getCatImage();
}) 

const catList = ref([])

// post로 바꿀때, axios.post(`url`,{id: 'aaa',pwd:'222'}) 
const getCatImage = () => {
    axios.get(`https://api.thecatapi.com/v1/images/search`)
        .then(response => appendCat(response.data[0]))
        .catch(error => console.log(error))
        .finally(()=>console.log("반드시 실행"))
}

const appendCat = (cat) => {
    catList.value.push(cat)
}

const isLoading = ref(false)

// Add a request interceptor
// config : getCatImage에서 then을 하기 전에 config의 값을 가지고 처리해줌
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    
    isLoading.value = true;
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    isLoading.value = false;
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
</script>

<template>
  <div>
    <h1>냥냥펀치</h1>
    <button class="btn btn-primary" @click="getCatImage">고양이 얻기</button>

    <!-- 얻어오는 동안에만--> 
    <div v-show="isLoading"><VueSpinnerAudio size="50" color="red"/></div>
    
    <div v-show="!isLoading">
    <img
        v-for="(cat) in catList"
        :key="cat.id"
        :src="cat.url"
        :width="cat.width"
        :height="cat.height"
        alt=""
    /></div>
  </div>
</template>

<style scop>
</style>
