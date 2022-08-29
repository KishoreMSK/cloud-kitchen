<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Cloud-Kitchen</v-toolbar-title>
     <div class="d-flex-buton">
       <v-btn  @click="movePage('/user/')" class="deep-purple accent-4 btn-class">Product</v-btn>
    <v-btn   @click="movePage('/cart')" class="deep-purple accent-4  btn-class">Cart</v-btn>
     
      
     </div>
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
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <!-- <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list> -->
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script src="../js/UserHeader.js">
</script>
<style scoped>
.links{
margin-left:20px;
text-decoration: none;
color: white;
}
.d-flex-buton{
 
  margin-left: 8%;
}

</style>
