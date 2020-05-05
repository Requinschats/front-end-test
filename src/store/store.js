import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    itemList: null,
    selectedItems: []
  },
  mutations: {
    setItemList(state, itemList) {
      state.itemList = itemList;
    },
    setSelectedItems(state, selectedItems) {
      state.selectedItems = selectedItems;
    }
  },
});
