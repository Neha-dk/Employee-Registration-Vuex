<template>
  <div class="employee-table">
    <button @click="updateTable">Updated Table</button>
    <table border=1>
      <tr>
        <th>Name</th>
        <th>Mail ID</th>
        <th>DOB</th>
        <th>Gender</th>
        <th>Country</th>
        <th>State</th>
        <th>Hobbies</th>
        <th>Address</th>
      </tr>
      <tr v-for="emp in $store.state.employeeList" :key="emp.fn">
        <td>{{emp.fn + " "+emp.ln}}</td>
        <td>{{emp.email}}</td>
        <td>{{emp.date}}</td>
        <td>{{emp.gender}}</td>
        <td>{{emp.country}}</td>
        <td>{{emp.state}}</td>
        <td>
          <ol>
            <li v-for="hobby in emp.Hobbies" :key="hobby">{{hobby}}</li>
          </ol>
        </td>
        <td>{{emp.Address}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "employeeDetails",
  methods:{
    updateTable()
    {
      
      this.$store.dispatch('getEmployeeList');
    }


  }
};
</script>

<style>
.display {
  float: right;
}

</style>