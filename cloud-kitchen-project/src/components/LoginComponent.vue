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
        <v-btn @click="loginUser()"
         color="primary"
   block
  elevation="2"
  raised
  rounded
> Login</v-btn>
     </v-row>
</div>
      
    </v-container>
  </v-card>
</div>
</template>

<style>
  .loginBtn{
    width: 20vw;
    margin-left: 80px;
  }
  .card{
    height: 250px;
    margin-top: 20px;
  }
  .loginchange{
    background-color: rgb(149, 144, 144);
    height: 100vh;
  }
  .mx-auto{
    border-radius: 200px;
  }
</style>

<script src="../js/loginComponent.js"></script>