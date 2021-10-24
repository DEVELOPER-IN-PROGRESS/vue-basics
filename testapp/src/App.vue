<template> 
   <button type="button" @click="flag = !flag" >TOGGLE </button>
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

    <!-- <select v-model="optionName">
        <option value="Home"> HOME </option>
        <option value="About"> ABOUT </option>
        <option value="Contact"> CONTACT US </option>
    </select>

    <keep-alive>
       <component :is="optionName" ></component>
    </keep-alive> -->


   <!-- Animation -->
    <!-- <transition name="zoom" type="animation" appear>
      <h2 v-if="flag" key="t1">hey Y'all </h2>
    </transition> -->
 
   <!-- Animation with  JS -->
    <transition 
      name="zoom"
      type="animation"
     @before-enter="beforeEnter"
     @enter="enter"
     @after-enter="afterEnter"
          @before-leave="beforeLeave"
     @leave="leave"
     @after-leave="afterLeave"
     :css="true"
     appear>
      <h2 v-if="flag" >hey Y'all </h2>
    </transition>
 

</template>

<script>
// import AppForm from './components/Form.vue' 
 //import List from './components/List.vue' 
// import  Home from './components/Home.vue' 
// import  About from './components/About.vue' 
 //import  Contact from './components/Contact.vue' 

export default {
  name: 'App',
  components: {
    
  } ,
  data() {
    return {
       bucketList: ['Travel Abroad' , 'Write Everyday' , 'Cook a meal atleast everyday' , 'Clean room once a week'] ,
       user : 'Francesco' , 
       optionName : 'Home' , 
       flag: true  , 
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

   beforeEnter(el){
      console.log('before-enter hook activated' ,el );
   }, 

   enter(el){
      console.log('enter hook activated ' ,el );
    
   //  const animation =   el.animate([ { transform : "scale3d(0,0,0)"} , {}] , {
   //       duration: 1000 ,
   //    }) ; 
   //    animation.onFinish = () =>{  
   //    done();
   //    }
   }, 

   afterEnter(el){
      console.log('after-enter hook activated' ,el );      
   }, 

   beforeLeave(el){
      console.log('before-leave hook activated' ,el );      
   }, 

   leave(el){
      console.log('Leave hook activated' ,el );            
      
      //   const animation =   el.animate([ {} ,{ transform : "scale3d(0,0,0)"} ] , {
      //    duration: 1000 ,
      // }) ; 
      // animation.onFinish = () =>{  
      // done(); 
      // }
   }, 
  
   afterLeave(el){
      console.log('after-leave hook activated' ,el );      
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

h2{
   width: 400px ; 
   padding: 20px ;
   margin :20px ;
}

@keyframes zoom-in {
   from {
       transform: scale(0,0);

   }
   to {
             transform: scale(1,1);
   }
}

@keyframes zoom-out {
   from {
      transform: scale(1,1);
   }
   to {
         transform: scale(0,0);
   }
}

.zoom-enter-active{
animation: zoom-in 1s linear forwards;
transition: all 3s linear;
}

.zoom-leave-active{
      animation: zoom-out 1s linear forwards;
   transition: all 1s linear;
}

.zoom-enter-from{
   opacity: 0;
}

.zoom-leave-to{
   opacity: 0;
}

 </style>