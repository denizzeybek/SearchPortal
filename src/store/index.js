import Vue from "vue";
import Vuex from "vuex";
// import request from "@/services/request2";
Vue.use(Vuex);
import * as timeConverting from '@/assets/js/timeConverting'

export default new Vuex.Store({
  state: {
    userData: [],
    typeList: [],
    hasError: false,
    errorMessages: [],
  },
  getters: {
    getTypeList(state) {
      return state.typeList;
    },
    getUserData(state) {
      return state.userData;
    },
    getError(state) {
      return state.hasError;
    },
    getErrorList(state) {
      return state.errorMessages;
    },
  },
  mutations: {
    setMutateHandler(state, input) {
      let response = input.response;
      let type = input.type;
      state[type] = response;
    },
    setTypeList(state, data) {
      // state.typeList = [];
      localStorage.removeItem("inputData");
      if (data.length > 1) {
        let arr = state.userData;
        arr = arr.map(function (a) {
          a.NameSurname = a.NameSurname.toLowerCase();
          return a;
        });

        let res = arr.filter((e) => {
          return e.NameSurname.match(data.toLowerCase());
        });
        state.typeList = res;
        localStorage.setItem("inputData", data);
      } else {
        console.log("here");
        state.typeList = state.userData;
      }
    },
    setSortedList(state, data) {
      let bigData = state.typeList;
      let newArr = [];

      switch (data) {
        case "nameAscending":
          // console.log("bigData ", bigData);
          newArr = timeConverting.sortData(bigData, "NameSurname");
          state.typeList = newArr;
          break;
        case "nameDescending":
          newArr = timeConverting.sortData(bigData, "NameSurname");
          state.typeList = newArr.reverse();

          break;
        case "yearAscending":
          bigData = timeConverting.convertTimeSpan(bigData);
          bigData = timeConverting.sortData(bigData, "Date");
          bigData = timeConverting.convertTime(bigData);
          break;
        case "yearDescending":
          bigData = timeConverting.convertTimeSpan(bigData);
          bigData = timeConverting.sortData(bigData, "Date");
          bigData = timeConverting.convertTime(bigData).reverse();
          break;
        default:
        // code block
      }
    },
    setHasError(state, data) {
      state.hasError = data;
      if (data === false) {
        state.errorMessages = [];
      }
    },
    setErrorList(state, data) {
      state.errorMessages.push(data);
    },
  },
  actions: {
    async getDataAction({ commit }) {
      let result;
      // await fetch("http://localhost:3000/data")
      await fetch(process.env.VUE_APP_API_URL)
        .then((response) => response.json())
        .then((json) => (result = json));

      if (result) {
        result = result.map((a) => {
          let oldDate = a.Date;
          let arr = oldDate.split("/");
          let month = arr[1];
          let day = arr[0];
          let year = arr[2];
          let newArr = [];
          newArr.push(month, day, year);
          let newDate = newArr.join("/");
          a.Date = newDate;
          return a;
        });

        let input = {
          response: result,
          type: "userData",
        };
        let input2 = {
          response: result,
          type: "typeList",
        };

        commit("setMutateHandler", input);
        commit("setMutateHandler", input2);
      }
    },
    setTypeListAction({ commit }, data) {
      commit("setTypeList", data);
    },
    sortListAction({ commit }, data) {
      commit("setSortedList", data);
    },
    setErrorAction({ commit }, data) {
      commit("setHasError", data);
    },
    setErrorMessagesAction({ commit }, data) {
      commit("setErrorList", data);
    },
    async saveFormAction({ commit }, data) {
      console.log("data ", data);
      await fetch(process.env.VUE_APP_API_URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    },
  },
  modules: {},
});
