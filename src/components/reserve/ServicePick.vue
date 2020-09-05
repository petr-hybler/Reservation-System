<template lang="html">
  <div class="">
      <br>
       <h3>Pick a service</h3>
      <br>
      <div class="container">
        <div class="row">
          <div class="col-4 mb-4" v-for="service in this.$store.state.reserve.services">
              <div class="card shadow-sm service"
                    @click="selectService(service)"
                    :class="[selectedServiceId == service.id ? active : '']">
                <div class="card-header bg-dark text-white">
                  <h5 class="my-0">{{service.name}}</h5>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">{{service.amount | currency }}</h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    {{service.desc}}
                  </ul>
                </div>
              </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selectedServiceId: -1,
        active: 'active'
      }
    },
    methods: {
      selectService(data){
          this.selectedServiceId = data.id
          this.$store.dispatch('addServiceToReservation', data)
          //console.log(this.$store.getters.getReservation)
      }
    }
  }
</script>

<style lang="css" scoped>
.service {
  cursor: pointer;
  transition: 0.3s;
  opacity: 0.8;
}
.service:hover, .active{
  transform: scale(1.05);
  opacity: 1;
}
</style>
