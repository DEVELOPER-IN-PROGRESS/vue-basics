<template>
 
     <tr v-for="item in filteredTasks"  :key="item.taskid" style="height:70px;">
            <td width="70px" >{{ item.taskid }}</td>
            <td> {{item.name}} </td>
            <td   width="350px" valign="top">{{ item.desc}}
            </td>
            <td width="95px"  > {{item.start }}</td>
            <td width="95px"  >{{item.end}}</td>
            <td   width="200px" valign="center"> {{ item.people }}</td>
            <td> 
                <div class="buttons-container">
                        <button href="#" @click="demo"  class="tt-atom-btn">
                            Edit 
                        </button> 

                        <button href="#"  class="tt-atom-btn complete">
                            Mark as complete
                        </button>
                 </div>
            </td>
         </tr>
 
</template>

<script>
export default {
            name: 'Inprogress' , 

            props : ['db'] ,
            data () {
                return  {

                }
            } , 

          computed : {
            filteredTasks() {
                return  this.db.filter( item => item.completed === false  )
            }
        }

}
</script>

<style scoped>
.complete {
    background-color:#41b883;
    font-size: 15px;
    padding: 4px    ;
}

.buttons-container{
    display: flex;
    flex-direction: row ;
 }

 .buttons-container > button {
     margin : 5px; 
 }



</style>