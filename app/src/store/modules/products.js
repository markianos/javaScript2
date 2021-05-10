// se lektion 12 från 01h för genomgång

import axios from 'axios' // importerar axios från axios

export default {  // exporterar ett default objekt som innehåller ett state, getters, mutationer och actions (vuex)
    state: {
        products: [] // våra produkter i en tom array
    },
    getters: {
        products: state => state.products // här hämtar vi våra products state genom att returnera state.products
    },
    mutations: {
        SET_PRODUCTS: (state, products) => { // vår SET_PRODUCTS som actions commitar
            state.products = products // vi skickar tillbaka vår array i state 
        }
    },
    actions: {          // här hämtar vi våra produkter genom en async när komponenten laddas
        getProducts: async ({commit}) => {  // skapar en get products funktion som är async med möjlighet till en commit // 1:05 lektion 12
            const res = await axios.get('http://localhost:3000/products') // vi sparar vårt respons som en get med axios mot vår endpoint
            commit('SET_PRODUCTS', res.data) // vi skapar en commit  
        }
    }
}