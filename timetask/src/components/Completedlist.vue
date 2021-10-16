<template>
    <tr v-for="item in fin"  :key="item.taskid" style="height:60px;">
            <td width="70px" >{{ item.taskid }}</td>
            <td  >{{ item.name}}</td>
            <td  width="350px" valign="top">{{ item.desc }}
            </td>
            <td width="95px"  >{{ item.start }}</td>
            <td width="95px"  > {{ item.end}} </td>
            <td width="120px"  >{{ item.completedOn }} </td>
            <td  style="word-wrap:break-word;overflow-y:scroll;" width="200px" > {{ item.people}} </td>
        </tr>
</template>

<script>
export default {
    name: 'Completedlist' ,
    props: ['fin'] ,
      
}
</script>

<style>

</style>