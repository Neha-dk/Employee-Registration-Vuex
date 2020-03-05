<template>
  <div class="preview-container">
    <h1>Preview</h1>
    <form>
      <div class="form-class">
        <div class="Fields">
          <label>Full Name</label>
        </div>
        {{fullname()}}
        <div class="Fields">
          <label>Mail ID</label>
        </div>
        {{pdata.email}}
        <div class="Fields">
          <label>Password</label>
        </div>
        {{pdata.pswd}}
        <div class="Fields">
          <label>Date of Birth</label>
        </div>
        {{date_format()}}
        <div class="GenderClass">
          <div class="Fields">
            <label>Gender</label>
          </div>
          {{pdata.gender}}
        </div>
        <div class="Fields">
          <label>Country</label>
        </div>
        {{ pdata.country}}

        <div class="Fields">
          <label>State</label>
        </div>
        <div class="state-class">
          {{pdata.state}}
        </div>

        <div class="hobbies-class">
          <div class="Fields">
            <label>Hobbies</label>
          </div>
          <ol>
            <li v-for="hobby in pdata.Hobbies" :key="hobby">{{hobby}}</li>
          </ol>
        </div>
        <div class="Fields">
          <label>Address</label>
          {{pdata.Address}}
        </div>        
      </div>
    </form>
  </div>
</template>

<script>
export default {
    name:"preview",
    props:{
        pdata:{}
    },
    methods: {
    fullname() {
      return this.pdata.fn + " " + this.pdata.ln;
    },
    date_format()
    {
        this.pdata.date =  this.pdata.date.split("-").reverse().join("-");
        return this.pdata.date;
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