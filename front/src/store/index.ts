import Vue from 'vue'
import Vuex from 'vuex'

//VUEX Talks to everyone object.
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

export interface userSttings {
    id: number;
    name: string;
    token: string;
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
  user: userSttings;
}

export default new Vuex.Store({

  //  store.state
  state: {
    user: {
      id: 0,
      name: "",
      token: ""
    },
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
    login: (state: yarnStoreState, payload: userSttings) => {
      state.user = payload;
    },
    logut: (state: yarnStoreState) => {
      state.user = {
        id: 0,
        name: "",
        token: ""
      };
    },
  },

  //  store.deploy
  actions: {},
})
