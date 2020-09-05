<template lang="html">
  <div class="">
    <app-navbar></app-navbar>
    <div style="margin-top: 64px">
      <div class="container my-5">
          <app-header text="Reserve"></app-header>
          <app-progress-bar :stepSize="stepSize"></app-progress-bar>

          <div class="row d-flex justify-content-between mt-3">
            <button type="button"
                  class="btn float-right btn-dark"
                  name="button"
                  @click="prevStep">{{this.$store.state.buttons.prev}}</button>
            <button type="button"
                        class="btn float-right btn-dark"
                        name="button"
                        @click="nextStep">{{this.$store.state.buttons.next}}</button>
          </div>

                <!-- date picker -->
                <template v-if="this.currentStep == 'pick-date'">
                   <date-picker></date-picker>
                </template>

                <!-- time -->
                <template v-else-if="this.currentStep == 'pick-time'">
                   <time-picker></time-picker>
                </template>

                <!-- services -->
                <template v-else-if="this.currentStep == 'select-service'">
                   <service-picker></service-picker>
                </template>

                <!-- contact details -->
                <template v-else-if="this.currentStep == 'contact-details'">
                   <contact-picker></contact-picker>
                </template>

                <!-- finished -->
                <template v-else-if="this.currentStep == 'final'">
                   <success-msg></success-msg>
                </template>

                <!-- default -->
                <template v-else>
                   <date-picker></date-picker>
                </template>

      </div>
    <div class="container">
      <app-footer></app-footer>
    </div>
  </div>
</div>
</template>

<script>
  import Header from './../shared/MainHeader.vue'
  import ProgressBar from './../shared/ProgressBar.vue'
  import Navbar from './../shared/Navbar.vue'
  import Footer from './../shared/Footer.vue'

  import DatePicker from './../reserve/DatePick.vue'
  import TimePicker from './../reserve/TimePick.vue'
  import ServicePicker from './../reserve/ServicePick.vue'
  import ContactPicker from './../reserve/ContactPick.vue'

  import SuccessMsg from './../reserve/SuccessMsg.vue'

  export default {
    components: {
      'app-header': Header,
      'app-progress-bar': ProgressBar,
      'app-navbar': Navbar,
      'app-footer': Footer,
      DatePicker,
      TimePicker,
      ServicePicker,
      ContactPicker,
      SuccessMsg
    },
    data() {
      return {
         currentStep: undefined,
         stepSize: 0,
         selTimeSlot: undefined,
         activeStep: 1,
         selectedService: -1,
      }
    },
    methods: {
      init(){
        this.setStepSize()
      },
      nextStep() {
        if(this.activeStep != this.$store.state.reservationSteps.length){ this.activeStep += 1 }
        this.setStepSize()
      },
      prevStep() {
        if(this.activeStep != 1){ this.activeStep -= 1 }
        this.setStepSize()
      },
      setStepSize() {
        this.stepSize = 100 / this.$store.state.reservationSteps.length * this.activeStep
        this.currentStep = this.$store.state.reservationSteps[this.activeStep-1].name
      },
      selectService(sid){
        this.selectedService = sid
        //console.log(this.selectedService)
      }
    },
    mounted() {
      this.init();
    }
  }
</script>

<style lang="css" scoped>
</style>
