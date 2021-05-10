<template>
    <ProductCardDeck /> <!-- här lägger vi in vår component ProductCardDeck i vår html-template-->
</template>

<script>
import ProductCardDeck from '../components/products/ProductCardDeck' // importerar vår component
import { mapActions } from 'vuex' // importerar mapActions från Vuex
export default {
    components: { // definierar vår component
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
