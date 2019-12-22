import Vue from 'vue'
import Vuex from 'vuex'
import {red} from "color-name";

Vue.use(Vuex)

export default new Vuex.Store({

    //  store.state
    state: {
        messageBox: false,
        gridColorList: [
            //row 1
            [
                //column 1
                [
                    //Color 1
                    "red"
                ],
                //C2
                [
                    "green"
                ]
            ],
            //R2
            [
                //column 2
                [
                    //Color 1
                    "blue"
                ],
                //C2
                [
                    "yellow"
                ]
            ],
        ],
    },

    //  store.commit
    mutations: {
        hideMessedgeBox: (state)=> { state.messageBox = false; },
        showMessedgeBox: (state, boxname)=> {state.messageBox = boxname; },
        replaceGridColorList: (state, gridColors) => { state.gridColorList = gridColors; },
    },

    //  store.deploy
    actions: {},
})
