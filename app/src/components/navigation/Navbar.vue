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
            <router-link class="nav-link active" to="/products"
              >Products</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/about"
              >About us</router-link
            >
          </li>
        </ul>
        <!-- Dropdown icon menu start -->
        <ul class="navbar-nav ms-auto">
          <!-- shopping cart -->
          <li class="nav-item dropdown">
            <a
              class="nav-link" href="#" 
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false">
              <i class="fas fa-shopping-cart"></i>
                <span class="badge rounded-pill badge-notification bg-danger">1</span>

            </a>
            <ul
              class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
              SHOPPING CART
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-user"></i>
              
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
              USER SETTINGS
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>