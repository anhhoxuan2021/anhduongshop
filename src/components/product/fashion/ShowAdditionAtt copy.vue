<template>
 <div class="prd_att">
    <div class="row">
        <div class="col">
            <label>Product Color</label>
            <input class="mt-2 form-control prd_color" type="text" v-model="prd_color">
        </div>
    </div>
    <div class="row mt-3">
        <div class="col">
            
        </div>
    </div>
    <div class="row mt-3">
        <div class="col clicked  specific-image">
            <div class="row"><div class="col specific-img"  style="cursor: pointer;"><strong>+ SECLECT SPECIFIC IMAGE</strong></div></div>
            <div class="row mt-2">
                <div class="col">
                    <ShowAttImg :sameImages="secificImg"/>
                    <input type="hidden" class="image-spec" :value="secificImg">
                </div>
            </div>
        </div>
    </div>


    <div class="row mt-3">
        <div class="col clicked addition-images">
            <div class="row"><div class="col addition-img"  style="cursor: pointer;"><strong>+ ADD ADDITION IMAGES</strong></div></div>
            <div class="row mt-2 mb-3">
                <div class="col">
                    <ShowAttImg :sameImages="additionImg"/>
                    <input type="hidden" class="image-added" :value="additionImg">
                </div>
            </div>
        </div>
    
    </div>
</div>    
</template>
<script lang="ts">
    import { api_img_path } from '@/services/pathFile'
    import ShowAttImg from './ShowAttImg.vue'

    const config = api_img_path
    export default{
        components:{
            ShowAttImg
        },
        props:{
            prd_colors:String,
            prd_sizes: String,
            secificImg: String,
            additionImg: String,
            isClass: {
                type:Boolean,
                required: false,
                default: false
            }

        },
        data(){
            return{
                prd_color:this.prd_colors,
                isSizeS: '',
                isSizeM: '',
                isSizeL: '',
                isSizeXL: '',
                prd_size: this.prd_sizes,                
                prd_size_s:'',
                prd_size_m:'',
                prd_size_l: '',
                prd_size_xl: '',

                prd_s_price: 0,
                prd_m_price: 0,
                prd_l_price: 0,
                prd_xl_price: 0,
                prd_s_regular_price: 0,
                prd_m_regular_price:0,
                prd_l_regular_price: 0,
                prd_xl_regular_price: 0,
            }            
        },
        methods:{
            returnSize(){
                if(this.prd_sizes=='S'){
                  return   this.isSizeS = "checked"
                }else if(this.prd_sizes=='M'){
                    return   this.isSizeM = "checked"
                }else if(this.prd_sizes=='L'){
                    return   this.isSizeL = "checked"
                }
                else{
                    return   this.isSizeXL = "checked"
                }

            }
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
