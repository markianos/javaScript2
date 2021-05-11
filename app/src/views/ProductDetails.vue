<template>
    <div>
        <!-- details {{ id }}  lägger till id på vår sida i html template-->
        <div v-if="product" class="container my-5 py-5"> <!-- en v-if för "product" som förhindrar att det skrivs ut och blir felmeddelanden från cleanup när null redan finns 1:46 lektion 12 -->
            
            <section class="text-center">
                <h3 class="mb-5 font-weight-bold">Product Details</h3>
                
                <div class="row">
                
                    <div class="col-lg-6">
                        <img :src="product.image" alt="" class="img-fluid mt-5">
                    </div>
                
                    <div class="col-lg-6 text-center text-lg-start">
                        <h2 class="text-left font-weight-bold mb-5">{{ product.name }}</h2>

                        <div class="mb-5">
                            <h5 class="mb-3">Description</h5>
                            <p>{{ product.desc }}</p>
                        </div>
                        
                        <div class="d-flex justify-content-between align-items-center">
                            <h3 class="text-danger">{{ product.price }}:-</h3>
                            <button class=" btn btn-primary btn-sm">Add to Cart</button>
                        </div>
                        
                    </div>

                </div>

            </section>

        </div>

        <div v-else> <!-- om product inte lästs in så visas loading-->
            <h3>Loading...</h3>
             
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex' // importerar från vuex (skapades automatiskt)
export default {
    name: 'ProductDetails',
    props: ['id'], // skickar med vårt id
    methods: { // kör funktionen när productDetails laddas
        ...mapActions (['getOneProduct', 'cleanup']) //  hämtar getOneProduct och cleanup funktioner
    },
    computed: {
        ...mapGetters(['product']) // hämtar funktionen
    },
    created() {
        this.getOneProduct(this.id) // vi skickar in vårt id
    },
    destroyed() {
        this.cleanup() // kör vår cleanup och ställer tillbaka till null
    }
}
</script> 

<style>

</style>