import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedCities: [],
    loading: false
  },
  mutations: {
    setLoadedCities (state, payload) {
      state.loadedCities = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    loadCities ({commit}) {
      axios.get('https://cors-anywhere.herokuapp.com/http://static.pulzo.com/pulzo-dev/cinema/grid/10986.json')
        .then(response => {
          // JSON responses are automatically parsed.
          commit('setLoading', false)
          commit('setLoadedCities', response.data)
        })
        .catch((error) => {
          console.log(error)
          commit('setLoading', true)
        })
    }
  },
  getters: {
    loadedCities (state) {
      return state.loadedCities
    },
    loading (state) {
      return state.loading
    }
  }
})
