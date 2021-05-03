<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success">
  <div class="container">
    <router-link class="navbar-brand" to="/">
    <i class="fab fa-digital-ocean me-2"></i>DigiWare
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link active" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/products">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/about">About us</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>