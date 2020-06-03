import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    loggedIn(state) {
      return !!state.user
    }
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData
      console.log(userData)
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${userData.token}`
    },
    CLEAR_USER_DATA() {
      localStorage.removeItem('user')
      location.reload()
    }
  },
  actions: {
    register({ commit }, credentials) {
      return axios
        .post('//localhost:3001/api/v1/auth/register', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', { token: data.token, ...credentials })
        })
    },
    login({ commit }, credentials) {
      return axios
        .post('//localhost:3001/api/v1/auth/login', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', { token: data.token, ...credentials })
        })
    },
    logout({ commit }) {
      commit('CLEAR_USER_DATA')
    }
  },
  modules: {}
})
