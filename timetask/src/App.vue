<template>
 <div>
   <Search @openform="this.isActive=true"></Search>
   <taskform v-if="isActive"  @close-form="this.isActive=false" @saveto-app="submitForm()"></taskform>
   <Ongoing :db="db"></Ongoing>
   <h2>Completed List Of Tasks</h2>
  <Completed :db="db"></Completed>
  </div>
</template>

<script>
import Ongoing from './components/Ongoing.vue'
import Search from './components/Search.vue'
import Completed from './components/Completed.vue' 
import Taskform from './components/Taskform.vue'
//import Inprogress from './components/Inprogress.vue'

export default {
  name: 'App',
  components: {
    Search,
    Ongoing ,
    Completed ,
    Taskform , 
    
   } , 
   
   data() {
     return {
        isActive : false , 
        db :
         [
             {  taskid : 1000 ,  name : 'DEM',  desc:'Miamo DEM' , start: '09-10-21' , 
              end : '12-10-21' ,  completed: false , people:'nikhil' , 
            } ,
            {  taskid : 1001 ,  name : 'WP',  desc:'Manfredi hotels' , start: '06-10-21' , 
              end : '13-10-21' ,  completed: false , people:'unni' , 
            } ,
            {  taskid : 1002 ,  name : 'Sys',  desc:'Developer Operations ' , start: '08-10-21' , 
              end : '9-10-21' ,  completed: true , people:'johns' , 
            } ,
            {  taskid : 1003 ,  name : 'DEM',  desc:'LVB DEM OTTOBRE' , start: '11-10-21' , 
              end : '12-10-21' ,  completed: false , people:'jophin' , 
            } ,
            {  taskid : 1004 ,  name : 'WP',  desc:'Pompei website maintenance' , start: '01-10-21' , 
              end : '22-10-21' ,  completed: false , people:'susan , francesco ' , 
            } ,
            {  taskid : 1005 ,  name : 'Onsite',  desc:'AEM onsite updations' , start: '11-10-21' , 
              end : '12-10-21' ,  completed: false , people:'meera' , 
            } , 
        ]
    
     }
   } , 

  methods: {
        submitForm(name, title ,ds, de, dp ){
          console.log(name, title , ds ,de, dp );
          this.isActive = false ;
      
        }
  } ,

  computed : {

     lsUpdate() {
        if(!localStorage.getItem('tt')) {
          localStorage.setItem('tt' , {taskid : this.taskid , name : '' , start: '' , end : '' , completed: false , });
        console.log('Database created') ; 
        }
        return true ; 
     } ,
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  display: grid;
  place-items: center ;
}

.container {
  width:95vw ; 
  margin: 0 auto ;
}

h1{
  font-size: 3.5rem;
}
h2 {
  font-size:2.5rem;
}

.tt-atom-btn  {
  background-color:#3ca6d3;
  border: none; 
  height: 40px;
  min-width:69px;
  padding: 10px;
  color: white;
  font-size: 19px ;
  font-weight: 400 ;
}

button{
  cursor: pointer ; 
}

[v-cloak] {
  display: none; 
}

#tasks-collection{
  height:200px ; border :1px solid red ; 
  overflow-y: scroll;
}
</style>
