
import Vuex from 'vuex'
import Vue from 'vue'
import { Countries } from "../constants/constants";
Vue.use(Vuex)

var empObj = {   
fn: "",
ln: "",
fullName:"",
email: "",
pswd: "",
Hobbies: [],
warning: "",
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
        employeeObj : empObj,
        employeeList : []
      },

    getters: {

    },

    mutations: {
        updateFullName(context){
            context.employeeObj.fullName =  context.employeeObj.fn + " " +context.employeeObj.ln;
          },
        updateEmployeeList(context) {
            context.employeeList.push({...context.employeeObj});
        }
    },

    actions: {
        getFullName(state){
        state.commit('updateFullName')
    },
    addEmployee(state){
      state.commit('updateEmployeeList')
      console.log(state.employeeObj);
    }
        // json data using axios
        // getEmployeeList() {
        //     axios.get('/user?ID=12345')
        //         .then(function (response) {
        //             // handle success
        //             console.log(response);
        //         })
        //         .catch(function (error) {
        //             // handle error
        //             console.log(error);
        //         })
        //         .finally(function () {
        //             // always executed
        //         });
        // }
    }
});

