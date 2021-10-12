<template lang="">
<div class="formcontainer">
 <form @submit.prevent="$emit('saveto-app',tasktitle,description,startdate,enddate,person)">
  <label><strong>Task Title</strong> </label> <br>
  <input type="text" placeholder="title" v-model="tasktitle"  /> <br>

  <label><strong>Description</strong> </label> <br>
  <input type="text" placeholder="description"  v-model="description" /><br>
 
  <label><strong>Start Date</strong> </label> <br>
  <input type="date" placeholder="Start date" v-model="startdate"  min="2021-10-06"  /><br>

   <label><strong>End Date</strong> </label> <br>
  <input type="date" placeholder="End date" v-model="enddate" id="enddate" onclick="datefix()"/><br>

  <label><strong>Assigned person</strong></label> <br>
  <input type="text" placeholder="Person" v-model="person" />
<br>
<button type="submit"> Submit </button>
<button @click="$emit('close-form')">Close</button>
</form>

  </div>
</template>

<script>
export default {
   name: "Taskform",

data() {
    return {
      tasktitle: "",
      description: "",
      startdate: "",
      enddate: "",
      person: "",
      
    };
  },
  emits: ["close"],

  methods: {
    datefix(){
      console.log('DAte clicked ');
      document.getElementById('enddate').setAttribute.max = new Date();
    }
  }
}
</script>

<style scoped>
.formcontainer{
  display:grid ;
  place-items: center; 
}
form {
  background-color: rgb(85, 221, 210);
  padding: 50px; 
  width: 30vw ; 
  display:block;

}

label {
  font-family: sans-serif;
  letter-spacing: 6px;
  text-transform: uppercase;
  font-size: 0.8em;
}

input[type="text"] {
  display: inline-block;
  border: none;
  text-align: left;
  box-shadow: 3px 2px rgba(121, 83, 210, 0.3);
  padding: 10px;
  width: 350px;
  margin: 10px 0;
  background: transparent;
}

input[type="text"]:focus {
  background: none;
  border: none;
}

button {
  background: transparent;
  font-family: sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin: 20px 0;
  padding: 10px 30px;
  border: 2px solid rebeccapurple;
}

button:hover {
  background: transparent;
  border: 2px solid rgba(69, 39, 160, 0.4);
}
</style>