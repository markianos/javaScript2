<template>
  <div>
    <Navbar />
    <div class="container-fluid m-0 p-0 ">
    <router-view/>

    </div>
  </div>
</template>

<script>
import Navbar from './components/navigation/Navbar'
export default {
  components: { 
    Navbar 
  }
}

</script>


<style>

</style>
