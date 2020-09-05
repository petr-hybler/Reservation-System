<template lang="html">
  <div class="my-5 container">
    <h2>News & Updates</h2>
    <div class="card mb-3" v-for="update in this.$store.state.updates.updates">
      <div class="row">
        <div class="col" style="max-width: 250px">
          <svg class="bd-placeholder-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Img">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#868e96" />
              <text x="40%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
          </svg>
        </div>
        <div class="col">
          <div class="card-body">
            <h5 class="card-title">{{update.title}}</h5>
            <p class="card-text">{{update.desc}}</p>
            <p class="card-text"><small class="text-muted">{{update.updated}}</small></p>
            <button type="button" name="button" class="btn btn-dark float-right">Read more</button>
          </div>
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
</style>
