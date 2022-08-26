import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import AdminComponent from '../components/AdminComponent.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: HomeComponent },
  { path: '/home', component: HomeComponent },
  { path: '/admin', component: AdminComponent },
 
 ]
 const routerlist = new VueRouter({
  routes:routes,
  mode:"history",
  base:process.env.BASE_URL
 })
 export default routerlist;



