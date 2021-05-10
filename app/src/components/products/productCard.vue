<template>
  <div class="col">
      <div class="card p-3">
          <img :src="product.image" alt="..." class="card-img-top">
          <div class="card-body">
              <h5 class="card-title mt-2">{{ product.name }}</h5>
              <p class="card-text">{{ product.short }}</p>

              <router-link to="/" type="button" class="btn btn-primary">Show Product</router-link>
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

<style>

</style>