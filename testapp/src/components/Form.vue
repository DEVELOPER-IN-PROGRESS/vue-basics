<template>
    <form>
        <div class="help">
        <slot name="help"></slot>
       </div>
       <div class="fields"> 
            <slot name="fields"></slot>
       </div>
       <div class="buttons">
            <slot name="buttons"></slot>
       </div>  
       <slot>Default slot markup</slot>
   </form>
</template>

<script>
export default {
   name: 'AppForm' ,
}
</script>

<style>

</style>