<template>
     
   <div class="task-container" v-cloak>
       
        <div class="table-container">
         <table border="1">
        <tr>
            <th>Task#ID</th>
            <th>Task Name</th>
            <th  >Description</th>
            <th >Start Date</th>
            <th >End Date</th>
            <th >Assignees</th>
        </tr>
        <tr style="height:50px;">
            <td width="70px" >1000</td>
            <td  > bebeb</td>
            <td rowspan="4" style="word-wrap:break-word;overflow-y:scroll;" width="350px" valign="top">Random Description goes 
                here . 
            </td>
            <td width="95px"  >22-09-1991</td>
            <td width="95px"  >16-12-1991</td>
            <td rowspan="4" style="word-wrap:break-word;overflow-y:scroll;" width="200px" valign="top">francesco pagliei </td>
        </tr>
         </table>
    </div>
   
    <div class="buttons-container">
          <button href="#"  class="tt-atom-btn">
        Edit Task 
    </button>

    <button href="#"  class="tt-atom-btn complete">
        Mark as complete
    </button>
    </div>


   </div>
</template>

<script>
  export default{
      name: 'Ongoing' , 
      data() {
          return{

          }
      }
  }
</script>

<style scoped>
    table {
        width:80vw ; 
        align-content:left ; 
    }

    /* td, th , tr{
        border :1px dashed black ; 
    } */

.complete {
    background-color:#41b883;
    font-size: 15px;
    padding: 4px    ;
}

.buttons-container{
    display: flex;
    flex-direction: column;
 }

 .buttons-container > button {
     margin : 5px 10px; 
 }

 .task-container {
    display: grid;
    grid-template-columns: 5fr 1fr ;
    grid-gap: 10px;
    /* border:1px solid red ;  */
    margin:2px 0px; 
    align-items: center;
 }
</style>