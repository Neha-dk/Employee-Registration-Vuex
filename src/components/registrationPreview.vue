<template>
  <div class="RP">
    <div class="row">
      <div class="column">
        <registration></registration>
      </div>
      <div class="column">
        <preview></preview>
      </div>
    </div>
    <button @click="toSave()">Add to table</button>
  </div>
</template>

<script>

import registration from "./registration_form";
import preview from "./preview_form";
export default {
  name: "registration_preview",
  props: {
    employeeList: Array
  },
  components: {
    registration,
    preview
  },
  methods: {
    toSave() {
      this.$store.dispatch("addEmployee");
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