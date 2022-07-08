import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { loadFonts } from './plugins/webfontloader'

const app = createApp(App)
  .use(vuetify)
  .mount('#app')

app.use(router)

app.mount('#app')

loadFonts()
