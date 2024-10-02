<template>
    <div class="d-flex flex-row  fit-box py-3">
        <span class="prd-libray-img me-1" v-for="img in images" :key="`${img}`">
                <img class="img-thumbnail img-selected-source" :src="`${path_img1}${img}`" alt="Thiet ke web Anh Ho" style="cursor: pointer">
        </span>
    </div>
    
</template>
<script lang="ts">
        import { api_img_path } from '@/services/pathFile'
    const config = api_img_path
    export default{
        props:{
            sameImages:String,
            productImage:String,
        },
        data(){
            return{
                images:<String[]>([]),
                path_img1:config,
            }            
        },
        created(){
            let imagesTemp = this.sameImages
            //console.log("aa="+imagesTemp)
            if(imagesTemp !='' && imagesTemp?.includes(",")){
                this.images = imagesTemp.split(",")  
            }else{
                this.images.push(imagesTemp!)
            }
           // console.log("ig="+this.images)
        },
        methods:{

        },
        mounted() {
            // let imagesTemp = this.sameImages
            // if(imagesTemp !='' && imagesTemp?.includes(",")){
            //     this.images = imagesTemp.split(",")  
            // }else{
            //     this.images.push(imagesTemp!)
            // }

            //this.images.unshift(this.productImage!)
            //console.log(this.images)
        },
    }
</script>
