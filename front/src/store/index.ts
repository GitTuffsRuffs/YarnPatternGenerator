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
      fn: (state: yarnStoreState) => any,
      callback: (
          newValue?: any,
          oldValue?: any
      ) => void,
      options?: object
  ): void;
}

export interface projectsSettings {
  id: number;
  name: string;
  status: string;
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
  projects: projectsSettings[];
  baseUrl: URL;
  apiUrl: URL;
}

const baseUrl = new URL('/', window.location as unknown as URL);
const apiUrl = new URL('/api/', window.location as unknown as URL);
if(baseUrl.port === '8080') apiUrl.port = "8000";

export default new Vuex.Store({

  //store.state
  state: {
    baseUrl,
    apiUrl,
    user: {
      id: 0,
      name: "",
      token: ""
    },
    projects: [],
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
    setGridSize: (state: yarnStoreState, payload: gridSize) => {
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
    proejcts: (state: yarnStoreState, payload: projectsSettings[] ) => {
      state.projects = payload;
    },
  },

//  store.deploy
  actions: {}
  ,
})
