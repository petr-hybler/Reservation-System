<template lang="html">
  <div class="">
    <app-navbar></app-navbar>
    <div style="margin-top: 64px">

            <carousel></carousel>
            <div class="container">
              <skillset></skillset>
              <hr>
              <updates></updates>
            </div>

      <div class="container">
        <app-footer></app-footer>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from './shared/Navbar.vue'
  import Footer from './shared/Footer.vue'
  import Carousel from './shared/Carousel.vue'
  import Skillset from './shared/SkillSet.vue'
  import Updates from './shared/Updates.vue'

  export default {
    components: {
      Carousel,
      Skillset,
      Updates,
      'app-navbar': Navbar,
      'app-footer': Footer
    }
  }
</script>

<style lang="css" scoped>
</style>
