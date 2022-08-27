<template>
  <v-col class="main-card" lg="3" @mouseenter="show=true" @mouseleave="show=false">
    <v-card
  
    class=" mt-12 pt-2" 
    max-width="280"
  >

    <v-img
    class="ml-4 mr-4 mt-4 pt-4"
      height="180"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>{{itemObject.itemtype}}</v-card-title>

    <v-card-text>
     

      <div class="text-subtitle-1">
       {{itemObject.itemType}}
      </div>
      
       <v-card
      class="d-flex justify-space-between mb-3 text-center mt-2"
     
      flat
      tile
    >
     <!-- :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'" -->
      <div class="stars">
                <v-icon class="icon-star" color="white">mdi-star</v-icon>{{itemObject.stars}}
      </div>
      <h3>.</h3>
      <div>
        {{itemObject.duration}}
      </div>
      <h3>.</h3>
      <div>
       &#8377; {{itemObject.price}}
      </div>
       </v-card>
      </v-card-text>

    

    <!-- <v-card-title>Tonight's availability</v-card-title> -->

    <!-- <v-card-text>
     
      
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text> -->
 <v-divider class=""></v-divider>
 <v-card-text><div class="offer"> <v-icon class="offer-icon">mdi-brightness-percent</v-icon>{{itemObject.offer}} off  | {{itemObject.coupon}}</div></v-card-text>
    
    <div v-if="show">
       <v-divider class=""></v-divider> 
   
       <v-card-actions class="d-flex justify-center" >
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Quick View
      </v-btn>
    
    </v-card-actions>
      </div>
     
     
  </v-card>
  </v-col>
</template>
<script src="../js/productcartcomponent.js"> 

</script>
<style scoped>
.stars{
    background: darkorange;
    padding:0% 1%;
     color: white;
    width:20%;
    height: 20px;
    font-size: 15px;
}
.content-center{
  text-align: center;
  align-items: center;
}
.icon-star{
    padding-right: 5px;
    color: white;
    margin-top:-10%;
  font-size: 15px;
     
}
.offer,.offer-icon{
  color:brown;
}
.offer-icon{
  font-size: 20px;
  padding-right: 8px;
}
.main-card{
  cursor: pointer;
}
.v-sheet.v-card:not(.v-sheet--outlined) {
    box-shadow: none;
}
.mt-12.v-card.v-sheet.theme--light:hover{
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
</style>