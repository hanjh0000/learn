<template>
<div class="todo">
 <typein/>
 <jobs/>
 <dashboard/>
 </div>
  
</template>
<script>
import typein from "./typein.vue"
import dashboard from "./dashboard.vue"


export default {
  components:{
    typein,
    dashboard,
  }
}
</script>
<style scoped>
.todo{
  margin:0px auto;
  width: 600px;

}
</style>
