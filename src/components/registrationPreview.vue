<template>
  <div class="RP">
    <div class="row">
      <div class="column">
        <registration :rdata="edata"></registration>
      </div>
      <div class="column">
        <preview :pdata="edata"></preview>
      </div>
    </div>
    <button @click="toSave()">Add to table</button>
  </div>
</template>

<script>
import { Countries } from "../constants/constants";
import registration from "./registration_form";
import preview from "./preview_form";
var regData = {
  fn: "",
  ln: "",
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
export default {
  name: "registration_preview",
  props: {
    employeeList: Array
  },
  components: {
    registration,
    preview
  },
  data() {
    return { edata: regData };
  },
  methods: {
    toSave() {
      let obj = { ...this.edata };
      this.employeeList.push(obj);
      //reset();
      console.log(this.employeeList);
    }
  }
};
</script>

<style>
.column {
  border-style: groove;
  flex: 50%;
}
.row {
  display: flex;
}
</style>