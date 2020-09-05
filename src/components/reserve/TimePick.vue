<template lang="html">
  <div class="">
      <br>
       <h3>Select your desired time slot</h3>
      <br>
      <ul class="list-group w-25 mx-auto text-center">
        <template v-for="timeSlot in this.$store.state.reserve.reservationTimeSlots">
          <li :class="getClass(timeSlot)"
              @click="selectTimeSlot(timeSlot)"
              >
              {{timeSlot.slot_from}} - {{timeSlot.slot_to}}</li>
        </template>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTimeSlotId: -1,
      active: 'active'
    }
  },
  methods: {
    selectTimeSlot(data){
      this.selectedTimeSlotId = data.id
      this.$store.dispatch('addTimeToReservation', data)
    },
    getClass(slot){
      return {
        'list-group-item list-group-item-action': true,
        'disabled': slot.disabled,
        'active': this.selectedTimeSlotId == slot.id
      }
    }
  }
}
</script>

<style lang="css" scoped>
ul li {
  cursor: pointer;
  transition: 0.3s;
}
ul li.disabled {
  background-color: lightgray;
  color: darkgray;
}
ul li:hover, ul li.active {
  background-color: dimgray;
  color: white;
}
</style>
