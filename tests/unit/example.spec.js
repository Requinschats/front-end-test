import {createLocalVue, shallowMount} from '@vue/test-utils';
import Gallery from '../../src/views/Gallery';
import Vuex from 'vuex'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Gallery', () => {
  let store;
  let actions;
  const item1 = {
    "id": 13,
    "title": "Rome",
    "img": "city-13.jpg",
    "date": "2019-02-52 24:23:52",
    "isSelected": false
  };

  const item2 ={
      "id": 14,
      "title": "Tokyo",
      "img": "city-14.jpg",
      "date": "2019-02-52 24:23:52",
      "isSelected": false
    }

  beforeEach(() => {
    actions = {actionClick: jest.fn(), actionInput: jest.fn()};
    store = new Vuex.Store({actions});
  });

  it('isItemSelected_selectedItem_true', () => {
    const galleryWrapper = shallowMount(Gallery, {store, localVue});
    galleryWrapper.setData({selectedItems: new Array(item1)});
    expect(galleryWrapper.vm.isItemSelected(item1.id)).toBe(true);
  });
  it('isItemSelected_unselectedItem_false', () => {
    const galleryWrapper = shallowMount(Gallery, {store, localVue});
    galleryWrapper.setData({selectedItems: new Array(item1)});
    expect(galleryWrapper.vm.isItemSelected(item2.id)).toBe(false);
  });
});
