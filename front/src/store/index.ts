import Vue from 'vue'
import Vuex from 'vuex'

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

export interface gridSize {
  height: number;
  width: number;
  size: number;
}

export interface yarnStoreState {
  messageBox: boolean;
  gridColorList: string[][][];
  gridSize: gridSize;
}

export default new Vuex.Store({

  //  store.state
  state: {
    gridSize: {
      height: 5,
      width: 5,
      size: 0
    },
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
    setGridSize: (state:yarnStoreState, payload: gridSize) => {
      state.gridSize = payload;
    },
  },

  //  store.deploy
  actions: {},
})
