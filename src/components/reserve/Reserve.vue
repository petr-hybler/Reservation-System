<template lang="html">
  <div class="">
    <app-navbar></app-navbar>
    <div style="margin-top: 64px">
      <div class="container my-5">
          <app-header text="Reserve"></app-header>
          <app-progress-bar :stepSize="stepSize"></app-progress-bar>

                <!-- date picker -->
                <template v-if="this.currentStep == 'pick-date'">
                  <br>
                   <h3>Select your desired date</h3>
                  <br>
                  <button type="button"
                        class="btn float-right btn-dark"
                        name="button"
                        @click="nextStep">{{btnNext}}</button>
                  <app-calendar></app-calendar>
                </template>

                <!-- time -->
                <template v-else-if="this.currentStep == 'pick-time'">
                  <br>
                   <h3>Select your desired time slot</h3>
                  <br>
                        <button type="button"
                                class="btn float-right btn-dark"
                                @click="nextStep">
                                {{btnNext}}</button>
                  <ul class="list-group w-25 mx-auto text-center">
                    <template v-for="timeSlot in timeSlots">
                      <li :class="{'list-group-item list-group-item-action': true,
                                   'disabled': timeSlot.disabled}
                                  ">
                          {{timeSlot.slot}}</li>
                    </template>
                  </ul>
                </template>

                <!-- services -->
                <template v-else-if="this.currentStep == 'select-service'">
                  <br>
                   <h3>Pick a service</h3>
                  <br>
                  <button type="button"
                          class="btn float-right btn-dark"
                          @click="nextStep">
                          {{btnNext}}</button>
                     <div class="row">
                        <template v-for="service in services">
                          <div class="col">
                            <div @click="selectService(service.id)"
                                  :class="{'bg-dark': service.id == this.selectedService,
                                           'card service': true}">
                              <h5 class="card-header">{{service.name}}</h5>
                              <div class="card-body">
                                <p class="card-text">{{service.desc}}</p>
                              </div>
                            </div>
                          </div>
                        </template>
                      </div>
                </template>

                <!-- contact details -->
                <template v-else-if="this.currentStep == 'contact-details'">
                  <br>
                   <h3>Enter your contact details</h3>
                  <br>
                  <button type="button"
                          class="btn float-right btn-dark"
                          @click="nextStep">
                          {{btnNext}}</button>
                  <form class="w-50 mx-auto">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email">
                      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Name</label>
                      <input type="text" class="form-control" id="Name" placeholder="Your Name">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Cell phone</label>
                      <input type="text" class="form-control" id="Phone" placeholder="Your Contact Number">
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="tcCheck">
                      <label class="form-check-label" for="exampleCheck1">Agree with <a href="#">Terms & Conditions</a></label>
                    </div>
                  </form>
                </template>

                <!-- finished -->
                <template v-else-if="this.currentStep == 'final'">
                  <br>
                   <h3>Congratulations</h3>
                  <br>
                  Your reservation has been sent :)
                </template>

                <!-- default -->
                <template v-else>
                  <br>
                   <h3>Pick a date</h3>
                  <br>
                  <app-calendar></app-calendar>
                  <button type="button"
                        class="btn float-right btn-dark"
                        name="button"
                        @click="nextStep">Pick a time</button>
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
  import Calendar from './../shared/Calendar.vue'
  import Navbar from './../shared/Navbar.vue'
  import Footer from './../shared/Footer.vue'

  export default {
    components: {
      'app-header': Header,
      'app-progress-bar': ProgressBar,
      'app-calendar': Calendar,
      'app-navbar': Navbar,
      'app-footer': Footer
    },
    data() {
      return {
         btnNext: 'Next',
         currentStep: undefined,
         stepSize: 0,
         selTimeSlot: undefined,
         activeStep: 1,
         selectedService: 0,
         steps: [
           {id: 1, name: 'pick-date', desc: 'Pick date'},
           {id: 2, name: 'pick-time', desc: 'Pick time'},
           {id: 3, name: 'select-service', desc: 'Select service'},
           {id: 4, name: 'contact-details', desc: 'Provide contact details'},
           {id: 5, name: 'final', desc: 'Success'},
         ],
         services: [
           {id: 1, name: 'Service 1', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', disabled: false},
           {id: 2, name: 'Service 2', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', disabled: false},
           {id: 3, name: 'Service 3', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', disabled: false},
           {id: 4, name: 'Service 4', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', disabled: false}
         ],
         timeSlots: [
            {id: 1, slot: '09:00 - 10:00', disabled: false},
            {id: 2, slot: '10:00 - 11:00', disabled: true},
            {id: 3, slot: '11:00 - 12:00', disabled: false},
            {id: 4, slot: '12:00 - 13:00', disabled: false},
         ]
      }
    },
    methods: {
      init(){
        this.setStepSize()
      },
      nextStep() {
        this.activeStep += 1
        this.setStepSize()
      },
      setStepSize() {
        this.stepSize = 100 / this.steps.length * this.activeStep
        this.currentStep = this.steps[this.activeStep-1].name
      },
      selectService(sid){
        this.selectedService = sid
      }
    },
    mounted() {
      this.init();
    }
  }
</script>

<style lang="css" scoped>
ul li {
  cursor: pointer;
}
ul li.disabled {
  background-color: lightgray;
  color: darkgray;
}
ul li:hover {
}
.service {
  cursor: pointer;
  transition: 0.3s;
}
.service:hover{
  transform: scale(1.1);
}
</style>
