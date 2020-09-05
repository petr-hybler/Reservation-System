<template lang="html">
  <div class="">
      <br>
       <h3>Enter your contact details</h3>
      <br>
      <div class="w-50 mx-auto">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input v-model.lazy="setEmail"
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
          <input v-model.lazy="setName"
                type="text"
                class="form-control"
                id="Name"
                placeholder="Your Name">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Cell phone</label>
          <input v-model.lazy="setPhone"
                 type="text"
                 class="form-control"
                 id="Phone"
                 placeholder="Your Contact Number">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Note</label>
          <textarea v-model.lazy="setNote"
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
      name: '',
      email: '',
      phone: '',
      note: '',
      tc_checked: false,
    }
  },
  computed: {
    setEmail: {
      get() {
        return this.email
      },
      set(newVal) {
        this.email = newVal
        this.$store.dispatch('addEmailToReservation', newVal)
      }
    },
    setName: {
      get() {
        return this.name
      },
      set(newVal) {
        this.name = newVal
        this.$store.dispatch('addNameToReservation', newVal)
      }
    },
    setPhone: {
      get() {
        return this.phone
      },
      set(newVal) {
        this.phone = newVal
        this.$store.dispatch('addPhoneToReservation', newVal)
      }
    },
    setNote: {
      get() {
        return this.note
      },
      set(newVal) {
        this.note = newVal
        this.$store.dispatch('addNoteToReservation', newVal)
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
