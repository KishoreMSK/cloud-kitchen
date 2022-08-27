<template>
    <div>
      <v-container-fluid>
      <v-row class="black-bg  pb-5">
        <v-col class="" lg="3" md="3" sm="12"   style="margin-top:5%">
        
            <v-img
    class="ml-4 mr-4 mt-4 pt-4 description-image"
      height="200"
   
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
        </v-col>
        <v-col lg="5" md="5" sm="12">
         <div class="text-about">

     <h1>Southern Chinese Restaurant - Since 1969</h1>
        
      <h5>Chinese</h5>
      <h5>Anna Nagar East, Annanagar East</h5>

      </div>
        </v-col>
        <v-col lg=
        '3' sm="3">
      <div class="offer-tab" lg="5" md="6">
      
        <fieldset class="offer-tab-box">
         <legend class="title">offer</legend>
           <ul >
          
          <li>
  <v-icon class="offerIcon">mdi-brightness-percent</v-icon>50% off up to ₹120 | Use code TRYNEW
          </li>
          <li>
            <v-icon class="offerIcon">mdi-brightness-percent</v-icon> 50% off up to ₹100 + Flat ₹30 cashback with Paytm | Use
          </li>
        </ul>
        </fieldset>
      
      
       
       

      </div>
        </v-col>
      </v-row><v-row>
         <v-container>
         <ProductItemCartComponent />
          </v-container>
      </v-row>
      </v-container-fluid>
     
    </div>
</template>
<script src="../js/ProductDescriptionComponent.js"></script>
<style scoped>
.black-bg{
  background-color:#282c3f;
}
.text-about{
  color: white;
  margin-top:16%;
  align-items: center;
  margin-left: 3%;
  text-align: left;
}
.offer-tab{
  color: white;

  margin-top: 20%;}
  li{
    text-decoration: none;
    list-style-type: none;
    color: white;
  }
  .offerIcon{
    color: white;
    padding-right:2% ;
  }
  .offer-tab-box{
    border:1px solid white;
    padding: 5%;
  }
  .description-image img{
    margin-top:10%;
  }
  .title{
    padding:3%;
  }
</style>