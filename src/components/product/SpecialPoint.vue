<template>
   <div class="row my-3">
      <div class="col col-md-6 col-sm-15 col-xs-12">
         <div class="d-flex flex-row">
            <div class="square-15 m-t-2"></div>
            <div class="bold ps-2 title-header">Special Points</div>
         </div>
      </div>
   </div>
   <div v-if="specialPoints !=null && specialPoints !='null'">
      <div :class="['mb-3',{'m-l--15':isPadding},{'f-18':!isPadding}]"  v-html="specialPoints"> </div>   
   </div>
  
</template>
<script lang="ts">
   export default{
      props:{
         specialPoints: String,
         isPadding: Boolean

      }
   }
</script>