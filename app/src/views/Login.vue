<template>
  <div class="container mt-5">
      <form action="" class="border border-2 rounded-3 p-5 col-6 mx-auto">
          <h4 class="text-center">Sign in</h4>

          <div class="mb-4">
              <label for="email" class="form-label small text-black-50 mt-3">Email adress</label>
              <input type="email" id="email" class="form-control" v-model="email">
          </div>
          <div class="mb-4">
              <label for="password" class="form-label small text-black-50">Enter your password</label>
              <input type="password" id="password" class="form-control" v-model="password">
          </div>

          <button class="btn btn-block btn-info mb-4">Sign in</button>

          <div class="text-center">
              <small>Not a member yet? <router-link to="/register">Register</router-link></small>
          </div>
      </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>