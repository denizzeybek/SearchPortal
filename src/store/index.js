import Vue from "vue";
import Vuex from "vuex";
// import request from "@/services/request2";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: [],
    typeList: [],
  },
  getters: {
    getTypeList(state) {
      return state.typeList;
    },
  },
  mutations: {
    setMutateHandler(state, input) {
      let response = input.response;
      let type = input.type;
      state[type] = response;
    },
    setTypeList(state, data) {
      state.typeList = [];
      if (data !== "") {
        let arr = state.userData;
        arr = arr.map(function (a) {
          a.NameSurname = a.NameSurname.toLowerCase();
          return a;
        });

        let res = arr.filter((e) => {
          return e.NameSurname.match(data.toLowerCase());
        });
        state.typeList = res;
        localStorage.setItem("inputData", data)
      }

    },
  },
  actions: {
    async getDataAction({ commit }) {
      let result;
      await fetch("http://localhost:3000/data")
        .then((response) => response.json())
        .then((json) => (result = json));

      if (result) {
        let input = {
          response: result,
          type: "userData",
        };
        commit("setMutateHandler", input);
      }
    },
    setTypeListAction({ commit }, data) {
      commit("setTypeList", data);
    },
  },
  modules: {},
});
