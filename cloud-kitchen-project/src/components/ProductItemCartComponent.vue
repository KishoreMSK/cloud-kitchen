<template>
  
   <div>
   
   <v-container>
    <h5> {{filtereditemList.length}} ITEMS</h5>
    <v-row>
        <v-col cols="12" lg="8" sm="12" md="12">
            <div v-for="item in  filtereditemList" :key="item.id">
                <v-sheet class="mt-6 pa-5 card-item" elevation="2">
                     <div class="text-content">
                        <h3>{{item.itemname}}</h3> <p class="price">&#8377;{{item.price}}</p>
                        <p class="description">{{item.description}}</p>
                        </div>
                    <div class="image-content">
       <v-img
   
     class="imgItem"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
    <div class="addToCart"> <v-btn color="primary" class="button" dense  small >Add to cart</v-btn></div>
    
                    </div>
                
                </v-sheet>
            </div>
        </v-col>
        <v-col cols="12" lg="4" sm="12" md="12">
        </v-col>
    </v-row>
   </v-container>
    
   </div>
   
     
   
</template>
<script src="../js/ProductItemCartComponent.js">

</script>
<style scoped>

.card-item{
    display: flex;
}
.text-content{
    flex:60%;
}
.image-content{
    flex: 40%;
    display: flex;
    flex-direction:column ;
   
}

.image-content.v-image__image, .image-content.v-image__placeholder {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 55%;
    border-radius: 20px;
    height: 55%;
}
p{
    font-weight: 400;
}
.price{
    color:brown;
    font-weight: 700;
    margin-top: 2%;
}
.addToCart{
    display: flex;
    justify-content: center;
    margin-top:4%;
   
}
.addToCart.button{
     width:100px;
     
}
</style>
