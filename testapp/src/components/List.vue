<template>
    <p>Inside Child component</p>
    <h2>Injected User name : {{this.user}} </h2>
</template>

<script>
 
 export default {
    name:'List' ,

    inject : ['user'] ,

    created() {
        console.log(`Injected Property User's name  ${this.user}`)
    },
}
</script>
 