let vm = Vue.createApp({
    data() {
        return {
             items: [
                 { message: 'Berlin' ,} ,
                 { message: 'Marseille' ,} ,
                 { message: 'Jakov' ,} ,
                 { message: 'Sicily' ,} ,
                 { message: 'Florence' ,} ,
             ]
         }
    } ,

    computed: {
    
    }
}).mount('#list-rendering'); 

Vue.createApp({
    data(){
        return {
            parentMessage: 'Parent' ,
            items : [
                {message : 'Fennec Shand'} ,
                {message : 'Moff Giedon'} ,
                {message : 'Django Fett'} ,

            ]
        }
    } ,


}).mount('#list-index'); 

Vue.createApp({
    data(){
        return {
            testObject: {
                name : 'James Clear' ,
                book : 'Atomic Habits' ,
                publishedOn : '05-09-2020' ,
            }
        }
    } ,

}).mount('#object');