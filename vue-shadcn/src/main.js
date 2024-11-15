import './assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'

import { useKakao } from 'vue3-kakao-maps/@utils';

useKakao('2bd4f83bc7309d38194a5a7f96c884e0');

createApp(App).mount('#app')
