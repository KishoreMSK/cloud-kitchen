<template>
<div class="change">
  <v-card
    class="mx-auto"
    max-width="500"
  >
  <v-container class="card">
    <v-card-title>
     Register
  </v-card-title>
  <v-container>
    <v-row cols="12">
    <v-col lg="6" md="12" sm="12">
    <v-text-field filled rounded solo dense
      label="Username"
      :rules="rules"
      hide-details="auto"
    >
    </v-text-field>
        </v-col>
    <v-col lg="6" md="12" sm="12">
    <v-text-field rounded filled solo dense
      label="Contact no"
      :rules="rules"
      hide-details="auto"
    >
    </v-text-field>
        </v-col>
    </v-row>

    <v-row cols="12">
    <v-col lg="6" md="12" sm="12">
    <v-text-field rounded filled solo dense
      label="Password"
      :rules="rules"
      hide-details="auto"
    >
    </v-text-field>
        </v-col>
    <v-col lg="6" md="12" sm="12">
    <v-text-field rounded solo dense filled
      label="Confirm Password"
      :rules="rules"
      hide-details="auto"
    >
    </v-text-field>
        </v-col>
    </v-row>
    <v-row>
        <v-col lg="12">
            <v-text-field rounded solo dense filled
      label="Email id"
      :rules="rules"
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
        ></v-textarea>
        </v-col>
    </v-row>
  </v-container>

    <v-card-actions class="buttons">
     <v-btn
  color="primary"
  elevation="8"
  rounded
  text
> Register</v-btn>
     
    </v-card-actions>
    </v-container>
  </v-card>
</div>
</template>

<style>
 .mx-auto{
    margin-left: 300px;
 }
 .buttons{
    margin-left:5rem;
 }
 .change{
    background-color:whitesmoke;
    height: 100vh;
 }
</style>

<script src="../js/registerComponent.js"></script>