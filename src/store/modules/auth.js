import AuthenticationService from '@/services/AuthenticationService'

const state = {
  url: process.env.VUE_APP_URL,
  token: localStorage.getItem('token') || null,
  user: JSON.parse(localStorage.getItem('user')) || null
}

const getters = {
  loggedIn(state) {
    return !!state.user
  }
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_USER_DATA(state, data) {
    state.user = data
  },
  CLEAR_AUTH(state) {
    state.token = null
    state.user = null
  }
}

const actions = {
  register({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      AuthenticationService.register(credentials)
        .then(({ data }) => {
          commit('SET_TOKEN', data.token)
          localStorage.setItem('token', data.token)
          resolve(data)
        })
        .catch((err) => reject(err))
    })
  },
  login({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      AuthenticationService.login(credentials)
        .then(({ data }) => {
          localStorage.setItem('token', data.token)
          commit('SET_TOKEN', data.token)

          resolve(data)
        })
        .catch((err) => reject(err))
    })
  },
  getCurrentUser({ commit }, token) {
    return new Promise((resolve, reject) => {
      AuthenticationService.me(token)
        .then(({ data }) => {
          const { name, email } = data.data
          localStorage.setItem(
            'user',
            JSON.stringify({ name: name, email: email })
          )
          commit('SET_USER_DATA', { name, email })
          resolve(data)
        })
        .catch((err) => reject(err))
    })
  },
  logout({ commit }) {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    commit('CLEAR_AUTH')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
