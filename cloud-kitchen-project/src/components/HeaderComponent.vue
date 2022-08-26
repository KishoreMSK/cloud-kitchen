<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>


      <v-toolbar-title>Swiggy</v-toolbar-title>
  <v-btn icon>
       <p>Order</p>
      </v-btn>

     
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
           <p>logout</p>
          </v-btn>
        </template>

        
         
    
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script src="../js/headerComponent.js"/>

