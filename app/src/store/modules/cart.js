

export default {
    state: {
        cart: []
    },
    getters: {
        shoppingCart: state => state.cart,
        cartItemCount: state => {
            let counter = 0
            state.cart.forEach(item => {
                counter += item.quantity
            });
            return counter
        },
        shoppingCartTotal: state => {
            let total = 0
            if(state.cart.length !== 0) {
                state.cart.forEach(item =>{
                    total+= item.product.price * item.quantity
                })
        }
        return total
    }
    },
    mutations: {
        ADD_TO_CART: (state, { product, quantity }) => {
            let exists = state.cart.find(item => item.product._id === product._id) // deklarerar variabeln exits som letar i vår cart om product med samma id finns
            if(exists) { // OM exists så...
                exists.quantity += quantity // lägger till det vi skickar in på redan befintlig quantity
                return
            }

            state.cart.push({ product, quantity }) // om inte produkt redan finns så skicka in product och antal
        },
        DELETE_PRODUCT: (state, product) => {
            state.cart.splice(state.cart.indexOf(product), 1)
        },
        ADD_ONE_PRODUCT: (state, { product, quantity }) => {
            let exists = state.cart.find((item) => item.product._id === product._id);
            if (exists) {
              exists.quantity += quantity;
              return;
            }
            state.cart.push({ product, quantity });
          },
        REMOVE_ONE_PRODUCT: (state, product) => {
            let exists = state.cart.find((item) => item.product._id === product._id);
            exists.quantity -= 1;
            return;
        },
    },
    actions: {
        addProductToCart: ({commit}, { product, quantity }) => {  // skapar en funktion för att hämta produkt till kundkorg, där vi commitar product och antal
            commit('ADD_TO_CART', { product, quantity }) // vår commit med product och antal
        },
        deleteProduct: ({commit}, product) => {
            commit('DELETE_PRODUCT', product)
        },
        addOneProduct: ({ commit }, { product, quantity }) => {
            let item = { product, quantity: Number(quantity)};
            commit('ADD_ONE_PRODUCT', item)
        }
        
    }
}