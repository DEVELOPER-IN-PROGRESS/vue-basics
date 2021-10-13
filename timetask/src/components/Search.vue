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

        <input v-if="searchtype === 'text'" id="tnumber" placeholder="Search with taskname or personname  " type="text" onkeypress="handle(e)"/>
            <input v-else id="tname"  placeholder="Search with taskid" type="number" min="1000"  onkeypress="handle(e)"/>
 <!-- //return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || (event.charCode==32) -->
 
         <button @click="$emit('openform')" href="#" class="tt-atom-btn  add" >
        Add Task
      </button>
     
    </div>  

      <!-- <button href="#" class="tt-atom-btn history">Task History</button> -->
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchtype:'number' ,
      number:1000,
      name :'',
    };
  },

  emits: ['openform'],

  methods: {
    demo() {
      if(this.selected === 'taskid'){
           this.searchtype = 'number'
      }else{
        this.searchtype = 'text'
      }
    },

    handle(e){
        console.log(e.target.value); 
        e.preventDefault();

    }

  },
};
</script>

<style scoped>
.search {
  display: flex;
  flex-direction: row;
  margin: 10px;
  justify-content:center ;
  align-items: center;
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
