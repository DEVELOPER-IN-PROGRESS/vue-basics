const app = Vue.createApp({})
 
app.component('base-input', {
  template: `
    <input ref="input" />
  `,
  methods: {
    focusInput() {
     console.log(this.$refs.input.focus()); 
    }
  },
  mounted() {
    console.log('Component mounted'); 
    this.focusInput()
    this.$refs.input.focusInput() ;

  }
})

app.mount('#app');