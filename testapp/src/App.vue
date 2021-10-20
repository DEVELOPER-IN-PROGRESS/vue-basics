<template> 
  <div id="app">
      <h2>Hey  Y'all </h2>
      <message :age="age"></message>
      <user @age-up="updateAge" :age="age" :ageFn="updateAgeCB"></user>
  </div>
</template>

<script>
import User from './components/User.vue'
import Message from './components/Message.vue'

export default {
  name: 'App',
  components: {
    User ,
    Message , 
  } ,
  data() {
    return {
      age : 15 , 
    }
  },

  methods : {
    updateAge(age){
      this.age += age; 
    },

    updateAgeCB(num){
       this.age += num ; 
    } ,



  } , 
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
