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
    <div class="provide-inject">
        <list></list>
    </div>
    <button @click="changeName">Change Name</button>
</template>

<script>
// import AppForm from './components/Form.vue' 
 import List from './components/List.vue' 

export default {
  name: 'App',
  components: {
      List
  } ,
  data() {
    return {
       bucketList: ['Travel Abroad' , 'Write Everyday' , 'Cook a meal atleast everyday' , 'Clean room once a week'] ,
       user : 'Francesco' , 
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

 