<template lang="html">
  <div class="">
    <app-navbar></app-navbar>
    <div style="margin-top: 64px">
          <div class="container my-5">
              <app-header text="Gallery"></app-header>

            <div class="row text-center text-lg-left" id="gallery">

              <div class="col-lg-3 col-md-4 col-6" v-for="image in this.$store.state.gallery.gallery">
                <div class="d-block mb-4 h-100 gallery-item">
                      <img class="img-fluid img-thumbnail"
                           data-toggle="modal"
                           data-target="#exampleModal"
                           v-bind:src="image.thumb"
                           alt=""
                           @click="modalImg(image)"
                           >
                    </div>
              </div>
            </div>

        <!-- Modal -->
        <div class="modal fade gallery-item-prev" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="ModalLable" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
                <img class="modal-img" :src="selectedImg.full" alt="">
          </div>
        </div>

        </div>
      <div class="container">
        <app-footer></app-footer>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './shared/MainHeader.vue'
  import Navbar from './shared/Navbar.vue'
  import Footer from './shared/Footer.vue'

  export default {
    components: {
       'app-header': Header,
       'app-navbar': Navbar,
       'app-footer': Footer
    },
    data() {
      return {
        selectedImg: '',
      }
    },
    methods: {
      modalImg(item) {
          this.selectedImg = item;
      }
    }
  }
</script>

<style lang="css" scoped>
.img-thumbnail {
  cursor: pointer;
},
.gallery-item {
  transition: 0.3s;
}
.gallery-item:hover {
  transform: scale(1.1);
},
.modal-img {
  width: 100%;
}
.gallery-item-prev {
/*  position: fixed; /* or absolute */
  top: 10%;
}
</style>
