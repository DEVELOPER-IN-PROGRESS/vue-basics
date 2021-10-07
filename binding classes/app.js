let vm = Vue.createApp({
    data() {
        return {
            isPurple: false ,
            selectColor: '' ,
         }
    } ,

    computed: {
        circle_classes(){
          return { 
        purple : this.isPurple 
       }    
    }}
}).mount('#app'); 