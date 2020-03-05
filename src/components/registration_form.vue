<template>
  <div class="registration-container">
    <h1>Registration</h1>
    <form>
      <div class="form-class">
        <div class="Fields">
          <label>First Name</label>
        </div>
        <input v-model="rdata.fn" />
        <div class="Fields">
          <label>Last Name</label>
        </div>
        <input type="text" v-model="rdata.ln" />
        <div class="Fields">
          <label>Mail ID</label>
        </div>
        <input @change="mailValidation" type="text" v-model="rdata.email" />
        <div class="mailcolor">
          <span>{{warning}}</span>
        </div>

        <div class="Fields">
          <label>Password</label>
        </div>

        <input type="password" v-model="rdata.pswd" />

        <div class="Fields">
          <label>Date of Birth</label>
        </div>
        <input type="date" v-model="rdata.date" />
        <div class="GenderClass">
          <div class="Fields">
            <label>Gender</label>
          </div>

          <div @click="gender_event(0)">
            <input type="radio" v-model="rdata.gender" name="Gender" value="male" /> Male
          </div>
          <div @click="gender_event(1)">
            <input type="radio" v-model="rdata.gender" name="Gender" value="female" />Female
          </div>
        </div>
        <div class="Fields">
          <label>Country</label>
        </div>
        <div class="country-class">
          <select @change="state_collection()" class="Country" v-model="rdata.country">
            <option v-for="c in rdata.country_object" :key="c.id">{{ c.country }}</option>
          </select>
        </div>
        <div class="Fields">
          <label>State</label>
        </div>
        <div class="state-class">
          <select class="State" v-model="rdata.state">
            <option v-for="s in rdata.state_object" :key="s.id">{{ s }}</option>
          </select>
        </div>
        <div class="hobbies-class">
          <div class="Fields">
            <label>Hobbies</label>
          </div>
          <input type="checkbox" v-model="rdata.Hobbies" id="sing" value="Singing" />
          <label for="sing">Singing</label>
          <input type="checkbox" v-model="rdata.Hobbies" id="dance" value="Dancing" />
          <label for="dance">Dancing</label>
          <input type="checkbox" v-model="rdata.Hobbies" id="story" value="Story Writing" />
          <label for="story">Story Writing</label>
          <input type="checkbox" v-model="rdata.Hobbies" id="games" value="Games" />
          <label for="games">Games</label>
        </div>
        <div class="Fields">
          <label>Address</label>
        </div>
        <textarea v-model="rdata.Address">Where is your House</textarea>

        <div class="submission-class" align="right">
          <button class="cancel">Cancel</button>
          <button class="submit">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "registration",
  props: {
    rdata: {}
  },
  data() {
    return {
      warning: ""
    };
  },
  methods: {
    gender_event(index) {
      document.getElementsByName("Gender")[index].checked = true;
      this.rdata.gender = document.getElementsByName("Gender")[index].value;
    },
    mailValidation() {
      var id = this.rdata.email;
      this.warning = id.endsWith("@gmail.com") ? "" : "Invalid Email";
    },
    state_collection() {
      var state = this.rdata.country_object.find(x => x.country == this.rdata.country);
      this.rdata.state_object = state.states;
    }
  }
};
</script>

<style scoped lang="scss">
label
{
    font-weight: bold;
}

.registration-container {
  // float: left;
  padding: 10%;
  padding-top: 0px;
  // border: 1px solid #000;
}

body {
  .Form-class {
    margin: 30px 30px;
    padding: 10px;
    background-color: #d3d3d3;
  }
}
.Form-class {
  .fields {
    margin-top: 5px;
  }
}
.Form-class {
  select {
    margin-top: 2px;
    margin-bottom: 6px;
  }
}
.submit {
  background-color: #003399;
}

.cancel {
  background-color: #a9a9a9;
}
</style>