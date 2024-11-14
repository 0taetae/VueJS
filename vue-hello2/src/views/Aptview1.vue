<script setup>
import { ref } from "vue"
import axios from "axios"
import { VueSpinnerBars } from "vue3-spinners"

import VAptCard from "@/components/common/VAptCard.vue"

const { VITE_SEARCH_APT_URL, VITE_OPEN_API_SERVICE_KEY } = import.meta.env

const apts = ref([])

const param = ref({
    serviceKey: VITE_OPEN_API_SERVICE_KEY,
    pageNo: 1,
    numOfRows: 10,
    DEAL_YMD: 202410,
    LAWD_CD: 11110,
})


const isLoading = ref(false)

// 요청 인터셉터
axios.interceptors.request.use(
    function (config) {
        // console.log("로딩이미지!!!", config)
        isLoading.value = true
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

// 응답 인터셉터
axios.interceptors.response.use(
    function (response) {
        isLoading.value = false
        return response
    },
    function (error) {
        return Promise.reject(error)
    }
)

const searchApt = () => {
    axios
        .get(VITE_SEARCH_APT_URL, { params: param.value })
        .then(({ data }) => {
            console.log(data)
            apts.value = data.response.body.items.item
        })
        .catch((error) => {
            console.log(error)
        })
}
</script>

<template>
    <div class="container-fluid">
        <div class="alert alert-primary text-center fw-bold display-6 mt-3" role="alert">
            아파트 실거래 목록
        </div>
        <div class="row g-3 align-items-center mb-3 justify-content-center">
            <div class="col-auto">
                <label for="apt" class="col-form-label">거래동</label>
            </div>
            <div class="col-auto">
                <input type="text" id="apt" class="form-control" v-model="param.LAWD_CD" value="11110" />
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-secondary" @click="searchApt">검색</button>
            </div>
        </div>
        <div class="row mt-5" v-if="isLoading">
            <VueSpinnerBars size="50" color="deeppink" />
        </div>
        <div class="row" v-else>
            <VAptCard v-for="apt in apts" :key="apt.aptSeq" :apt="apt" />
        </div>
    </div>
</template>

<style scoped></style>
