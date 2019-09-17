import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import nedb from './nedb/index'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(require('vue-electron'))
Vue.use(Element)

import '@/styles/reset.css'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    nedb,
    render: h => h(App),
}).$mount('#app')
