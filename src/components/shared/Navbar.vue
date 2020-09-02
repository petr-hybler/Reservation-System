<template lang="html">
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white fixed-top">
      <a class="navbar-brand" href="/">{{this.$store.state.companyName}}</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav nav-contact">
             <div class="row mx-3">
               <div class="text-left">
                 <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                   <path fill-rule="evenodd" d="M3.925 1.745a.636.636 0 0 0-.951-.059l-.97.97c-.453.453-.62 1.095-.421 1.658A16.47 16.47 0 0 0 5.49 10.51a16.47 16.47 0 0 0 6.196 3.907c.563.198 1.205.032 1.658-.421l.97-.97a.636.636 0 0 0-.06-.951l-2.162-1.682a.636.636 0 0 0-.544-.115l-2.052.513a1.636 1.636 0 0 1-1.554-.43L5.64 8.058a1.636 1.636 0 0 1-.43-1.554l.513-2.052a.636.636 0 0 0-.115-.544L3.925 1.745zM2.267.98a1.636 1.636 0 0 1 2.448.153l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.471 17.471 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969zM12.5 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H12V.5a.5.5 0 0 1 .5-.5z"/>
                   <path fill-rule="evenodd" d="M12 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H13v2.5a.5.5 0 0 1-1 0v-3z"/>
                 </svg> {{ this.$store.state.contacts.phone }}
               </div>
               <div class="text-left">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                </svg>
                  <a class="contact"
                      :href="'mailto:'+this.$store.state.contacts.email+'?subject=Info'">
                      {{ this.$store.state.contacts.email }}</a>
               </div>
             </div>
        </div>
      </div>
      <div class="collapse navbar-collapse w-100" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <router-link tag="a" class="nav-link" to="/" active-class="active" exact>Home</router-link>
          <router-link tag="a" class="nav-link" to="/about" active-class="active" exact>About</router-link>
          <router-link tag="a" class="nav-link" to="/services" active-class="active" exact>Services</router-link>
          <router-link tag="a" class="nav-link" to="/gallery" active-class="active" exact>Gallery</router-link>
          <router-link tag="a" class="nav-link" to="/reserve" active-class="active" exact>Reserve</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
a.contact {
    color: white;
    text-decoration: none;
}
a.contact:hover, a.contact:focus {
    color: white;
    text-decoration: underline;
}
</style>
