<template>
 <div>
   <Search :db="db" @openform="doubleForm"></Search>

   <taskform v-if="isActive" 
     @close-form="this.isActive=false" 
     @saveto-app="submitForm"
        formTitle="CREATE A TASK" 
        buttonText="SUBMIT"
      ></taskform>
 
      <editform 
       @close-forma="this.edit.aceess=false"
       @upto-app="updateForm"
       v-if="edit.access" 
        :edit="edit" 
          formTitle="UPDATE TASK" 
            buttonText="UPDATE"></editform>



   <Ongoing 
      :db="db" 
         @edit-task="taskMod"      
         :id="id"
      ></Ongoing>

   <h2>Completed List Of Tasks</h2>
  <Completed :db="db"></Completed>
  </div>
</template>

<script>
import Ongoing from './components/Ongoing.vue'
import Search from './components/Search.vue'
import Completed from './components/Completed.vue' 
import Taskform from './components/Taskform.vue'
import Editform from './components/Editform.vue'

  
export default {
  name: 'App',
  components: {
    Search,
    Ongoing ,
    Completed ,
    Taskform , 
    Editform ,
   } , 
   
   data() {
     return {
        isActive : false , 

        tidMax: 1006 , 

         edit :{
          name : '' ,
           desc : '' ,
           start: '2021-10-10' ,
           end: '2021-1ohn wick0-10' ,
           people: 'j ' ,
           access: false , 
           id: 0 , 

        } ,

        db :
         [
             {  taskid : 1000 ,  name : 'DEM',  desc:'Miamo DEM' , start: '2021-10-06' , 
              end : '2021-10-12' ,  completed: 'Not Completed' , people:'nikhil' , completedOn: null ,
            } ,
            {  taskid : 1001 ,  name : 'WP',  desc:'Manfredi hotels' , start: '2021-10-06' , 
              end : '2021-10-13' ,  completed: 'Not Completed' , people:'unni' , completedOn: null ,
            } ,
            {  taskid : 1002 ,  name : 'Sys',  desc:'Developer Operations ' , start: '2021-10-08' , 
              end : '2021-10-14' ,  completed: 'Completed' , people:'johns' , completedOn: '2021-10-13' ,
            } ,
            {  taskid : 1003 ,  name : 'DEM',  desc:'LVB DEM OTTOBRE' , start: '2021-10-11' , 
              end : '2021-10-12' ,  completed: 'Not Completed' , people:'jophin' , completedOn: null ,
            } ,
            {  taskid : 1004 ,  name : 'WP',  desc:'Pompei website maintenance' , start: '2021-10-21' , 
              end : '2021-10-22' ,  completed: 'Not Completed' , people:'susan , francesco ' , completedOn: null ,
            } ,
            {  taskid : 1005 ,  name : 'Onsite',  desc:'AEM onsite updations' , start: '2021-11-11' , 
              end : '2021-11-14' ,  completed: 'Not Completed' , people:'meera' , completedOn: null ,
            } , 
        ]
    


     }
   } ,  

  methods: {
        submitForm(name, title ,ds, de, dp ){
           this.isActive = false ;
         this.db.push({  taskid : this.tidMax ,  name : name,  desc: title , start: ds , 
              end : de ,  completed: false , people: dp , completedOn: null ,
            }) ;
          this.tidMax++ ; 
        } ,
  
          updateForm(name,desc,start,end,people , num ){
               this.db.filter( item => { if(item.taskid===num){
                    item.name = name;
                    item.desc = desc; 
                    item.start = start ; 
                    item.end = end ; 
                    item.people = people ; 
              } }) ; 


              this.edit.access = false ; 
          },

        
      taskMod(num ,name,desc,start,end,people){
         console.log(num ,name,desc,start,end,people);
          this.edit.access = true ; 
          this.isActive = false ; 
          setTimeout( ()=>{ }, 100); 
          window.scrollTo(0,0);
 
          this.edit.name = name; 
          this.edit.desc = desc ; 
          this.edit.start = start ; 
          this.edit.end = end ; 
          this.edit.people = people ;
          this.edit.id = num ; 


        } ,

       doubleForm(){
          this.isActive = true ; 
          this.edit.access = false ; 
       } ,
       rand(a){
         console.log(a);
       }
  } ,

    
  computed : {
   
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
