<template lang="html">
<div class="my-5 container">
    <h3>Skillset</h3>
    <div class="row my-3">
      <div class="col-sm" v-for="skillset in this.$store.state.skillset.skills">
        <div class="card mx-2 text-white bg-dark rounded-pill">
          <div class="card-header text-center bg-transparent">
            <h3 class="text-center">{{skillset.value}}</h3>
          </div>
          <div class="card-body text-center">
            <blockquote class="blockquote mb-0">
              <p>{{skillset.name}}</p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>

  export default {
  }
</script>

<style lang="css" scoped>
.card {
  transition: 0.3s;
}

.card:hover {
  opacity: 0.95;
  -webkit-box-shadow: 0px 0px 5px 2px rgba(79,79,79,1);
  -moz-box-shadow: 0px 0px 5px 2px rgba(79,79,79,1);
  box-shadow: 0px 0px 5px 2px rgba(79,79,79,1);
}
</style>
