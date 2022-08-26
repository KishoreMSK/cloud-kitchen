<template>
 <v-app>
   <HeaderComponent/>
    <v-main>
     
    </v-main>
  </v-app>
</template>
<script>
import HeaderComponent from './HeaderComponent.vue';

export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { HeaderComponent }
};
</script>