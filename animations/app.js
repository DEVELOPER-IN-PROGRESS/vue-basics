 
const Demo = {
  data() {
    return {
      noActivated: false ,
      x : 0 ,
    }
  } ,

  methods: {
    focusInput() {
      this.$refs.input.focus()
    } ,

    xCoordinate(e) {
      this.x = e.clientX
    },


  },
  
}

 
 


Vue.createApp(Demo).mount('#demo')

