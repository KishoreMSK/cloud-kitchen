<template>
<div class="loginchange">
  <v-card
    class="mx-auto"
    max-width="500"
  >
  <v-container class="card">
    <v-card-title>
     Login
  </v-card-title>

    <v-row cols="12">
    <v-col>
    <v-text-field v-model="user.uname" filled rounded solo dense
      label="Username"
      :rules="rules"
      hide-details="auto"
    >
    </v-text-field>
    </v-col>
    </v-row>
    <v-row cols="12">
    <v-col>
    <v-text-field v-model="user.upassword" filled rounded solo dense
      label="Password"
      :rules="rules"
      hide-details="auto"
    >
    </v-text-field>
    </v-col>
    </v-row><br>
    <div class="loginBtn">
     <v-row cols="12">
        <v-col lg="6" md="12" sm="12">
        <v-btn @click="userLogin()"
         color="primary"
   block
  elevation="2"
  raised
  rounded
> Login</v-btn>
</v-col>
 <v-col lg="6" md="12" sm="12">
        <v-btn @click="userReset()"
         color="primary"
   block
  elevation="2"
  raised
  rounded
>Reset</v-btn>
</v-col>
     </v-row>
     
</div>
      
    </v-container>
  </v-card>
</div>
</template>

<style scoped>
  .loginBtn{
    width: 20vw;
    margin-left: 80px;
  }
  .card{
    height: 250px;
    margin-top: 25%;
  }
  .loginchange{
    background-color: rgb(149, 144, 144);
    height: 100vh;
  }
  .mx-auto{
    border-radius: 20px;
  }
</style>

<script src="../js/loginComponent.js"></script>