<template>
<div>
   <v-container>
       total items {{cartlist.length}}
       <v-btn @click="emptyCart">Remove aLL</v-btn>
       <table>
            <tr>
              <td>  Name</td>
               <td>  Price</td>
                <td>  Quantity</td>
            </tr>
            <tr v-for="(item,index) in cartlist" :key="item.id">
                <td> {{item.foodName}}</td>
                  <td> {{item.price}}</td>
                   <td><v-btn @click="quantity(index,'increase')">+</v-btn> {{item.quantity}} <v-btn @click="quantity(index,'reduce')">-</v-btn> </td>
                  <td ><v-btn @click="removeItem(index)">Delete</v-btn></td>
            </tr>
       </table>
       <v-btn @click="placeOrder">Place Order</v-btn>
    </v-container>
</div>
</template>

<style scoped>
.cart-body{
    background: grey;
}
</style>

<script src="../js/addToCartComponent.js"></script>