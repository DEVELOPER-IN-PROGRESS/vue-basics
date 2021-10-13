<template>
        <h2>Ongoing Tasks</h2>
 
        <div class="task-container" v-cloak>
                <div class="table-container">
                <table border="1">
                <tr>
                <th>Task#ID</th>
                <th>Task Name</th>
                <th  >Description </th>
                <th >Start Date</th>
                <th >End Date</th>
                <th >Assignees</th>
                <th>Actions </th>
                </tr>
                    <Inprogress 
                      @pop-up="demo"
                       @edit-b="editForm"
                        :db="this.db" 
                         ></Inprogress>
                </table>
                </div>
                </div>
</template>

<script>

import Inprogress from './Inprogress.vue' ;

  export default{
      name: 'Ongoing' , 
      props: ['db' ,] ,

      components : {
          Inprogress , 
      } ,

      data() {
          return{

          }
      },
         methods: {
            demo(){
             //console.log('inside ongoing task' , num );
            this.$emit('pop-u');

        } , 

          editForm(random ){
            
                 this.$emit('edit-task' ,random) ;
                
                //, item.name , item.desc , item.start , item.end , item.people
             }

      
      }
  }  
</script>

<style >
    table {
        width:100% ; 
        align-content:left ; 
    }

    /* td, th , tr{
        border :1px dashed black ; 
    } */



 .task-container {
    display: grid;
    grid-template-columns: 5fr ;
    grid-gap: 10px;
    /* border:1px solid red ;  */
    margin:2px 0px; 
    align-items: center;
    height: 200px;
    overflow-y:scroll ;
 }
</style>