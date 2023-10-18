import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

const app = createApp(App)
app.use(VXETable)
app.mount('#app')