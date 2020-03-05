<template>
  <div class="header">
    <div class="topnav">
      <router-link :to="{name:'register-preview', params:{employeeList:emplist}}">REGISTER</router-link>
      <router-link :to="{name:'table', params:{tdata:emplist}}">TABLE</router-link>
    </div>
    <router-view></router-view>
  </div>  
</template>

<script>
export default {
  name: "App",
  data(){
    return {emplist:[]}
  }
};

</script>

<style>
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}
</style>