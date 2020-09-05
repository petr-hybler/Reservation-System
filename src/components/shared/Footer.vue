<template lang="html">
  <footer class="pt-4 my-md-5 pt-md-5 border-top">
    <div class="row center">
      <div class="col-4 mx-auto">
        <h5>Contact</h5>
        <ul class="list-unstyled text-small">
          <li><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3.925 1.745a.636.636 0 0 0-.951-.059l-.97.97c-.453.453-.62 1.095-.421 1.658A16.47 16.47 0 0 0 5.49 10.51a16.47 16.47 0 0 0 6.196 3.907c.563.198 1.205.032 1.658-.421l.97-.97a.636.636 0 0 0-.06-.951l-2.162-1.682a.636.636 0 0 0-.544-.115l-2.052.513a1.636 1.636 0 0 1-1.554-.43L5.64 8.058a1.636 1.636 0 0 1-.43-1.554l.513-2.052a.636.636 0 0 0-.115-.544L3.925 1.745zM2.267.98a1.636 1.636 0 0 1 2.448.153l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.471 17.471 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969zM12.5 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H12V.5a.5.5 0 0 1 .5-.5z"/>
                <path fill-rule="evenodd" d="M12 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H13v2.5a.5.5 0 0 1-1 0v-3z"/>
              </svg> {{ this.$store.state.contacts.phone }}</li>
          <li><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
              </svg>
                <a class="contact"
                    :href="'mailto:'+this.$store.state.contacts.email+'?subject=Info'">
                    {{ this.$store.state.contacts.email }}</a></li>
          <li><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-card-text" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                <path fill-rule="evenodd" d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
              </svg> {{ this.$store.state.contacts.address}}</li>
          <li><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-geo-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg> <a :href="this.$store.state.contacts.map">map.link.here</a></li>
        </ul>
      </div>
      <div class="col-4 mx-auto">
        <h5>Services</h5>
        <ul class="text-small multicol pl-0">
          <template v-for="service in this.$store.state.reserve.services">
          <li>
              <router-link tag="a"
                            class="text-muted"
                            :to="'/services/'+service.slug"
                            active-class="active" exact>
                            {{service.name}}
              </router-link>
          </li>
          </template>
        </ul>
      </div>
      <div class="col-4 mx-auto">
        <h5>Articles</h5>
        <ul class="list-unstyled text-small multicol pl-0">
          <li><a class="text-muted" href="#">Lorem ipsum dolor sit amet</a></li>
          <li><a class="text-muted" href="#">Ut enim ad minim quis nostrud</a></li>
          <li><a class="text-muted" href="#">Duis aute irure in reprehenderit</a></li>
          <li><a class="text-muted" href="#">Excepteur sint occaecat proident</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
ul.multicol {
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
  list-style: none;
}

@media (max-width: 1000px) {
  ul.multicol {
    columns: 1;
    -webkit-columns: 1;
    -moz-columns: 1;
  }
}
</style>
