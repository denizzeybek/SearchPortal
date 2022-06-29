import Vue from "vue";
import Vuex from "vuex";
// import request from "@/services/request2";
Vue.use(Vuex);

function sortData(arr, prop) {
  let sortedarr = arr.sort((a, b) => {
    if (a[prop] < b[prop]) {
      return -1;
    }
    if (a[prop] > b[prop]) {
      return 1;
    }
    return 0;
  });
  return sortedarr;
}

function convertTimeSpan(bigData) {
  bigData.map((a) => {
    let date = new Date(a.DateData);
    let timeSpan = date.getTime();
    a.DateData = timeSpan;
  });
  return bigData;
}

function convertTime(bigData) {
  bigData.map((a) => {
    let date = new Date(a.DateData);
    let converted =
      (date.getMonth() > 8
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1)) +
      "/" +
      (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
      "/" +
      date.getFullYear();
    a.DateData = converted;
  });
  return bigData;
}

export default new Vuex.Store({
  state: {
    userData: [],
    typeList: [],
  },
  getters: {
    getTypeList(state) {
      return state.typeList;
    },
    getUserData(state) {
      return state.userData;
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
        state.typeList = state.userData;
      }
    },
    setSortedList(state, data) {
      let bigData = state.userData;
      let typeData = state.typeList;
      let newArr = [];

      switch (data) {
        case "nameAscending":
          // console.log("bigData ", bigData);
          newArr = sortData(bigData, "NameSurname");
          state.userData = newArr;
          break;
        case "nameDescending":
          newArr = sortData(bigData, "NameSurname");
          state.userData = newArr.reverse();

          break;
        case "yearAscending": { 
          bigData = convertTimeSpan(bigData);
          bigData = sortData(bigData, "DateData");
          bigData = convertTime(bigData); 
          break;
        }
        case "yearDescending":
          bigData = convertTimeSpan(bigData);
          bigData = sortData(bigData, "DateData");
          bigData = convertTime(bigData).reverse();
          break;
        default:
        // code block
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
        result = result.map((a) => {
          let oldDate = a.DateData;
          let arr = oldDate.split("/");
          let month = arr[1];
          let day = arr[0];
          let year = arr[2];
          let newArr = [];
          newArr.push(month, day, year);
          let newDate = newArr.join("/");
          // a.DateData = new Date(newDate);
          a.DateData = newDate;
          //TODO:: burda sıkıntı var
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
  },
  modules: {},
});
