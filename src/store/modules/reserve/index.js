export default {
  // state
  state: {
    reservation: {
      service: {
        id: '',
        name: '',
        slug: '',
      },
      datetime: {
        day: '',
        month: '',
        year: '',
        hour_from: '',
        hour_to: '',
      },
      contact: {
        name: '',
        email: '',
        cellphone: '',
        note: '',
      }
    },
    // ------------------------------------------------------------------------------------
    services: [
      {id: 1, name: 'Service 1', slug: 'service-1', amount: '119', desc: 'Apharetra augue mollis interdum', disabled: false},
      {id: 2, name: 'Service 2', slug: 'service-2', amount: '99', desc: 'Apharetra augue mollis interdum', disabled: false},
      {id: 3, name: 'Service 3', slug: 'service-3', amount: '199', desc: 'Apharetra augue mollis interdum', disabled: false},
      {id: 4, name: 'Service 4', slug: 'service-4', amount: '249', desc: 'Apharetra augue mollis interdum', disabled: false},
      {id: 5, name: 'Service 5', slug: 'service-5', amount: '89', desc: 'Apharetra augue mollis interdum', disabled: false},
      {id: 6, name: 'Service 6', slug: 'service-6', amount: '149', desc: 'Apharetra augue mollis interdum', disabled: false},
    ],
    reservationTimeSlots: [
       {id: 1, slot_from: '09:00', slot_to: '10:00', disabled: false},
       {id: 2, slot_from: '10:00', slot_to: '11:00', disabled: true},
       {id: 3, slot_from: '11:00', slot_to: '12:00', disabled: false},
       {id: 4, slot_from: '13:00', slot_to: '14:00', disabled: false},
       {id: 5, slot_from: '14:00', slot_to: '15:00', disabled: false},
       {id: 6, slot_from: '15:00', slot_to: '16:00', disabled: true},
       {id: 7, slot_from: '16:00', slot_to: '17:00', disabled: true},
       {id: 8, slot_from: '17:00', slot_to: '18:00', disabled: false},
    ],
  },
  // getters
  getters: {
    getCurrentDate: state => {
      return state.currentDate
    },
    getReservation: state => {
      return state.reservation
    }
  },
  // mutations
  mutations: {
    addServiceToReservation: (state, data) => {
      state.reservation.service.id = data.id
      state.reservation.service.name = data.name
      state.reservation.service.slug = data.slug
      //console.log(state.reservation)
    },
    addDayToReservation: (state, data) => {
      state.reservation.datetime.day = data.date
      state.reservation.datetime.month = data.month+1
      state.reservation.datetime.year = data.year
      //console.log(state.reservation)
    },
    addTimeToReservation: (state, data) => {
      state.reservation.datetime.hour_from = data.from
      state.reservation.datetime.hour_to = data.to
      //console.log(state.reservation)
    },
    addNameToReservation: (state, data) => {
      state.reservation.contact.name = data;
    },
    addPhoneToReservation: (state, data) => {
      state.reservation.contact.phone = data;
    },
    addEmailToReservation: (state, data) => {
      state.reservation.contact.email = data;
    },
    addNoteToReservation: (state, data) => {
      state.reservation.contact.note = data;
    }
  },
  //actions
  actions: {
    addServiceToReservation: ({commit}, payload) => {
      commit('addServiceToReservation', payload)
    },
    addDayToReservation: ({commit}, payload) => {
      commit('addDayToReservation', payload)
    },
    addTimeToReservation: ({commit}, payload) => {
      commit('addTimeToReservation', payload)
    },
    addNameToReservation: ({commit}, payload) => {
      commit('addNameToReservation', payload)
    },
    addPhoneToReservation: ({commit}, payload) => {
      commit('addPhoneToReservation', payload)
    },
    addNoteToReservation: ({commit}, payload) => {
      commit('addNoteToReservation', payload)
    },
    addEmailToReservation: ({commit}, payload) => {
      commit('addEmailToReservation', payload)
    }
  }
}
