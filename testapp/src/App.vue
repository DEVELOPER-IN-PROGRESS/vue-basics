<template> 
    <app-form>
       <template v-slot:help>
          <p>Need some Help here ? </p>
       </template>
       <template v-slot:fields>
          <input type="email" placeholder="email" />
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
        </template>
       <template v-slot:buttons>
          <button type="submit" >Submit</button>
       </template>  
       <p>Slot Number 1</p>
    </app-form>

    <app-form>
       <template v-slot:help>
          <p>Contact Text Help  ? </p>
       </template>
       <template v-slot:fields>
          <input type="email" placeholder="email" />
          <input type="text" placeholder="username" />
        </template>
       <template v-slot:buttons>
          <button type="submit" >Submit</button>
       </template>  
    </app-form>
</template>

<script>
 import AppForm from './components/Form.vue' 

export default {
  name: 'App',
  components: {
      AppForm ,
  } ,
  data() {
    return {
      
    }
  },

  methods : {
     


  } , 
 
}
</script>

 