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