<template>
        
        <div class="table-container">
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
        <tr style="height:50px;">
            <td width="70px" >1000</td>
            <td  > bebeb</td>
            <td rowspan="4" style="word-wrap:break-word;overflow-y:scroll;" width="350px" valign="top">Random Description goes 
                here . 
            </td>
            <td width="95px"  >22-09-1991</td>
            <td width="95px"  >16-12-1991</td>
            <td width="120px"  >16-12-1991</td>
            <td rowspan="4" style="word-wrap:break-word;overflow-y:scroll;" width="200px" valign="top">francesco pagliei </td>
        </tr>
         </table>
    </div>
   
     

 </template>

 <script>
  export default{
      name: 'Completed' , 
      data() {
          return{

          }
      }
  }
 </script>
 
<style scoped>

</style>