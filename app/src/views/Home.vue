<template>
    <div class=" mt-5">   

    <div class="p-5 text-center bg-image"
    style=" background-image: url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2807&q=80);
      height: 100vh;">
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white">
            <h1 class="mb-2 display-3 tracking-in-contract-bck">D I G I W A R E</h1>
            <p class="m-5">- the future is now -</p>
            <router-link to="/products" class="btn btn-outline-light btn-lg text-warning">See our products</router-link>
        </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Home',

}
</script>

<style scooped>
.tracking-in-contract-bck {
	-webkit-animation: tracking-in-contract-bck 4s cubic-bezier(0.215, 0.610, 0.355, 1.000) both; animation: tracking-in-contract-bck 4s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}

@-webkit-keyframes tracking-in-contract-bck {
  0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(400px);
            transform: translateZ(400px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
}
@keyframes tracking-in-contract-bck {
  0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(400px);
            transform: translateZ(400px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
}

</style>
