<template>
    <div>
        <!-- details {{ id }}  lägger till id på vår sida i html template-->
        <div class="container my-5 py-5 z-d-1">
            
            <section class="text-center">
                <h3 class="mb-5 font-weight-bold">Product Details</h3>
                
                <div class="row">
                
                    <div class="col-lg-6">
                        <img :src="product.image" alt="" class="img-fluid">
                    </div>
                
                    <div class="col-lg-6 text-center text-lg-start">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, corporis?</p>
                    </div>

                </div>

            </section>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex' // importerar från vuex (skapades automatiskt)
export default {
    name: 'ProductDetails',
    props: ['id'], // skickar med vårt id
    methods: { // kör funktionen när productDetails laddas
        ...mapActions (['getOneProduct']) //  hämtar getOneProduct
    },
    computed: {
        ...mapGetters(['product']) // hämtar funktionen
    },
    created() {
        this.getOneProduct(this.id) // vi skickar in vårt id
    }
}
</script> 

<style>

</style>