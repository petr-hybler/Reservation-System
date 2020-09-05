<template lang="html">
    <div id="carouselExampleCaptions" class="carousel slide w-100" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <template v-for="item in this.$store.state.carousel.carousel">
        <div class="carousel-item" :class="{active: item.active}">
          <img :src="item.imgPath" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>{{item.title}}</h5>
            <p>{{item.desc}}</p>
          </div>
        </div>
        </template>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
