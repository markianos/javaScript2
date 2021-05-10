import Vue from 'vue'  // här importerar vi vue
import Vuex from 'vuex' // här importerar vi Vuex
import products from './modules/products' // här importerar vi våra produkter från modules/products

Vue.use(Vuex) // här deklarerar vi att vi använder oss av Vuex

export default new Vuex.Store({ // vår store från Vuex
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {    // här är de moduler som vi exporterar till vår vuex.store
    products
  }
})
