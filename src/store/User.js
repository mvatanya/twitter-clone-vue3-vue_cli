
export const UserModule = {
    namespaced: true, //namespaced is true mean when you call state in this module, you will have to call by the module name first, for ex in App.js, store.state.User.user 
  
    state: {
      user: null
    },
  
    // Mutations are functions that effect the STATE.
    mutations: {
      SET_USER(state, user) {
        state.user = user;
      }
    },
  
    // Actions are functions that you call throughout your application that call mutations.
    actions: {
      setUser({ commit }, user) {
        commit('SET_USER', user);
      }
    }
  }
  