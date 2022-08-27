<template>
<v-container class="order">
   
    <v-card-title>
      Order Details
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
      :items="desserts"
      :search="search"
    ></v-data-table>
  
</v-container>
 
</template>
<style>
.order{
    margin-top: 20px;
    box-shadow: 1px 3px 9px 10px rgba(209, 201, 209, 0.82); 
    border-radius: 50px; 
/* background: #f9f9f9;
box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff; */
}


</style>

<script src="../js/orderComponent.js"/>

