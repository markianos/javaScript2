<template>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">  <!-- här kommer mina produkter läggar i denna layout  33:58 lekt. 12 -->
   <ProductCard v-for="product in products" :key="product.id" :product="product"  /> <!-- lägger till ProductCard som komponent inuti vår HTML-template-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex' // importerar mapGetters
import ProductCard from './productCard' // importerar ProductCard
export default {
  name: 'ProductCardDeck', // exporterar ProductCardDeck med component ProductCard
  components: {
    ProductCard
  },
  computed: {
    ...mapGetters(['products']) 
  }
}
</script>

<style>

</style>