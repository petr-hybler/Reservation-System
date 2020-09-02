<template lang="html">
  <div class="login">
    <form class="form-login">
        <h1 class="h3 mb-3 font-weight-normal">Admin Area</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
      <button class="btn btn-lg btn-dark btn-block" type="submit">Sign in</button>
      <router-link tag="a" class="nav-link text-dark" to="/" active-class="active" exact>Home page</router-link>
    </form>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.login {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding: 40px 0;
  background-color: #f5f5f5;
  text-align: center !important;
  height: 100%;
  position:absolute;
  width: 100%;
}
.form-login {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-login .checkbox {
  font-weight: 400;
}
.form-login .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-login .form-control:focus {
  z-index: 2;
}
.form-login input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-login input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
