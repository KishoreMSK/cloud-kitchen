import Vuex from 'vuex';
import itemsStore from './items.store';
import cartStore from './cart.store';
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
modules:{
  itemsStore,
  cartStore
}
});
