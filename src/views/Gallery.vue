<template>
  <v-container v-if="itemList">
    <v-row style="display: flex; flex-wrap: wrap;">
      <v-layout v-for="item in itemList" style="width: 25%" pt-5>
        <v-card width="90%">
          <v-img
            :src="getItemImagePath(item.img)"
            class="white--text"
            aspect-ratio="1.77777777778"
            min-width="110%">
            <v-container style="margin-top: -14px">
              <v-row style="background: rgba(0,0,0,0.49); padding: 5px" justify="center">
                <span class="subtitle-1">{{item.title}}</span>
              </v-row>
            </v-container>
            <v-container fluid fill-height class="align-end">
              <v-row style="margin-bottom: 15%">
                <v-layout>
                  <v-btn fab>
                    <v-icon>check-circle</v-icon>
                  </v-btn>
                </v-layout>
                <v-spacer></v-spacer>
                <v-layout>
                  <v-btn fab>
                    <v-icon>times-circle</v-icon>
                  </v-btn>
                </v-layout>
              </v-row>
            </v-container>
          </v-img>
        </v-card>
      </v-layout>
    </v-row>
  </v-container>
</template>

<script>
  const ITEM_LIST_DIRECTORY_PATH = '../../public/json/item-list.json';
  export default {
    name: 'Gallery',
    data: () => ({
      itemList: null
    }),
    created: function () {
      this.updateItemList();
    },
    methods: {
      updateItemList() {
        const itemlistJson = require('../../public/json/item-list.json');
        this.itemList = itemlistJson.items;
        console.log()
      },
      getItemImagePath(imageName) {
        return require('../../public/img/' + imageName);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
