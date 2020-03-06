import Vue from 'vue';
import App from './App.vue'
import VueRouter from 'vue-router';
import registration_preview from "./components/registrationPreview";
import employeeDetails from "./components/Details_display.vue";
import store from './store/store'
Vue.use(VueRouter);


const routes = [
  {
    name:'register-preview', path: '/register-preview', component: registration_preview, props: true
  },
  {
    name:'table', path: '/table', component: employeeDetails, props: true
  }
];

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
