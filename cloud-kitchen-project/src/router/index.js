import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import OrderComponent from '../components/OrderComponent.vue';
import AdminComponent from '../components/AdminComponent.vue';
import InventoryComponent from '../components/InventoryComponent.vue';
import ProductComponent from'../components/ProductComponent';
Vue.use(VueRouter);

const routes = [
    { path: '/', component: HomeComponent },
  { path: '/home', component: HomeComponent },
 {path:'/admin/',component:AdminComponent,
children:[
 {
  path:"order",
  component: OrderComponent
 },
 {
  path:"inventory",
  component:InventoryComponent

 },
]},
{path:'/user',component:HomeComponent,
children:[
 {
  path:"/",
  component: ProductComponent

 },
 {
  path:"inventory",
  component:InventoryComponent

 },
]},

  // { path: '/admin', component:AdminComponent },
  // { path: '/admin/order', component: OrderComponent}
 
 ]
 const routerlist = new VueRouter({
  routes:routes,
  mode:"history",
  base:process.env.BASE_URL
 })
 export default routerlist;



