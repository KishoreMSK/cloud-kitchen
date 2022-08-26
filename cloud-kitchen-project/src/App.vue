<template>
  <v-app>
    
    <v-main>
      <HeaderComponent/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue"
export default {
  name: 'App',
  components:{
    HeaderComponent
  }
};
</script>
