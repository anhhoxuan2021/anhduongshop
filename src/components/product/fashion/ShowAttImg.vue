<template>
    <div  v-bind:class="[{'pb-3':isClass},'d-flex flex-row fit-box image-spec-div image-added-div ']">
        <span  v-bind:class="['prd-img-page product-images-span relative me-2',{'me-1':isClass}]" v-for="(img, index ) in images" :key="img" 
        :product_index="index">            
            <img 
            v-bind:class="['img-thumbnail product-images',{'img-selected-source':isClass},{'selected':index==0}]" 
            :src="`${path_img1}/${img}`" alt="Thiet ke web Anh Ho" :img_name="img"  ref="refImages">
            <span class="product-images-span-delete absolute c-cd1818 r-2 box-2 text-right " style="cursor: pointer;">X</span>
        </span>
    </div>
    
</template>
<script lang="ts">
    import { api_img_path } from '@/services/pathFile'
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
        mounted() {
            if(this.sameImages !=undefined){
                let imagesTemp = this.sameImages
            if(imagesTemp !='' && imagesTemp?.includes(",")){
                this.images = imagesTemp.split(",")  
            }else{
                this.images.push(imagesTemp!)
            }
            }
           
         // console.log(this.images)
        //    $('.normal-id').on('click','.product-images-span',function(){
        //         $('.product-images.selected').removeClass('selected')
        //         $(this).find('.product-images').addClass('selected')
        //     })
        //     $('.specific-product').on('click','.prd-size',function(){
        //         $('.specific-product .prd-size.selected').removeClass('selected')
        //         $(this).addClass('selected')
        //     })
        }
    }
</script>
