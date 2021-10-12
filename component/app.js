const vm = Vue.createApp({}); 

// vm.component('button-counter', {
//   data() {
//     return {
//          count: 0,
//      }
// } ,

//  props: [

//  ] , 
//  template: `
//  <button @click="count++"> You clicked me {{count }} times</button>`
// }) ;

// vm.mount('#components-demo');


vm.component('blog-post', {
  data(){ 
    return {
      props: '',
    }
  },

  props: ['title'],
  template: `<h4>{{ title }}</h4>`
})

vm.mount('#blog-post');

//child components events

const App = { 
  data() {
    return {
       posts: [
        { id: 1, title: 'My Experiments with Vue'},
        { id: 2, title: 'Blogging with Vue'},
        { id: 3, title: 'Why Vue is necessary '}
       ],

       pFontSize: 1 , 
    }
  }
}

const app = Vue.createApp(App) ; 

app.component('blog-post' , {
   props: ['title'] , 
   template: `
   <div class="blog-post">
   <h4>{{title}}</h4>
   <button @click="$emit('enlargeText')">Enlarge Text</button>
    </div>
   `
}) ; 

app.mount('#blog-post-events-demo'); 