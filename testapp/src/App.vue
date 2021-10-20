<template> 
    <!-- <app-form>
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
    </app-form> -->

    <!-- <div class="provide-inject">
        <list></list>
    </div>
    <button @click="changeName">Change Name</button> -->

    <select v-model="optionName">
        <option value="Home"> HOME </option>
        <option value="About"> ABOUT </option>
        <option value="Contact"> CONTACT US </option>
    </select>

    <keep-alive>
       <component :is="optionName" ></component>
    </keep-alive>

</template>

<script>
// import AppForm from './components/Form.vue' 
 //import List from './components/List.vue' 
 import  Home from './components/Home.vue' 
 import  About from './components/About.vue' 
 import  Contact from './components/Contact.vue' 

export default {
  name: 'App',
  components: {
    
      Home , 
      About , 
      Contact , 
  } ,
  data() {
    return {
       bucketList: ['Travel Abroad' , 'Write Everyday' , 'Cook a meal atleast everyday' , 'Clean room once a week'] ,
       user : 'Francesco' , 
       optionName : 'Home' , 
    }
  },

  provide() {
      return {
      user :  this.user , 
      }
  } , 

  methods : {
    changeName() {
      console.log('click event');
        this.user='Boba Fett'
    },


  } ,

  computed : {
      userName(){
        return this
      }
  } , 
 
}
</script>

 <style scoped>
 select{
   display: block ; 
   margin-top: 40px ; 
 }
 </style>