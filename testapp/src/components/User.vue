<template>
    <button @click="ageUp">Update Age</button>
    <p> You are {{ age }} Years old </p>
</template>

<script>
export default {
  name: 'User',
  props:['age'] , 

  emits: ['age-up'] , 
 
  methods : {
    ageUp(){
      this.$emit('age-up') ; 
    }
  } ,
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
