<template>
   <Search />
   <Ongoing />
   <h2>Completed List Of Tasks </h2>
  <Completed />
</template>

<script>
import Ongoing from './components/Ongoing.vue'
 import Search from './components/Search.vue'
import Completed from './components/Completed.vue'


export default {
  name: 'App',
  components: {
    Search,
    Ongoing ,
    Completed ,
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
  width:169px;
  border-radius:20px;
  padding: 10px;
  color: white;
  font-size: 19px ;
  font-weight: 400 ;
}

[v-cloak] {
  display: none; 
}

#tasks-collection{
  height:200px ; border :1px solid red ; 
  overflow-y: scroll;
}
</style>
