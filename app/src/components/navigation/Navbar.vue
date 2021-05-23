<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-nav">
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
                <span v-show="cartItemCount" class="badge rounded-pill badge-notification bg-danger">{{ cartItemCount }}</span>

            </a>
            <ul class="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdownMenuLink">
              <ShoppingCart />
            </ul>
          </li>

<li class="nav-item dropdown" v-if="loggedIn">
              <a
                class="nav-link dropdown"
                href="#"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-user"></i>
              </a>
              <!-- Dropdown menu -->
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li class="nav-item">
                  <router-link class="nav-link text-dark" aria-current="page" to="/user">Settings</router-link>
                </li>
              </ul>
            </li>

            <li v-if="!loggedIn">
              <router-link class="nav-link" to="/Login">Login</router-link>
            </li>

          </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';
import ShoppingCart from '../ShoppingCart/ShoppingCart'
export default {
  name: 'Navbar',
  components: {
    ShoppingCart
  },
  computed: {
    ...mapGetters(['cartItemCount']),
    ...mapGetters(['loggedIn'])
  }
};
</script>

<style>
.shopping-cart {
    min-width: 450px;
  }
.bg-nav {
  background-color: #232f3e;
}
</style>