<template>
  <div >
    <h1>Time Task Clone</h1>


    <div id="search-bar" class="search">
      <label for="options">search by :</label>
      <select name="options" v-model="selected" @change="demo()">
        <option value="taskid">task-id</option>
        <option value="taskname">task-name</option>
        <option value="person">person</option>
      </select>

      <input v-if="searchtype === 'number'"  placeholder="Search with taskid , taskname or person " type="number" />
       <input v-if="searchtype === 'text'"  placeholder="Search taskname or person " type="text" onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || (event.charCode==32)"/>
    
         <button href="#" class="tt-atom-btn  add" >
        Add Task
      </button>
    </div>

      
      <!-- <button href="#" class="tt-atom-btn history">Task History</button> -->
 
    <h2>Ongoing Tasks</h2>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchtype:'number'
    };
  },
  methods: {
    demo() {
      if(this.selected === 'taskid'){
           this.searchtype = 'number'
      }else{
        this.searchtype = 'text'
      }
    },
  },
};
</script>

<style scoped>
.search {
  display: flex;
  flex-direction: row;
  margin: 10px;
  justify-content:center ;
}

input {
  width: 30vw;
  padding: 10px;
}

 
.button-container > button {
  padding: 10px;
  margin: 10px;
}

.history {
  background-color: #ba4978;
}
</style>
