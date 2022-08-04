import { createApp } from 'vue';
import './assets/styles/style.css';
import App from './App.vue';
import router from './assets/plugins/router.js';

import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/es'

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

createApp(App)
.use(router)
.use(Quasar, { plugins: {}, lang: quasarLang,})
.mount('#app');