<template>
  <div class="preview-container">
    <h1>Preview</h1>
    <form>
      <div class="form-class">
        <div class="Fields">
          <label>Full Name</label>
        </div>
        {{$store.state.employeeObj.fn}}
        <div class="Fields">
          <label>Mail ID</label>
        </div>
        {{$store.state.employeeObj.email}}
        <div class="Fields">
          <label>Password</label>
        </div>
        {{$store.state.employeeObj.pswd}}
        <div class="Fields">
          <label>Date of Birth</label>
        </div>
        {{date_format()}}
        <div class="GenderClass">
          <div class="Fields">
            <label>Gender</label>
          </div>
          {{$store.state.employeeObj.gender}}
        </div>
        <div class="Fields">
          <label>Country</label>
        </div>
        {{ $store.state.employeeObj.country}}

        <div class="Fields">
          <label>State</label>
        </div>
        <div class="state-class">
          {{$store.state.employeeObj.state}}
        </div>

        <div class="hobbies-class">
          <div class="Fields">
            <label>Hobbies</label>
          </div>
          <ol>
            <li v-for="hobby in $store.state.employeeObj.Hobbies" :key="hobby">{{hobby}}</li>
          </ol>
        </div>
        <div class="Fields">
          <label>Address</label>
          {{$store.state.employeeObj.Address}}
        </div>        
      </div>
    </form>
  </div>
</template>

<script>
export default {
    name:"preview",
    methods: {
    date_format()
    {
        this.$store.state.employeeObj.date =  this.$store.state.employeeObj.date.split("-").reverse().join("-");
        return this.$store.state.employeeObj.date;
    }

  }
};
</script>

<style scoped lang="scss">
label
{
    font-weight: bold;
}
.preview-container {
  // border: 1px solid #000;
  padding: 10%;
  padding-top: 0px;
  // float: right;
}

.Form-class {
    margin: 30px 30px;
    padding: 50px;
    background-color: #635858;
  }


</style>