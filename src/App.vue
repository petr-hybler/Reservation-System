<template>
  <div id="app">
    <app-navbar></app-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
   import NavBar from './components/Navbar.vue'
   export default {
          components: {
            'app-navbar': NavBar
          }
   }
</script>

<style>
</style>
