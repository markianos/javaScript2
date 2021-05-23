<template>
<div>
    <h1 class="text-center mt-5">Always on top...</h1>
    <h5 class="text-center mx-auto w-50">At DigiWare we always provide you with the latest and newest of products when it comes to computers, audio, tech and gadgets. Here you will see a collection of some great offers and what is trending right now</h5>
    <ProductCardDeck /> <!-- här lägger vi in vår component ProductCardDeck i vår html-template-->
</div>
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
