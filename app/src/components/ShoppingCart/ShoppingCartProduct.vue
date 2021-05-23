<template>
  <div class="cart-item">
      <div class="p-2 d-flex justify-content-between align-items-center">

          <div class="d-flex align-items-center">
              <img :src="item.product.image" alt="" class="img-fluid p-3 image-width">
              <div>
                  <div><strong>{{ item.product.name }}</strong></div>
                  <div><small>{{ item.quantity }} x {{ item.product.price }} </small></div>
              </div>
          </div>

        <div>

            <div class="btn-group btn-group-sm me-2" role="group">
                <button class="btn btn-dark" @click.stop="item.quantity > 1 ? item.quantity-- : item.quantity">-</button> <!-- lägger till @click.stop som stoppar click eventets propagation -->               
                <button class="btn btn-dark" @click.stop="addOneProduct({ product: item.product, quantity })">+</button>
            </div>
            <button class="btn btn-danger btn-sm" @click.stop="deleteProduct"><i class="far fa-trash-alt"></i></button>            
        </div>


      </div>
      <div class="dropdown-divider"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    props: ['item'],
    data() {
    return {
      quantity: 1,
    };
  },
        methods: {
            ...mapActions ([ 'deleteProduct', 'addOneProduct' ])
            
        }
    }
</script>

<style>
.image-width {
    width: 90px;
}
</style>