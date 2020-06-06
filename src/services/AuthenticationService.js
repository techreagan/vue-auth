import Api from '@/services/Api'

export default {
  login(credentials) {
    return Api().post('auth/login', credentials)
  },
  register(data) {
    return Api().post('auth/register', data)
  },
  me(token) {
    return Api().post('auth/me', {
      headers: { Authorization: `Bearer ${token}` }
    })
  }
}
