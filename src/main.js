import { createApp } from 'vue'
import Orcamento from './components/Orcamento.vue'
import App from './App.vue'

const app = createApp(App)

app.component('Orcamento', Orcamento)
app.mount('#app')

