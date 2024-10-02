<template>
    <div  v-bind:class="[{'pb-3':isClass},'d-flex flex-column fit-box left-absolute']">
        <span  v-bind:class="['fashion-libray-img prd-img-page mb-2',{'me-1':isClass}]" v-for="(img, index ) in images" :key="img" style="cursor: pointer;"
        :slide_index="index" >            
            <img 
            v-bind:class="['img-thumbnail product-libary-img',{'img-selected-source':isClass},{'selected':index==0}]" 
            :src="`${path_img1}/${img}`" alt="Thiet ke web Anh Ho">
        </span>
    </div>
    
</template>
<script lang="ts">
    import { api_img_path } from '@/services/pathFile'
   // import * as external from '@/assets/js/products/fashion.js'
    const config = api_img_path
    export default{
        props:{
            sameImages:String,
            isClass: {
                type:Boolean,
                required: false,
                default: false
            }

        },
        data(){
            return{
                images:<String[]>([]),
                path_img1:config,
            }            
        },
        methods:{

        },
        created(){
            let imagesTemp = this.sameImages
            if(imagesTemp !='' && imagesTemp?.includes(",")){
                this.images = imagesTemp.split(",")  
            }else{
                this.images.push(imagesTemp!)
            }
        },
        mounted() {
            
            // const plugin = document.createElement("script");
            // plugin.setAttribute(
            // "src","../assets/js/products/fashion.js"
            // );
            // plugin.async = true;
            // document.head.appendChild(plugin);
        }
    }
</script>

<style scoped>
    .left-absolute{
        position: absolute;
        left: -80px;
        top:0
    }
</style>
