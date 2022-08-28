<template>
  <v-container class="order">
   <v-btn absolute right  style="margin-right:10%;margin-top:3%;margin-bottom:2%" @click="dialog=true" color="primary">
    Add 
   </v-btn>
    <v-card-title class="inventory-top">
      Inventory Details
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="products"
      :search="search"
    >
   
<!-- <template v-slot:[`item.Availablity`]="{ item }">
  <v-btn v-if
</template> -->
<template v-slot:[`item.Actions`]="{ item }">
         <v-icon
        small
        @click="dialog2=true"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    </v-data-table>
  
</v-container>
</template>
<script>
import {createProduct,getProduct,deleteProduct} from "../service/product.service"
export default {
    name:"EditProductComponent",
    data () {
      return {
        product:{
            foodName:"",
            category:"",
            itemType:"",
            price:"",
            cuisine:"",
            rating:"",
            duration:"",
            offer:"",
            coupon:"",
            stockCount:null,
            description:"",
            image:""
        },
        search: '',
        name:"InventoryComponent",
        dialog:false,
        dialog2:false,
       
         rules: [
                value => !!value || 'Required.',
                value => (value && value.length >= 3) || 'Min 3 characters',
              ],
        headers: [
         
          { text: 'Product Name', value: 'foodName' },
          { text: 'Item type', value: 'itemType' },
          { text: 'Category', value: 'category' },
          { text: 'cuisine', value: 'cuisine' },
          { text: 'price', value: 'price' },
          { text: 'description', value: 'description' },
          { text: 'rating', value: 'rating' },
          { text: 'duration', value: 'duration' },
          { text: 'offer', value: 'offer' },
          { text: 'coupon', value: 'coupon' },
          { text: 'url', value: 'url' },
          { text: 'Availablity', value: 'Availablity' },
          { text: 'Actions', value: 'Actions' },
        ],
     products:[],
      }
    },
   mounted()
    {
      this.getProductsList()
     
    },
    methods:{
      getProductsList()
      {
        getProduct({
          success : (response) => {
            this.products=response.data
           
          },
          error : (e) => {
            console.log(e)
            
          },
      })
  
      },
      deleteItem(item)
      {
        deleteProduct({
          success : (response) => {
            
            console.log(response)
              this.getProductsList()
          },
          error : (e) => {
            console.log(e)
             alert("error")
          },
          object:item.foodId
      })

      },
      saveInventory()
      {
        
         console.log(this.product)
         createProduct({
          success : (response) => {
            
            console.log(response)
             this.dialog=false
              this.getProductsList()
          },
          error : (e) => {
            console.log(e)
             alert("error")
          },
          object:this.product
      })
      }
    },
    components: { 
        
    }
  }
</script>