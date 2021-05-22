<template>

<div class="container col-6 mx-auto ">
<h2 class="mb-5">Register as a free member here...</h2>

<form class=""  @submit.prevent="onSub">
  <!-- 2 column grid layout with text inputs for the first and last names -->
  <div class="row mb-4">
    <div class="col">
      <div class=" ">
        <input type="text" id="fistName" class="form-control" v-model="user.firstName" />
        <label class="form-label" for="firstName">First name</label>
      </div>
    </div>
    <div class="col">
      <div class=" ">
        <input type="text" id="lastName" class="form-control" v-model="user.lastName" />
        <label class="form-label" for="lastName">Last name</label>
      </div>
    </div>
  </div>

  <!-- Email input -->
  <div class="  mb-4">
    <input type="email" id="email" class="form-control" v-model="user.email" />
    <label class="form-label" for="email">Email address</label>
  </div>

  <!-- Password input -->
  <div class="  mb-4">
    <input type="password" id="password" class="form-control" v-model="user.password" />
    <label class="form-label" for="password">Password</label>
  </div>



  <!-- Submit button -->
  <button type="submit" class="btn btn-primary btn-block mb-4">Sign up</button>

  <!-- Register buttons -->
  <div class="text-center">
    <p>or sign up with:</p>
    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
</form>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            user: {         // skapar ett objekt med firstName mm att skicka med. 
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            } 
        }
    },
    methods: {
        ...mapActions(['register']),
        onSub() {
            if(this.user.firstName !== '' && this.user.lastName !== '' && this.user.email !== '' && this.user.password !== '') {
                this.register(this.user)
            }
        }
    }
}
</script>

<style>

</style>