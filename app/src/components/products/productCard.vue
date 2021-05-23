<template>
  <div class="col">
      <div class="card p-3">
          <img :src="product.image" alt="..." class="card-img-top w-50 align-self-center">
          <div class="card-body">
              <h5 class="card-title mt-2">{{ product.name }}</h5>
              <p class="card-text">{{ product.short }}</p>

              <router-link :to="{ name: 'ProductDetails', params: { id: product._id}}" type="button" class="btn btn-my-color">Show Product</router-link>
                    <!-- vi bindar vår knapps router-link till namnet på componenten, "ProductDetails" med params av product.id  1:20 lektion 12 --> 
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: ['product']
}
</script>

<style scooped>
    .btn-my-color {
        background-color: lightseagreen;
        color: #fff;
    }
</style>