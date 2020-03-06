
import Vuex from 'vuex'
import Vue from 'vue'
import { Countries } from "../constants/constants";
Vue.use(Vuex)
const axios = require('axios').default;
// var PATH =  '../../public/data/EmployeeData.json';
var PATH = 'http://localhost:8080/data/EmployeeData.json';
var empObj = {
  fn: "",
  ln: "",
  fullName: "",
  email: "",
  pswd: "",
  Hobbies: [],
  Address: "",
  date: "",
  gender: "",
  country: "",
  state: "",
  state_object: [],
  country_object: Countries
};
export default new Vuex.Store({
  state: {
    employeeObj: empObj,
    employeeList: []
  },

  getters: {

  },

  mutations: {
    updateFullName(context) {
      context.employeeObj.fullName = context.employeeObj.fn + " " + context.employeeObj.ln;
    },
    updateEmployeeList(context) {
      context.employeeList.push({ ...context.employeeObj });
    }
  },

  actions: {
    getFullName(state) {
      state.commit('updateFullName')
    },
    addEmployee(state) {
      state.commit('updateEmployeeList')
      console.log(state.employeeObj);
    },
    // json data using axios
    getEmployeeList(context) {
      axios.get(PATH)
        .then(function (response) {
          console.log(response);
          context.state.employeeList = response.data;   
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
  }
});

