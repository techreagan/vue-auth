<template>
  <div id="dashboard">
    <h1 style="margin: auto">Welcome {{ name }}</h1>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    async getUser() {
      const user = await AuthenticationService.me(
        localStorage.getItem('token')
      ).catch((err) => {
        console.log(err.response)
      })
      if (!user) return
      this.name = user.data.data.name
    }
  },
  mounted() {
    this.getUser()
  }
}
</script>

<style>
#dashboard {
  height: 100%;
  display: flex;
}
</style>
