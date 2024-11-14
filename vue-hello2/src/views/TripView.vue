<script setup>
import { ref } from "vue"
import { tripAxios } from "@/util/http-commons"
import { VueSpinnerBars } from "vue3-spinners"

import VTripCard from "@/components/common/VTripCard.vue"

const axios = tripAxios()

const { VITE_SEARCH_TRIP_URL, VITE_OPEN_API_SERVICE_KEY } = import.meta.env

const isLoading = ref(false)
const attractions = ref([])

const param = ref({
  serviceKey: VITE_OPEN_API_SERVICE_KEY,
  pageNo: 1,
  numOfRows: 10,
  keyword: "",
  MobileOS: "ETC",
  MobileApp: "AppTest",
  _type: "json",
})

const searchAttraction = () => {
  axios
    .get(VITE_SEARCH_TRIP_URL, {
      params: param.value,
      onStart: () => (isLoading.value = true),    // 로딩 시작
      onFinish: () => (isLoading.value = false),  // 로딩 종료
    })
    .then(({ data }) => {
      attractions.value = data.response.body.items.item
    })
    .catch((error) => {
      console.log(error)
    })
}
</script>

<template>
  <div class="container-fluid">
    <div class="alert alert-primary text-center fw-bold display-6 mt-3" role="alert">
      관광지 목록
    </div>
    <div class="row g-3 align-items-center mb-3 justify-content-center">
      <div class="col-auto">
        <label for="attraction" class="col-form-label">관광지</label>
      </div>
      <div class="col-auto">
        <input type="text" id="attraction" class="form-control" v-model="param.keyword" />
      </div>
      <div class="col-auto">
        <button type="button" class="btn btn-secondary" @click="searchAttraction">검색</button>
      </div>
    </div>
    <div class="row mt-5" v-if="isLoading">
      <VueSpinnerBars size="50" color="deeppink" />
    </div>
    <div class="row" v-else>
      <VTripCard v-for="attraction in attractions" :key="attraction.contentid" :attraction="attraction" />
    </div>
  </div>
</template>

<style scoped></style>
