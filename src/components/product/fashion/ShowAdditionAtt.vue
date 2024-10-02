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
            <ProductSize
            :prod_sizes = "prod_sizes"
            :prod_prices = "prod_prices"
            :prod_regular_price = "prod_regular_price" />
        </div>
    </div>
    <div class="row mt-3">
        <div class="col clicked  specific-image">
            <div class="row"><div class="col specific-img"  style="cursor: pointer;"><strong>+ SECLECT SPECIFIC IMAGE</strong></div></div>
            <div class="row mt-2">
                <div class="col">
                    <ShowAttImg :sameImages="specificImg"/>
                    <input type="hidden" class="image-spec" :value="specificImg">
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
    <div class="row my-3">
        <div class="col border-t"></div>
    </div>
</div>    
</template>
<script lang="ts">
    import { api_img_path } from '@/services/pathFile'
    import ShowAttImg from './ShowAttImg.vue'
    import ProductSize from './ProductSize.vue'

    const config = api_img_path
    export default{
        components:{
            ShowAttImg,
            ProductSize
        },
        props:{
            prd_attributes:<any>{}

        },
        data(){
            return{
                prd_color:'',                
                specificImg:'',
                additionImg:'',
                prod_sizes:<any>{},
                prod_prices:<any>{},
                prod_regular_price:<any>{},
                
                
            }            
        },
        methods:{
        },
        created(){
            //console.log(this.prd_attributes.prd_img)
            //console.log(this.prd_attributes.addition_img)
            this.specificImg = this.prd_attributes?.prd_img
            this.additionImg = this.prd_attributes?.addition_img

            this.prd_color = this.prd_attributes?.prd_color
            this.prod_sizes = {
                s_amount:  this.prd_attributes?.prd_size_s,
                m_amount:  this.prd_attributes?.prd_size_m,
                l_amount:  this.prd_attributes?.prd_size_l,
                xl_amount:  this.prd_attributes?.prd_size_xl
            }
            this.prod_prices = {
                s_price:  this.prd_attributes?.prd_s_price,
                m_price:  this.prd_attributes?.prd_m_price,
                l_price:  this.prd_attributes?.prd_l_price,
                xl_price:  this.prd_attributes?.prd_xl_price
            }
            this.prod_regular_price = {
                s_regular_price:  this.prd_attributes?.prd_s_regular_price,
                m_regular_price:  this.prd_attributes?.prd_m_regular_price,
                l_regular_price:  this.prd_attributes?.prd_l_regular_price,
                xl_regular_price:  this.prd_attributes?.prd_xl_regular_price
            }
        },
        mounted() {
           // console.log(this.prd_attributes)
      

           /************************************* */
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
