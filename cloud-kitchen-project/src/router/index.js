import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import OrderComponent from '../components/OrderComponent.vue';
import AdminComponent from '../components/AdminComponent.vue';
import InventoryComponent from '../components/InventoryComponent.vue';
import ProductComponent from'../components/ProductComponent';
import RegisterComponent from '../components/RegisterComponent';
import LoginComponent from '../components/LoginComponent';
import addToCartComponent from '../components/AddToCartComponent';
import ProductDescriptionComponent from '../components/ProductDescriptionComponent.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: LoginComponent },
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
    path:":id",
    component: ProductDescriptionComponent
  
   },
]},
{
  path:"/register",
  component:RegisterComponent
 },
 {
  path:"/login",
  component:LoginComponent
 },
 {
  path:"/cart",
  component:addToCartComponent
 }
  // { path: '/admin', component:AdminComponent },
  // { path: '/admin/order', component: OrderComponent}
 
 ]
 const routerlist = new VueRouter({
  routes:routes,
  mode:"history",
  base:process.env.BASE_URL
 })
 export default routerlist;



