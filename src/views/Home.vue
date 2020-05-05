<template>
  <v-container fluid fill-height class="align-center">
    <v-row justify="center">
      <v-container class="align-center" style="margin-top: -5%">
        <v-row justify="center">
          <span class="title">Olivier Fradette-Roy</span>
        </v-row>
        <v-row justify="center" class="pt-5">
          <v-btn large rounded outlined to="/gallery" class="animated fadeInRight">
            Visit the gallery
            <v-icon style="margin-left: 10px">fas fa-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'Home',
    components: {},
  }
</script>
