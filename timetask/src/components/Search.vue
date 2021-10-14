<template>
  <div >
    <div>
    <h1>Time Task Clone</h1>
    
    <div id="search-bar" class="search">
              <input   
                placeholder="search by taskid or person or taskname"
                v-model="search"
              />
       <button @click="$emit('openform')" href="#" class="tt-atom-btn  add" >
        Add Task
      </button>
   
    </div>  
  </div>
     
          
    <div v-if="this.search !== '' ">
         <h4> {{ this.searchResult }} </h4>

      <div  class="table-container">
       <div >
         <table  border="1">
        <tr>
            <th>Task#ID</th>
            <th>Task Name</th>
            <th  >Description</th>
            <th >Start Date</th>
            <th >End Date</th>
            <th >Assignees </th>
            <th >STATUS</th>
        </tr>
        <tr v-for="li in resultQuery"  :key="li.taskid"   style="height:60px;">
            <td width="70px" >{{ li.taskid }}</td>
            <td  >{{ li.name  }}</td>
            <td  width="350px" valign="top">{{ li.desc  }}
            </td>
            <td width="95px"  >{{ li.start }}</td>
            <td width="95px"  > {{ li.end   }} </td>
            <td width="120px"  >{{  li.people }} </td>
            <td  style="word-wrap:break-word;overflow-y:scroll;" width="200px" > {{ li.completed }}  </td>
            
        </tr>
         </table>
       </div>
    </div> 
       
    </div>
 
  </div>    
</template>

<script>
 
export default {
  name: "Search",
  

  props: ['db'] , 

  data() {
    return {
      name: '',
      people: '',
      taskid: 0,
      searchResult:'__ SEARCH RESULTS __' ,

      search: '' , 
      duplicate: this.db, 
 
    };
  },

  emits: ['openform'],
 
  computed :{
             resultQuery() {

      if (this.search) {
         return this.duplicate.filter((item) => {
                let k = Number(this.search)
                
          let byTask = item.taskid === k  ? true : false  ; 

          let byName =
            item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
          let byGenre =
            item.people.toLowerCase().indexOf(this.search.toLowerCase()) > -1;

          if (byName === true) {
            return byName;
          } 
          else if (byGenre === true) {
            return byGenre;
          }
          else if( byTask === true )
           return byTask; 
          else {
            return ;
          }
             
        });

      } 
      else {
         return []  ;
      }
    } ,

  } ,
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

input[type="submit"] {
  width: 10vw ; 
}
 
.button-container > button {
  padding: 10px;
  margin: 10px;
}

.history {
  background-color: #ba4978;
}

 table {
        width:  90vw ;
        align-content:left ; 
    }

    .table-container{
        display:grid ;
        grid-template-columns: 5fr;
        height: 90px ;
        overflow-y: scroll;
        margin-bottom: 20px;

    }
</style>
