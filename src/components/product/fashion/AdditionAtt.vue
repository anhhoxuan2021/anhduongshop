<template>
 <div class="prd_att">
    <div class="row">
        <div class="col">
            <label>Product Color</label>
            <input class="mt-2 form-control prd_color" type="text" v-model="prd_color" >
        </div>
    </div>
    <div class="row mt-3">
        <div class="col">
           <ProductSize />
        </div>
    </div>
  
    <AdditionAttImg />

    <div class="row my-3">
        <div class="col border-t"></div>
    </div>
 </div>   
</template>
<script lang="ts">
    import { api_img_path } from '@/services/pathFile'
    import ShowAttImg from './ShowAttImg.vue';
    import ProductSize from './ProductSize.vue';
    import AdditionAttImg from './AdditionAttImg.vue';

    const config = api_img_path
    export default{
        components:{
            ShowAttImg,
            ProductSize,
            AdditionAttImg
        },
        
        data(){
            return{
                prd_color:'',
            }            
        },
        methods:{
           
        },
        mounted() {            
            const plugin = document.createElement("script");
            plugin.setAttribute(
            "src",
            "/js/library_images.js"
            );
            plugin.async = true;
            document.head.appendChild(plugin);
        }
    }
</script>
