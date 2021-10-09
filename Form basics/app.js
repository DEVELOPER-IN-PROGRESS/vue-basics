let vm = Vue.createApp({
    data() {
        return {
             message: '',
         }
    } ,

    computed: {
    
    }
}).mount('#form'); 


Vue.createApp({
    data() {
      return {
        message: ''
      }
    }
  }).mount('#textarea');

  Vue.createApp({
    data() {
      return {
        checkedNames: []
      }
    }
  }).mount('#v-model-multiple-checkboxes')