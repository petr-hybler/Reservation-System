<template lang="html">
  <div class="">
      <br>
       <h3>Enter your contact details</h3>
      <br>
      <div class="w-50 mx-auto">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input v-model="email"
                type="email"
                class="form-control"
                id="Email"
                aria-describedby="emailHelp"
                placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Name</label>
          <input v-model="name"
                type="text"
                class="form-control"
                id="Name"
                placeholder="Your Name">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Cell phone</label>
          <input v-model="phone"
                 type="text"
                 class="form-control"
                 id="Phone"
                 placeholder="Your Contact Number">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Note</label>
          <textarea v-model="note"
                    type="textarea"
                    class="form-control"
                    id="Note"
                    placeholder="Any special request?">
          </textarea>
        </div>
        <div class="form-check">
          <input v-model="tc_checked" type="checkbox" class="form-check-input" id="tcCheck">
          <label class="form-check-label" for="exampleCheck1">Agree with <a href="#">Terms & Conditions</a>
          </label>
          <i v-if="tc_checked" class="fa fa-check-circle" style="color:green"></i>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      name: '',
      phone: '',
      note: '',
      tc_checked: false,
    
  }
}
</script>

<style lang="css" scoped>
</style>
