<template>
  <v-container v-if="itemList">
    <v-row style="display: flex; flex-wrap: wrap;">
      <v-layout v-for="item in itemList" style="width: 25%" pt-5>
        <v-card width="90%" style="margin-right: 15%">
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
              <v-row style="padding: 10px; margin-bottom: 25px">
                <v-layout>
                  <v-btn fab text small>
                    <v-icon>fas fa-check-circle</v-icon>
                  </v-btn>
                </v-layout>
                <v-spacer></v-spacer>
                <v-layout justify-end>
                  <v-btn fab text small>
                    <v-icon>fas fa-times-circle</v-icon>
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
  export default {
    name: 'Gallery',
    data: () => ({
      itemList: null
    }),
    created: function () {
      this.itemList = this.$store.state.itemList
    },
    methods: {
      getItemImagePath(imageName) {
        return require('../../public/img/' + imageName);
      },
    }
  }
</script>

<style lang="scss" scoped></style>
