<template lang="html">
  <div class="">
    <app-navbar></app-navbar>
    <div style="margin-top: 64px">
          <div class="container my-5">
              <app-header text="Services"></app-header>
              <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>


            <div class="container">
              <div class="row">
                <div class="col-4 mb-4" v-for="service in this.$store.state.services.services">
                    <div class="card shadow-sm">
                      <div class="card-header bg-dark text-white">
                        <h5 class="my-0">{{service.name}}</h5>
                      </div>
                      <div class="card-body">
                        <h1 class="card-title pricing-card-title">{{service.amount | currency }}</h1>
                        <ul class="list-unstyled mt-3 mb-4">
                          {{service.desc}}
                              <router-link tag="button"
                                            class="btn btn-dark mt-3 mb-0"
                                            :to="'/services/'+service.slug"
                                            active-class="active" exact>
                                            Read more
                              </router-link>
                        </ul>
                      </div>
                    </div>
                </div>
              </div>
            </div>

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
