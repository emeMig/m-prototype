import Vue from 'vue'
import Vuex from 'vuex'
import panelData from '../views/Tables/panelData'
import users from '../views/Tables/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    panelData,
    users
  },
  mutations: {
    SET_EXCLUSIVISTA(state, payload) {
      state.panelData.exclusivista.id = payload;
    },
    SET_USER_ID(state, payload) {
      state.users.id = payload.id;
    }
  },
  actions: {
    async getPanelExclusivistas ({commit}, id)  {
      try {
        const data = await fetch('https://aws.apiprovider.cuende.com/v3/exclusivistas', {
          method: 'POST',
          body: data,
          apikey: '',
          POSTsender: '',
          headers: new Headers(apikey, POSTsender)
        })
        const exclusivistas = await data.json()
        commit('SET_EXCLUSIVISTA', exclusivistas.id )
      } catch (error) {
        console.log(error);
      }
    },
    async getUsersId ({commit}, user)  {
      try {
        const data = await fetch('https://aws.apiprovider.cuende.com/v3/users', {
          method: 'POST',
          body: data,
          apikey: '',
          POSTsender: '',
          headers: new Headers(apikey, POSTsender)
        });
        const users = await data.json();
        commit('SET_USER_ID', users.user )
      } catch (error) {
        console.log(error);
      }
    }, 

  },
  modules: {
    //loginUsuarios,
    //authUsuarios
  }
})