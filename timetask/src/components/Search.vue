<template>
  <div >
    <div>
    <h1>Time Task Clone</h1>
    
    <div id="search-bar" class="search">
      <!-- <label for="options">search by :</label>
      <select name="options" v-model="selected" @change="demo()">
        <option value="taskid">task-id</option>
        <option value="name">task-name</option>
        <option value="person">person</option>
      </select> -->

      
<!-- 
  <input v-if="this.searchtype === 'number'"  placeholder="Search with taskid" type="number" v-model="taskid" min="1000" @input="handleNum"/>
        <input v-else-if="  this.searchtype === 'name'"  placeholder="Search with taskname"  type="text" v-model="name"  @input="handle"/> 
            <input v-else  placeholder="Search with person" type="text" v-model="people"  @input="handle"/> 
              <input type="submit"  /> -->

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

  methods: {

    demo() {
 
      switch(this.selected){
        case 'taskid':  this.searchtype = 'number' ; break ; 

        case 'name':   this.searchtype = 'name' ; break ; 
          
        case 'person':    this.searchtype = 'person' ; break ; 
      }

 console.log('Searchtype' ,  this.searchtype ) ; 
      
      console.log("here" , this.duplicate) ; 
   

      },

      checkInput(){
          if(this.name === '' && this.people==='' && this.taskid === 0){
            alert('invalid') ; 
          }
          
      }, 
     

    handle(e){
        let searchString = e.target.value ; 
        searchString = searchString.toLowerCase() ;
        console.log("S = " , searchString);   

        console.log('people' , this.people);
        console.log('name', this.name); 

        if(this.people != ''){
           this.filterDb('people', searchString ) ;
        }
        else {
          this.filterDb('name' , searchString) ; 
        }
          
    },

    

      handleNum(e){
        let k =  e.target.value
        console.log("num= " , k); 
        
        k = Number(k);
         this.filterDb('taskid',  k) ;
       } ,

      filterDb( key , value ){
        if(key==='taskid'){
             this.db.filter( item => { 
          if(item.taskid === value )
          { 
            this.returnItem =item ;
             }
        
        })
        }

        else if(key==='people'){

          this.db.filter ( item =>  {  
                  if(item.people.toLowerCase().search(`${value}`) === value ){ 
             console.log(item) ;
             this.returnItem =item ;
            }               
          })
        }
        
        else {
           this.db.filter ( item =>  {  if(item.name.toLowerCase().search(`${value}`) ===value ){ 
             console.log(item) ;
             this.returnItem =item ;
            }               
          })
        }
       
       console.log(this.returnItem) ; 
    } ,

  

  },

  computed :{
             resultQuery() {

      if (this.search) {
       // let empty = 10 ; 
        return this.duplicate.filter((item) => {
                let k = Number(this.search)

          let byTask = item.taskid === k  ; 

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
