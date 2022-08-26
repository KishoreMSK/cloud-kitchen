<template>
<v-container class="order">
   
    <v-card-title>
      Nutrition
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
}

</style>
<script src="../js/orderComponent.js"/>