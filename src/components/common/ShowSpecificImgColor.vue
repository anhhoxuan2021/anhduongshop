<template>
     <div class="f-15 my-3">Select color: <strong class="color-selected">{{ selectColor }}</strong></div>
    <div  v-bind:class="[{'pb-3':isClass},'d-flex','flex-row' ,'fit-box']">
        <span  v-bind:class="['prd-img-page product-images-span',{'me-1':isClass}]" v-for="(img, index ) in sameImages" :key="img" style="cursor: pointer;"
        :product_index="index" @click="changeFashionCarousel(index)">            
            <img 
            v-bind:class="['img-thumbnail product-images',{'img-selected-source':isClass},{'selected':index==0}]" 
            :src="`${path_img1}/${img.image}`" alt="Thiet ke web Anh Ho" :specificImage="img.image"  ref="refImages">
        </span>
    </div>
    
</template>
<script lang="ts">
    import { api_img_path } from '@/services/pathFile'
    const config = api_img_path
    export default{
        props:{
            sameImages:[],
            isClass: {
                type:Boolean,
                required: false,
                default: false
            }

        },
        data(){
            return{
              //  images:<String[]>([]),
                path_img1:config,
                color: '',
                index: 0,
            }            
        },
        computed:{
            selectColor(){
                if(this.sameImages.length >0){
                    this.color = this.sameImages[this.index].color
                }else{
                    this.color = "Unknow"
                }

                return this.color
            }
        },
        methods:{
            changeFashionCarousel(index:number){               
                this.$emit('getProductImgIndex', index);
                this.index = index
            }
        },
        mounted() {
            // let imagesTemp = this.sameImages
            // if(imagesTemp !='' && imagesTemp?.includes(",")){
            //     this.images = imagesTemp.split(",")  
            // }else{
            //     this.images.push(imagesTemp!)
            // }
           // console.log("images")
           $('.normal-id').on('click','.product-images-span',function(){
                $('.product-images.selected').removeClass('selected')
                $(this).find('.product-images').addClass('selected')
            })
            $('.specific-product').on('click','.prd-size',function(){
                $('.specific-product .prd-size.selected').removeClass('selected')
                $(this).addClass('selected')
            })
        }
    }
</script>
