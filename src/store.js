import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    increment: 1
  },
  mutations: {
    incrementUpdate(state) {
      state.increment++;
    }
  },
  actions: {
    updateAction(context) {
      context.commit('incrementUpdate')
    },

    async GET(context, { url, query }) {
      const data = await axios.get(url, {
        params: query || {}
      })

      return data;
    },

    async getPokemonList(context) {
      const data = await context.dispatch('GET', { url: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10' }, { root: true });

      if (data) {
        const result = await Promise.all(
          data.data.results.map((item) => {
            return context.dispatch('GET', { url: item.url }, { root: true });
          })
        )
        return result;
      }
    }
  },
  getters: {
    getIncrement(state) {
      return state.increment;
    }
  }
})
