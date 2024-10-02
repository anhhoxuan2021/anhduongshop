<template>
    <div class=" absolute z-index-10 w-94 bg-white rounded-top-none"  v-if="show">
        <ul class="filter-product p-t-1">
            <li class="product-selected" v-for="(item, index) in filtervalue" :key="item.prd_id" 
            @click="specificProduct(item.prd_id,item.prd_type_group)" >
                {{item.prd_name}}
            </li>            
        </ul>
    </div>
</template>

<script lang="ts"> 
    
    export default {    
       props:{
            filtervalue: [] as any[],   
            show: Boolean   
       },
       computed:{
       
       },
       methods:{
        specificProduct(prd_id: number, prd_type_group:string){
            if(prd_type_group =="Fashion"){
                window.location.replace("http://localhost:5173/fashion/"+prd_id);
            }else if(prd_type_group =="Laptop"){
                window.location.replace("http://localhost:5173/laptop/"+prd_id);
            }            
        }
       },
    }
</script>