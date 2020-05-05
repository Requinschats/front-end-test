<template>
  <div>
    <v-container v-if="itemList">
      <v-row style="display: flex; flex-wrap: wrap;">
        <v-layout v-for="item in itemList" style="width: 25%" pt-5>
          <v-card width="90%">
            <v-responsive aspect-ratio="1.77777777778">
              <v-img
                :src="getItemImagePath(item.img)"
                class="white--text"
                aspect-ratio="1.77777777778">
                <v-container style="margin-top: -14px">
                  <v-row style="background: rgba(0,0,0,0.49); padding: 5px" justify="center">
                    <span class="subtitle-1">{{item.title}}</span>
                  </v-row>
                </v-container>
                <v-container fluid fill-height class="align-end">
                  <v-row style="padding: 10px; margin-bottom: 25px">
                    <v-layout>
                      <v-btn fab text small @click="addActiveItem(item)">
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
            </v-responsive>
          </v-card>
        </v-layout>
      </v-row>

      <v-snackbar v-model="notifyAlreadyInCampaign" :timeout="NOTIFICATION_DURATION_MILLIS"
                  color="error">
        This item is already selected
        <v-btn color="white" text @click="snackbar = false">
          Close
        </v-btn>
      </v-snackbar>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Gallery',
    data: () => ({
      itemList: null,
      selectedItems: null,
      notifyAlreadyInCampaign: false,
      NOTIFICATION_DURATION_MILLIS: 2000,
    }),
    created: function () {
      this.itemList = this.$store.state.itemList;
      this.selectedItems = this.$store.state.selectedItems;
    },
    methods: {
      getItemImagePath(imageName) {
        return require('../../public/img/' + imageName);
      },
      addActiveItem(item) {
        console.log(this.selectedItems);
        this.selectedItems.filter(activeItem => activeItem.id === item.id).length > 0 ?
          this.notifyAlreadyInCampaign = true :
          this.selectedItems.push(item);
      }
    },
    watch: {
      activeItems() {
        this.$store.commit('setSelectedItems', this.selectedItems);
      }
    }
  }
</script>

<style lang="scss" scoped></style>
