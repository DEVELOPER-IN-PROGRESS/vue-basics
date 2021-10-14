<template lang="">
  
<div class="formcontainer" id="formcontainer">
 <form  @submit.prevent="dataform() ;" >
   <h3> {{  formTitle }} </h3>
  <label><strong>Task Title</strong> </label> <br>
  <input type="text" placeholder="title"  v-model="tasktitle"  /> <br>

  <label><strong>Description</strong> </label> <br>
  <input type="text" placeholder="description"  v-model="description" /><br>
 
  <label><strong>Start Date</strong> </label> <br>
  <input type="date" placeholder="Start date" v-model="startdate"  min="2021-10-06"  /><br>
 <br>
   <label><strong>End Date</strong> </label> <br>
  <input type="date" placeholder="End date" v-model="enddate"   /><br>

  <label><strong>Assigned person</strong></label> <br>
  <input type="text" placeholder="Person" v-model="person" />
<br>
<button type="submit" > {{ buttonText }} </button>
<button @click="$emit('close-forma')">Close</button>
</form>

  </div>
</template>

<script>
export default {
   name: "Editform",

data() {
    return {
      tasktitle: this.edit.name ,
      description: this.edit.desc ,
      startdate:  this.edit.start ,
      enddate:  this.edit.end ,
      person: this.edit.people , 
      id: this.edit.id , 
     }
  },


  emits: ["close-forma" , "saveto-app"],

  props: ['edit' , 'formTitle', 'buttonText'] ,
  
 

  methods: {
      
       dataform() { 
      if (
        this.tasktitle === "" ||
        this.description === "" ||
        this.startdate === "" ||
        this.enddate === "" ||
        this.startdate >= this.enddate
      ) {
         alert ('Invalid Form details ') ; 
       } else {
        this.$emit(
          "upto-app",
          this.tasktitle,
          this.description,
          this.startdate,
          this.enddate,
          this.person ,
          this.id , 
        );
      }
    } ,

    
    
   
 } ,

   
}
</script>

<style scoped>
.formcontainer{
  display:grid ;
  place-items: center; 
}
form {
  background-color: rgb(85, 221, 210);
  padding: 20px 50px; 
  width: 30vw ; 
  display:block;
 position: fixed;  
  top:50px ; 
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
  width: 20vw ;
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