<template>
  <v-app id="inspire">
    <v-app-bar
      app
      id="app_bar"
      fixed
      prominent
      dark>
      <v-spacer></v-spacer>
      <v-container justify="center" style="width: 230px;">
        <v-row>
          <v-btn text to="/">
            Home
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn text to="/gallery">
            Gallery
          </v-btn>
        </v-row>
        <v-row style="margin-top: 1vh" justify="center">
          <span style="font-size: 15px; text-align: center">There are {{getItemListCount}} items (19 selected)</span>
        </v-row>
      </v-container>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content id="body">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

  export default {
    name: 'App',
    data: () => ({
      itemList: null,
    }),
    created() {
      this.$vuetify.theme.dark = true;
      this.updateItemList();
    },
    methods: {
      updateItemList() {
        const itemlistJson = require('../public/json/item-list.json');
        this.$store.commit('setItemList', itemlistJson.items);
      },
    },
    computed: {
      getItemListCount() {
        return this.$store.state.itemList.length;
      }
    }

  };
</script>

<style>
  body {
    font-family: 'Open Sans', sans-serif !important;
  }

  #app_bar {
    background: linear-gradient(45deg, #c94b4b, #4b134f);
  }
</style>
