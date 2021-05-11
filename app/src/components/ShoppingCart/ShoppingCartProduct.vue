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
                <button class="btn btn-dark" @click.stop="">-</button> <!-- lägger till @click.stop som stoppar click eventets propagation -->               
                <button class="btn btn-dark" @click.stop="">+</button>
            </div>
            <button class="btn btn-danger btn-sm" @click.stop=""><i class="far fa-trash-alt"></i></button>            
        </div>


      </div>
      <div class="dropdown-divider"></div>
  </div>
</template>

<script>
export default {
    props: ['item']
}
</script>

<style>
.image-width {
    width: 90px;
}
</style>