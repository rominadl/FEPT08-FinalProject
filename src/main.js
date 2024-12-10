import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'
import { createPinia } from 'pinia'

 const pinia = createPinia()





createApp(App).use (router).use(pinia).mount('#app')


























// Importa el archivo CSS de Leaflet
// import 'leaflet/dist/leaflet.css';
// Crea la aplicación y monta en el div con id="app"

// createApp(App).mount('#app'); 