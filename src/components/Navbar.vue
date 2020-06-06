<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <router-link class="navbar-brand" to="/" tag="a">Vue Auth</router-link>

      <div class="collpase navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <template v-if="loggedIn">
            <router-link
              to="/dashboard"
              class="nav-item"
              exact-active-class="active"
              tag="li"
              ><a class="nav-link">Dashboard</a></router-link
            >
            <li class="nav-item">
              <a href="#" class="nav-link" @click="logout">Logout</a>
            </li>
          </template>
          <template v-else>
            <router-link
              to="/login"
              class="nav-item"
              exact-active-class="active"
              tag="li"
              ><a class="nav-link">Login</a></router-link
            >
            <router-link
              v-if="!loggedIn"
              to="/register"
              class="nav-item"
              exact-active-class="active"
              tag="li"
              ><a class="nav-link">Register</a></router-link
            >
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { authComputed } from '@/store/helpers'

export default {
  name: 'Home',
  computed: {
    ...authComputed
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style></style>
