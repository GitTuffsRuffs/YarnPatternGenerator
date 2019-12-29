import Vue from 'vue'
import Vuex from 'vuex'
import {red} from "color-name";

Vue.use(Vuex);

export interface storeComponent {
  $store: yarnStore;
}

export interface yarnStore {
  commit(
      name: string,
      a?: any
  ): void;
  state: yarnStoreState;
  watch(
      fn: (state: yarnStoreState ) => any,
      callback: (
          newValue?: any,
          oldValue?: any
      ) => void,
      options?: object
  ): void;
}

export interface yarnStoreState {
  messageBox: boolean;
  gridColorList: string[][][];
}

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
          "white",
        ],
      ],
    ],
  },

  //  store.commit
  mutations: {
    hideMessedgeBox: (state) => {
      state.messageBox = false;
    },
    showMessedgeBox: (state, boxname) => {
      state.messageBox = boxname;
    },
    replaceGridColorList: (state, gridColors) => {
      state.gridColorList = gridColors;
    },
  },

  //  store.deploy
  actions: {},
})
