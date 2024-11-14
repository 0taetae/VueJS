import "./assets/main.css"

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

// bootstrap import -> 전역에서 사용 가능 
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App)

app.use(router)

app.mount("#app")
