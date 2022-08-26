import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: HomeComponent },
  { path: '/home', component: HomeComponent },
 
 
 ]
 const routerlist = new VueRouter({
  routes:routes,
  mode:"history",
  base:process.env.BASE_URL
 })
 export default routerlist;



