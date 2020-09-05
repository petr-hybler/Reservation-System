import Vue from 'vue'
import Vuex from 'vuex'

//modules
import skillset from './modules/skillset/index'
import carousel from './modules/carousel/index'
import gallery from './modules/gallery/index'
import updates from './modules/updates/index'

//reserve
import reserve from './modules/reserve/index'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
      skillset: skillset,
      carousel: carousel,
      gallery: gallery,
      updates: updates,
      reserve: reserve,
  },
  state: {
      companyName: 'vReserve',
      contacts: {
              phone: '+001 000 222 888',
              email: 'info@vreserve.com',
              address: 'Main Street 1, Big Town',
              map: '#',
      },
      reservation: {
           currentStep: undefined,
           stepSize: 0,
           selTimeSlot: undefined,
           activeStep: 1,
           selectedService: -1,
      },
      reservationDetails: [],
      reservationSteps: [
        {id: 1, name: 'select-service', desc: 'Select service'},
        {id: 2, name: 'pick-date', desc: 'Pick date'},
        {id: 3, name: 'pick-time', desc: 'Pick time'},
        {id: 4, name: 'contact-details', desc: 'Provide contact details'},
        {id: 5, name: 'final', desc: 'Success'},
      ],
      buttons: {
        next: 'Next',
        prev: 'Prev',
      }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  }
});

// helpers
