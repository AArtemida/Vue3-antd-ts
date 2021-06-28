import { createStore, useStore as baseUseStore, createLogger, Store } from 'vuex'
import modules from './modules'


const store = createStore({
  // plugins: [createPersistedState({ storage: window.sessionStorage })],
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules
})

export default store