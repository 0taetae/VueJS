<script setup>
import { ref } from "vue"
import { aptAxios } from "@/util/http-commons"
import { VueSpinnerBars } from "vue3-spinners"

import VAptCard from "@/components/common/VAptCard.vue"

const axios = aptAxios()

const { VITE_SEARCH_APT_URL, VITE_OPEN_API_SERVICE_KEY } = import.meta.env

const isLoading = ref(false)
const apts = ref([])

const param = ref({
    serviceKey: VITE_OPEN_API_SERVICE_KEY,
    pageNo: 1,
    numOfRows: 10,
    DEAL_YMD: 202410,
    LAWD_CD: 11110,
})

const searchApt = () => {
    axios
        .get(VITE_SEARCH_APT_URL, {
            params: param.value,
            onStart: () => (isLoading.value = true),    // 로딩 시작
            onFinish: () => (isLoading.value = false),  // 로딩 종료
        })
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
