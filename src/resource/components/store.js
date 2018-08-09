import Vue from 'vue'
// import 'babel-polyfill'
import '../utils'

export default {
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    getDataAction () {
      return new Promise((resolve, reject) => {
        Vue.prototype.$ajax({
          url: '/api/home/',
          methods: 'get'
        }).then(rs => {
          resolve(rs)
        }).catch(e => {
          reject(e)
        })
      })
    }
  }
}
