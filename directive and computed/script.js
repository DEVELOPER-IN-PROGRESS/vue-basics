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

// computed methods

const app = Vue.createApp({
   data() {
       return {  
            author :{
             name : 'Boba Fett' , 
             books : [
                 'Vue For dummies ' , 
                 'Vue mastery ' ,
                 'Vue API References ' , 
             ] ,
            }
     }
   } , 

   computed: {
       // a computed getter 
       publishedBooks() {
        return this.author.books.length > 0 ? 'Sì' : 'Nunca' ; 
       }
   }
}).mount('#computed'); 

// custom watchers 

