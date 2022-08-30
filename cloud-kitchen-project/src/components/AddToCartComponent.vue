<template>
<div>
    <v-card class="card2"  >
   <v-container>

       <h2>Total Items:    {{cartlist.length}}</h2> 
       <v-btn v-if="!orderStatus" absolute top right color="error" @click="emptyCart">Remove All</v-btn>

       <table class="cart-table" style="margin-top:5%">
            <tr class="data data-row">
              <td class="data">  Name</td>
               <td class="data">  Price</td>
                <td class="data">  Quantity</td>
            </tr>
            <tr class="data data-content"  v-for="(item,index) in cartlist" :key="item.id">
                <td > {{item.foodName}}</td>
                  <td > {{item.price}}</td>
                   <td><v-btn v-if="!orderStatus" @click="quantity(index,'reduce')">- </v-btn> <v-btn>{{item.quantity}} </v-btn>
                    <v-btn v-if="!orderStatus" @click="quantity(index,'increase')">+ </v-btn> 
                  <v-icon color="error" v-if="!orderStatus" @click="removeItem(index)">mdi-delete</v-icon></td>
            </tr>
       </table>

       <v-btn class="cart-action" v-if="!orderStatus && cartlist.length!=0" @click="placeOrder">Place Order</v-btn>
       <v-btn class="cart-action" v-if="orderStatus && cartlist.length!=0" @click="cancelOrder">Cancel Order</v-btn>

    </v-container>
</v-card>
</div>
</template>

<style scoped>
.cart-body{
    background: grey;
}
.card2{
   height: max-content;
   width: 80%;
   margin-left: 10%;
   margin-top: 6%;
}
.data{
    padding-left: 25px;
    /* margin-top: 15px */
}
.cart-table{
    width: 100%;
}
.cart-action{
    margin-top:3% ;
}
.data-row{
    background: rgb(220, 220, 220);
    text-align: center;
    border: none;
    padding-top:2%;
    padding-bottom: 2%;
}
.data-content{
    margin-top: 3%;
    text-align: center;
}
</style>
<script src="../js/addToCartComponent.js"></script>