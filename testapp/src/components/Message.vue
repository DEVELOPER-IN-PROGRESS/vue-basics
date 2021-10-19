<template>
   <div>
      <p v-if="age>25"> {{ msg }} </p>
       <p v-else-if="age<26">You must be old than 25 inorder to understand this  </p>
   </div>
</template>

<script>
export default {
    name : 'Message' , 
    props : { 
        age: {
            type: Number ,
        } ,
    } ,
    data() {
        return  { 
            msg: 'Edmond dantes was the Count of Monte Cristo '
        }
    } , 

}
</script>

<style>

</style>