import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    //  store.state
    state: {
        messageBox: false,
    },

    //  store.commit
    mutations: {
        hideMessedgeBox: (state)=> { state.messageBox = false; },
        showMessedgeBox: (state, boxname)=> {state.messageBox = boxname; },
    },

    //  store.deploy
    actions: {},
})
