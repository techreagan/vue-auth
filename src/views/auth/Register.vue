<template>
  <div id="login">
    <form @submit.prevent="register" class="form-signin">
      <div class="text-cener mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Register</h1>
      </div>
      <div v-if="errors" class="alert alert-danger">
        <ul>
          <li v-for="error in errors" :key="error.field">
            {{ error.message }}
          </li>
        </ul>
      </div>
      <div class="form-label-group">
        <input
          type="text"
          id="inputName"
          class="form-control"
          placeholder="Name"
          v-model="name"
          required
          autofocus
        />
        <label for="inputEmail">Name</label>
      </div>
      <div class="form-label-group">
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          v-model="email"
          required
          autofocus
        />
        <label for="inputEmail">Email address</label>
      </div>

      <div class="form-label-group">
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          v-model="password"
          required
        />
        <label for="inputPassword">Password</label>
      </div>
      <div class="form-label-group">
        <input
          type="password"
          id="inputConfirmPassword"
          class="form-control"
          placeholder="Confirm Password"
          required
        />
        <label for="inputConfirmPassword">Confirm Password</label>
      </div>


      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Register
      </button>
      <p class="mt-5 mb-3 text-muted text-center">
        &copy; {{ new Date().getFullYear() }}
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      errors: null
    }
  },
  methods: {
    // register() {
    //   this.$store
    //     .dispatch('register', {
    //       name: this.name,
    //       email: this.email,
    //       password: this.password
    //     })
    //     .then(() => {
    //       this.$router.push({ name: 'Dashboard' })
    //     })
    //     .catch((err) => {
    //       this.errors = err.response.data.error
    //     })
    // }
    async register() {
      const data = await this.$store
        .dispatch('register', {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .catch((err) => {
          this.errors = err.response.data.error
        })

      if (!data) return

      const user = await this.$store
        .dispatch('getCurrentUser', data.token)
        .catch((err) => console.log(err))

      if (!user) return

      this.$router.push({ name: 'Dashboard' })
    }
  }
}
</script>

<style>
#login {
  display: flex;
  width: 100%;
  height: inherit;
  /* height: 100%; */
}
.form-signin {
  width: 100%;
  max-width: 420px;
  padding: 15px;
  margin: auto;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group > input,
.form-label-group > label {
  height: 3.125rem;
  padding: 0.75rem;
}

.form-label-group > label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0; /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  pointer-events: none;
  cursor: text; /* Match the input under the label */
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: all 0.1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: 1.25rem;
  padding-bottom: 0.25rem;
}

.form-label-group input:not(:placeholder-shown) ~ label {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 12px;
  color: #777;
}

/* Fallback for Edge
-------------------------------------------------- */
@supports (-ms-ime-align: auto) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

/* Fallback for IE
-------------------------------------------------- */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}
</style>
