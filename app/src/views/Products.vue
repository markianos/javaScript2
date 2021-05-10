<template>
    <ProductCardDeck />
</template>

<script>
import ProductCardDeck from '../components/products/ProductCardDeck'
import { mapActions } from 'vuex' // importerar mapActions från Vuex
export default {
    components: {
        ProductCardDeck
    },
    methods: {
        ...mapActions(['getProducts'])
    },
    created() { 
        this.getProducts() // funktionen getProducts // 1:08 lektion 12
    }
}
</script>

<style>

</style>
