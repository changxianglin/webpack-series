// import { createApp } from 'vue'
// import App from './App.vue'
// import Antd from 'ant-design-vue';
// import "ant-design-vue/dist/antd.css";

// const app = createApp(App)

// // app.use(Antd).mount('#app')
// app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'

import Antd from 'ant-design-vue';
import "ant-design-vue/dist/antd.css"

const app = createApp(App)

app.use(Antd).mount('#app')
