<template>
        
   <div class="table-container">
       <div>
         <table border="1">
        <tr>
            <th>Task#ID</th>
            <th>Task Name</th>
            <th  >Description</th>
            <th >Start Date</th>
            <th >End Date</th>
            <th >Completed on</th>
            <th >Assignees</th>
        </tr>
        <completedlist :db="db" ></completedlist>
         </table>
       </div>
    </div>
   
     

 </template>

 <script>
import Completedlist from './Completedlist.vue' ;

  export default{
      name: 'Completed' , 
      props: ['db'] , 
      components : {
          Completedlist ,
      }
      ,
      data() {
          return{

          }
      },
  }
 </script>
 
<style scoped>
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