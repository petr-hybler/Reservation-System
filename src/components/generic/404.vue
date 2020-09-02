<template lang="html">
  <div class="">
    <app-navbar></app-navbar>
    <div style="margin-top: 64px">
          <div class="container my-5">
              <app-header text="404 - Not Found"></app-header>

          </div>
      <div class="container">
        <app-footer></app-footer>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './../shared/MainHeader.vue'
  import Navbar from './../shared/Navbar.vue'
  import Footer from './../shared/Footer.vue'

  export default {
    components: {
      'app-header': Header,
      'app-navbar': Navbar,
      'app-footer': Footer
    }
  }
</script>

<style lang="css" scoped>
</style>
