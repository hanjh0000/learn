<template>
   <div>
   <Banner/>
   <todo/>
   
   </div> 
</template>
<script>
import Banner from "./components/banner.vue"
import todo from "./components/todo.vue"
export default {
   data(){
       return{
           
       }
   } ,
   components:{
       Banner,
       todo,

   }
}
</script>
<style>

</style>



