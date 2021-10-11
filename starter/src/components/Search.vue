 <template>
     <h1>Time Task Clone </h1>
    <div id="search-bar" class="search">
        
        <select name="cars" id="cars">
        <option value="select"></option>
        <option value="taskid">taskid</option>
        <option value="taskname">Mercedes</option>
        <option value="person">Audi</option>
        </select>

        <input  placeholder="Search with taskid , taskname or person " />
    </div>

    <div class="button-container">
        <button href="#" class="tt-atom-btn  add">Add Task</button>
        <button href="#"  class="tt-atom-btn history">Task History</button>
    </div>
     
    <h2>Ongoing Tasks</h2>  

 </template>


 <script>
   export default{
    name: 'Search', 
        data(){
            return {

            }
        }
   };
 </script>
 
 <style scoped>
    .search{
        display: flex;
        flex-direction: row;
        margin:10px ;
    }

    input{
        width:30vw ; 
    }

    .button-container{
        display: flex;
        align-items: center;
        justify-content: center;
     }

    .button-container > button {
        padding: 10px;
        margin: 10px; 
    }
  
  .history{
      background-color: #ba4978;
  }


 </style>