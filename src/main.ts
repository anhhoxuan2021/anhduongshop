import './assets/main.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/mycss.css'
import './assets/mynav.css'
import './assets/_root.css'
import './assets/cart.css'
import './assets/libraryImage.css'
import './assets/admin.css'
import './assets/media.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store' 
import CKEditor from '@ckeditor/ckeditor5-vue';
import Default from './layouts/LayoutDefault.vue' 
import AdminLayout from './layoutAdmin/AdminLayout.vue'
import LayoutLogin from './layouts/LayoutLogin.vue' 

// import $ from "jquery";
// import jQuery from "jquery";

// Import thư viện Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'



import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fab, fas, far)

const app = createApp(App)

app.config.productionTip = false

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('default-layout', Default) 
app.component('admin-layout', AdminLayout)
app.component('login-layout', LayoutLogin)
app.use(store)
app.use(router)
app.use( CKEditor )

app.mount('#app')
