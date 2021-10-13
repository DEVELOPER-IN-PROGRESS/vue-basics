<template>
   
     <tr v-for="item in filteredTasks"  :key="item.taskid" style="height:70px;">
            <td width="70px" >{{ item.taskid }} </td>
            <td> {{item.name}} </td>
            <td   width="350px" valign="top">{{ item.desc}}
            </td>
            <td width="95px"  > {{item.start }}</td>
            <td width="95px"  >{{item.end}}</td>
            <td   width="200px" valign="center"> {{ item.people }}</td>
            <td> 
                <div class="buttons-container"> 
                        <button href="#"  @click=" $emit('pop-up') ; 
                           $emit('edit-b' ,item.taskid , item.name , item.desc , item.start , item.end , item.people) ;" class="tt-atom-btn">
                            Edit 
                        </button> 

                        <button href="#" @click="markItem(item.taskid)" class="tt-atom-btn complete">
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
                    currentTaskid: 0 , 
                }
            } , 

            emits: ['edit-b' , 'pop-up'],

          methods: {
              
            markItem(id){
                return this.db.forEach( (item)=> { if(item.taskid ===id){
                    item.completed = true ; 
                    item.completedOn = new Date().toLocaleDateString() ;    
                }
                })
            } ,  

          
          },

          computed : {
            filteredTasks() {
                return  this.db.filter( item => item.completed === false  )
            } ,

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