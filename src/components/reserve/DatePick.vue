<template lang="html">
<div class="">
    <br>
     <h3>Select your desired date</h3>
    <br>
    <app-calendar></app-calendar>
</div>
</template>

<script>
  import Calendar from './../shared/Calendar.vue'

  export default {
    data() {
      return {
      }
    },
    components: {
      'app-calendar': Calendar,
    },
    methods: {      
    }
  }
</script>

<style lang="css" scoped>
</style>
