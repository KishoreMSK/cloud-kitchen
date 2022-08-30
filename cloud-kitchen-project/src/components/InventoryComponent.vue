<template>
<div> 
<v-container class="order" >
   <v-btn absolute right  style="margin-right:10%;margin-top:3%;margin-bottom:2%" @click="dialog=true" color="primary">
    Add product
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
<template v-slot:[`item.url`]="{ item }">
  <img width="100" height="100" :src="item.url" alt="hjh" srcset="">
</template>
<template v-slot:[`item.Actions`]="{ item }">
         <!-- <v-icon
        small
        @click="dialog2=true"
      >
        mdi-pencil
      </v-icon> -->
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    </v-data-table>
  
</v-container>

 <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="900"
    >
      <v-card>
        <v-card-title class="text-h5">
         Add Products
        </v-card-title>
        <v-card-text>
          <v-row>
              <v-col cols="12" lg="4" md="12" sm="12">
  <v-text-field
      label="Item Name"
      v-model="product.foodName"
     
    ></v-text-field>
  </v-col>
   <v-col cols="12" lg="4" md="12" sm="12">
  <v-select
    :items="['Non Vegetarian', 'Vegetarian']"
       v-model="product.category"
    label="Category"
  ></v-select>
  </v-col>
  <v-col cols="12" lg="4" md="12" sm="12">
  <v-text-field
      label="Item Type"
        v-model="product.itemType"
    ></v-text-field>
    
  </v-col>
   <v-col cols="12" lg="4" md="12" sm="12">
  <v-text-field
      label="Price"
        v-model="product.price"
    ></v-text-field>
  </v-col>
   
  <v-col cols="12" lg="4" md="12" sm="12">
    <v-text-field
       v-model="product.cuisine"
      label="Cuisine"
     
    ></v-text-field>
    </v-col>
     <v-col cols="12" lg="4" md="12" sm="12">
     <v-select
        v-model="product.rating"
    :items="[1,2,3,4,5]"
    label="Rating"
  ></v-select>
    </v-col>
   
    
      <v-col cols="12" lg="4" md="12" sm="12">
    <v-text-field
      label="Duration"
         v-model="product.duration"
     
    ></v-text-field>
    </v-col>
      <v-col cols="12" lg="4" md="12" sm="12">
    <v-text-field
      label="Offer"
         v-model="product.offer"
     
    ></v-text-field>
    </v-col>
    <v-col cols="12" lg="4" md="12" sm="12">
    <v-text-field
      label="Coupon"
        v-model="product.coupon"
    ></v-text-field>
    </v-col>
    <v-col cols="12" lg="6" md="12" sm="12">
    <v-text-field
      label="Image"
         v-model="product.image"
     
    ></v-text-field>
    </v-col>
     <v-col cols="12" lg="6" md="12" sm="12">
    <v-text-field
      label="Stock count"
         v-model="product.stockCount"
     
    ></v-text-field>
    </v-col>
      <v-col cols="12" lg="12" md="12" sm="12">
         <v-textarea  solo dense filled
          name="input-7-4"
          label="Description"
        v-model="product.description"
        ></v-textarea>
    </v-col>
  </v-row>
        </v-card-text> 
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="danger"
            text
            @click="dialog = false"
          >
            cancel
          </v-btn>
          <v-btn
            color="success"
            text
            @click="saveInventory"
          >
           save
          </v-btn>
        </v-card-actions>
      </v-card>
 
     
    </v-dialog>
    <v-dialog
      v-model="dialog2"
      persistent
      max-width="900"
    >
    <EditProductComponent />
    </v-dialog>
  </v-row>
</div>
</template>

<style>
     .order{
    margin-top: 20px;
    box-shadow: 1px 3px 9px 10px rgba(209, 201, 209, 0.82); 
    border-radius: 50px; 
    height: max-content;
    }
    .inventory-top{
      margin-top:5%;
    }
</style>
<script src="../js/inventoryComponent.js"/>