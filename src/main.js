import './assets/style.css'
import 'boxicons'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import NabvarComponent from './components/NavbarComponent.vue'

const app = createApp(App)

// component
app
  .component('NavbarComponent', NabvarComponent)


app.use(router)

app.mount('#app')
