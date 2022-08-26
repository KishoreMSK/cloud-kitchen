import Vuex from 'vuex';
import itemsStore from './items.store';
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
modules:{
  itemsStore
}
});
