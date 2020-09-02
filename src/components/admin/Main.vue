<template lang="html">
  <div class="">
    <app-admin-navbar></app-admin-navbar>

    <div class="container-fluid">
    <div class="row">
     <app-admin-sidebar></app-admin-sidebar>

     <app-admin-dashboard></app-admin-dashboard>
    </div>
    </div>
  </div>
</template>

<script>
  import Navbar from './shared/Navbar.vue'
  import Sidebar from './shared/Sidebar.vue'
  import Dashboard from './Dashboard.vue'

  export default {
    components: {
      'app-admin-navbar': Navbar,
      'app-admin-sidebar': Sidebar,
      'app-admin-dashboard': Dashboard,
    }
  }
</script>

<style lang="css" scoped>
@import './../../../src/assets/admin/css/main.css';
</style>
