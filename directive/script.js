const vm = Vue.createApp({
    data() {
        return {
             firstName: 'Baba' , 
             lastName: 'Yaga' , 
            } 
        } , 

    methods: {
        fullName(){
            return `${this.firstName} ${this.lastName} ` ; 
        } ,

    }
}).mount('#app')  ;


const app = Vue.createApp({
   data() {
       return {  count = 4 }
   }
}).mount();