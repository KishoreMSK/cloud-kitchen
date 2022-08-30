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
      type="password"
      hide-details="auto"
    >
    </v-text-field>
    </v-col>
    </v-row>
     <v-row cols="12">
    <v-col>
    <v-select
    :items="['admin', 'customer']"
       v-model="user.userType" filled rounded solo dense
    label="UserType"
  ></v-select>
    </v-col>
    </v-row>
      <div class="account"><router-link  to="/register">Don't have account ?</router-link></div>
     <br>
<div class="">
     <v-row cols="12">
   
        <v-col lg="6" md="12" sm="12">
        <v-btn @click="userReset()"
         color="primary"
   block
  elevation="2"
  raised
  rounded
>Reset</v-btn>
</v-col>
 <v-col lg="6" md="12" sm="12">
        <v-btn @click="userLogin()"
         color="primary"
   block
  elevation="2"
  raised
  rounded
>Login</v-btn>
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
    height: max-content;
    margin-top: 25%;
  }
  .loginchange{
    /* background-color: rgb(149, 144, 144); */
    height: 100%;
    /* width: 100%; */
    /* background-image: url("https://img.wallpapersafari.com/desktop/1024/576/91/87/NLIx25.jpg"); */
    /* background-size: auto; */
  }
  .mx-auto{
    border-radius: 20px;
  }
  .account{
    text-align: center;
  }
</style>

<script src="../js/loginComponent.js"></script>