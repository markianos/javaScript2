<template>
  <div>
      
      <ShoppingCartProduct v-for="item in shoppingCart" :key="item.product.id" :item="item" />
      
        <div v-if="shoppingCart.length < 1 "> <!-- visas bara om shoppingCart är mindre än 1 i sin array-->
        <div class="p-2 d-flex align-items-center justify-content-center">
          Din Kundvagn är tom. 
        </div>
        <div class="dropdown-divider"></div>
      </div>

    <div class="p-2 d-flex justify-content-between align-items-center">
      <div>
        <div class="total-price">
          Total: <span>{{ shoppingCartTotal }}:-</span>
        </div>
          <small class="text-muted">incl. VAT</small>
      </div>
      <button class="btn btn-primary" @click.stop="">Proceed to checkout</button>
    </div>



    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ShoppingCartProduct from './ShoppingCartProduct'
export default {
  name: 'ShoppingCart',
  components: {
    ShoppingCartProduct
  },
  computed: {
    ...mapGetters(['shoppingCart', 'shoppingCartTotal']) // hämtar vår shoppingCart & shoppingCartTotal som vi skapade i cart.js
  }
}
</script>

<style>

</style>