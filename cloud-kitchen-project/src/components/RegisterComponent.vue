<template>
<div class="change">
  <v-card
    class="mx-auto"
    max-width="500"
  >
  <v-container class="register-card">
    <v-card-title>
     Register
  </v-card-title>
  <v-container>
    <v-row cols="12">
    <v-col lg="6" md="12" sm="12">
    <v-text-field filled rounded solo dense
      label="Username"
      v-model="user.username"
      :rules="rules"
      hide-details="auto"
    >
    </v-text-field>
        </v-col>
    <v-col lg="6" md="12" sm="12">
    <v-text-field rounded filled solo dense
      label="Contact no"
      :rules="rulesno"
       v-model="user.mobno"
      hide-details="auto"
    >
    </v-text-field>
        </v-col>
    </v-row>

    <v-row cols="12">
    <v-col lg="6" md="12" sm="12">
    <v-text-field rounded filled solo dense
      label="Password"
       v-model="user.password"
       type="password"
      :rules="rules"
      hide-details="auto"
    >
    </v-text-field>
  
        </v-col>
    <v-col lg="6" md="12" sm="12">
    <v-text-field rounded solo dense filled
      label="Confirm Password"
      :rules="rules"
       type="password"
        v-model="user.cpassword"
      hide-details="auto"
    >
    </v-text-field>

        </v-col>
    </v-row>
    <v-row>
        <v-col lg="12">
            <v-text-field rounded solo dense filled
      label="Email id"
      :rules="emailrules"
      type="email"
       v-model="user.email"
      hide-details="auto"
    >
    </v-text-field>
        </v-col>

    </v-row>
     <v-row>
       <v-col lg="12" md="6" >
        <v-textarea rounded solo dense filled
          name="input-7-4"
          label="Address"
           v-model="user.address"
        ></v-textarea>
        </v-col>
    </v-row>
      <span class="errortext">{{this.error}}</span>
  </v-container>

<div class="reg-button">
     <v-row cols="12">
        <v-col lg="6" md="12" sm="12">
        <v-btn @click="register()"
         color="primary"
   block
  elevation="2"
  raised
  rounded
>Register</v-btn>
</v-col>
 <v-col lg="6" md="12" sm="12">
        <v-btn @click="goLogin()"
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
.register-card{
 margin-top:15%;

}
.errortext{color: red;
text-align: center;}
 .mx-auto{
    margin-left: 300px;
    border-radius: 30px;
 }
 .buttons{
    margin-left:5rem;
 }
 .change{
    background-color:whitesmoke;
    height: 100vh;
    border-radius: 30px;
 }
 .reg-button{
     margin-left: 30px;
     margin-right: 30px;
 }
</style>

<script src="../js/registerComponent.js"></script>