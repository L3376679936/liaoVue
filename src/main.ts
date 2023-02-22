import { App, createApp } from 'vue'
import './style.css'
import App1 from './App.vue'
import router from './router'

// import Particles from 'particles.vue3'



// import { initRouter } from './router'

const app = createApp(App1)
app.use(router)
app.mount('#app')
// app.use(Particles)
// initRouter(app)


// createApp(App).use(router).mount('#app')
