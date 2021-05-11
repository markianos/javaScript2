// se lektion 12 från 01h för genomgång

import axios from 'axios' // importerar axios från axios

export default {  // exporterar ett default objekt som innehåller ett state, getters, mutationer och actions (vuex)
    state: {
        products: [], // våra produkter i en tom array
        product: null
    },
    getters: {
        products: state => state.products, // här hämtar vi våra products state genom att returnera state.products
        product: state => state.product
    },
    mutations: {
        SET_PRODUCTS: (state, products) => { // vår SET_PRODUCTS som actions commitar
            state.products = products // vi skickar tillbaka vår array i state 
        },
        SET_PRODUCT: (state, product) => { // får till gång till vår state och en product
            state.product = product
        },
        CLEANUP: state => {  // kör vår cleanup som återställer till null
            state.product = null 
        }
    },
    actions: {          // här hämtar vi våra produkter genom en async när komponenten laddas
        getProducts: async ({commit}) => {  // skapar en get products funktion som är async med möjlighet till en commit // 1:05 lektion 12
            const res = await axios.get('http://localhost:3000/products') // vi sparar vårt respons som en get med axios mot vår endpoint
            commit('SET_PRODUCTS', res.data) // vi skapar en commit  
        },
        getOneProduct: async ({commit}, id) => { // skapar en "get one product" function som är async // 1:22 lektion 12 
            const res = await axios.get('http://localhost:3000/products/' + id) // vi sparar vår respons som en get mot våra producter + id för att välja specifik produkt
            commit('SET_PRODUCT', res.data) // När vi fått vårt respons gör vi en commit till SET_PRODUCT och skickar med vår res.data som är ett objekt med en produkt
        },
        cleanup: ({commit}) => { // vi skapar en cleanup funktion som commitar CLEANUP
            commit('CLEANUP')
        }
    }
} 