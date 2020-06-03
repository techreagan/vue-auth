<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <a class="navbar-brand" href="#">Vue Auth</a>

      <div class="collpase navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <!-- <li class="nav-item active"> -->
          <router-link
            to="/login"
            class="nav-item"
            exact-active-class="active"
            tag="li"
            ><a class="nav-link">Login</a></router-link
          >
          <!-- <a class="nav-link" href="#">Login</a> -->
          <!-- </li> -->
          <li class="nav-item">
            <router-link
              to="/register"
              class="nav-item"
              exact-active-class="active"
              tag="li"
              ><a class="nav-link">Register</a></router-link
            >
            <!-- <a class="nav-link" href="#">Register</a> -->
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style></style>
