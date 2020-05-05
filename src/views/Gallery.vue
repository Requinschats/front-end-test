<template>
  <div>
    <v-container v-if="itemList">
      <v-row style="display: flex; flex-wrap: wrap;">
        <v-layout v-for="item in itemList" class="card_layout" pt-5>
          <v-card @mouseover="activeItem = item"
                  @mouseleave="activeItem=null"
                  width="90%">
            <v-responsive aspect-ratio="1.77777777778">
              <v-img
                v-bind:class="{'selectedImage': isItemSelected(item.id),  'unselectedImage': !isItemSelected(item.id)}"
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
                      <v-btn fab text small @click="addSelectedItem(item)">
                        <v-icon v-if="isItemSelected(item.id)">fas fa-check-circle</v-icon>
                        <v-icon v-else>far fa-check-circle</v-icon>
                      </v-btn>
                    </v-layout>
                    <v-spacer></v-spacer>
                    <v-layout justify-end>
                      <v-btn fab text small @click="removeSelectedItem(item)">
                        <v-icon v-if="!isItemSelected(item.id)">fas fa-times-circle</v-icon>
                        <v-icon v-else>far fa-times-circle</v-icon>
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
                  :color="snackbarColor">
        {{snackbarMessage}}
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
      snackbarColor: '',
      snackbarMessage: '',
      activeItem: null
    }),
    created: function () {
      this.itemList = this.$store.state.itemList;
      this.selectedItems = this.$store.state.selectedItems;
    },
    methods: {
      getItemImagePath(imageName) {
        return require('../../public/img/' + imageName);
      },
      addSelectedItem(item) {
        if (this.isItemSelected(item.id)) {
          this.snackbarColor = 'error';
          this.snackbarMessage = 'This item is already selected.';
        } else {
          this.selectedItems.push(item);
          this.snackbarColor = 'success';
          this.snackbarMessage = 'Item selected.';
        }
        this.notifyAlreadyInCampaign = true;
      },
      removeSelectedItem(item) {
        if (this.isItemSelected(item.id)) {
          this.selectedItems = this.selectedItems.filter(selectedItem => selectedItem.id !== item.id);
          this.snackbarColor = 'success';
          this.snackbarMessage = 'The item was removed from selected items';
        } else {
          this.snackbarColor = 'error';
          this.snackbarMessage = 'Item is not selected';
        }
        this.notifyAlreadyInCampaign = true;
      },
      isItemSelected(itemId) {
        return this.selectedItems.filter(activeItem => activeItem.id === itemId).length > 0;
      }
    },
    watch: {
      selectedItems() {
        this.$store.commit('setSelectedItems', this.selectedItems);
      },
    }
  }
</script>

<style>
  @media only screen and (max-width:  576px) {
    .card_layout{
     width: 90%;
      margin-left: 10%;
    }
  }
  @media only screen and (min-width:  577px) {
    .card_layout{
      width: 25%;
    }
  }
  .selectedImage {
    opacity: 0.5;
  }

  .unselectedImage {
    opacity: 1;
  }
</style>
