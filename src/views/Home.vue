<template>
  <div id="home">
    <section class="text-center">
      <h1>Welcome to the vue auth app</h1>
      <div v-if="!loggedIn">
        To use this app you'll need to
        <router-link to="/login" class="btn btn-link" tag="a">
          Login
        </router-link>
        or
        <router-link to="/register" class="btn btn-link" tag="a">
          Register
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import { authComputed } from '@/store/helpers'

export default {
  name: 'Home',
  computed: {
    ...authComputed
  }
}
</script>

<style>
#home {
  height: 100%;
  display: flex;
}

#home section {
  margin: auto;
}
</style>
