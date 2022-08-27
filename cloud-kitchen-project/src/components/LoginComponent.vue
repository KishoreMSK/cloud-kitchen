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
    <v-text-field filled rounded solo dense
      label="Username"
      :rules="rules"
      hide-details="auto"
    >
    </v-text-field>
    </v-col>
    </v-row>
    <v-row cols="12">
    <v-col>
    <v-text-field filled rounded solo dense
      label="Password"
      :rules="rules"
      hide-details="auto"
    >
    </v-text-field>
    </v-col>
    </v-row>



  
      <v-btn
  color="success"
  dense small
> Login</v-btn>
   
    </v-container>
  </v-card>
</div>
</template>

<script src="../js/loginComponent.js"></script>