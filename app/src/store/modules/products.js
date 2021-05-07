// se lektion 12 från 01h för genomgång

import axios from 'axios' // importerar axios från axios

export default {
    state: {
        products: [] // våra produkter i en array
    },
    getters: {
        products: state => state.products
    },
    mutations: {
        SET_PRODUCTS: (state, products) => {
            state.products = products
        }
    },
    actions: {
        getProducts: async ({commit}) => {
            const res = await axios.get('http://localhost:3000/products')
            commit('SET_PRODUCTS', res.data)
        }
    }
}