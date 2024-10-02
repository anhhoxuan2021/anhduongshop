<template>
 <div class="prd_att">
    <div class="row">
        <div class="col">
            <label>Product Color</label>
            <input class="mt-2 form-control prd_color" type="text" v-model="prd_color">
        </div>
    </div>
    <div class="row mt-2">
        <div class="col">
            <label>Product amount</label>
            <input type="number" class="form-control prd_size_s mt-2" v-model="prd_size_s" placeholder="Amount">
        </div>    
    </div>
    <div class="row mt-2">
        <div class="col">
            <label>Product price</label>
            <input type="number" class="form-control prd_s_price mt-2" v-model="prd_s_price" placeholder="Price">
        </div>    
    </div>
    <div class="row mt-2">
        <div class="col">
            <label>Regular Price</label>
            <input type="number" class="form-control prd_s_regular_price mt-2" v-model="prd_s_regular_price" placeholder="Price">
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
    import ShowAttImg from '@/components/product/fashion/ShowAttImg.vue'

    const config = api_img_path
    export default{
        components:{
            ShowAttImg,
        },
        props:{
            prd_attributes:<any>{}

        },
        data(){
            return{
                prd_color:'',                
                specificImg:'',
                additionImg:'',
                prd_size_s:0,
                prd_s_price:0,
                prd_s_regular_price:0
                
                
            }            
        },
        methods:{
        },
        created(){
            //console.log(this.prd_attributes.prd_img)
            //console.log(this.prd_attributes.addition_img)
            this.specificImg = this.prd_attributes?.prd_img
            this.additionImg = this.prd_attributes?.addition_img
            this.prd_s_price = this.prd_attributes?.prd_s_price
            this.prd_s_regular_price = this.prd_attributes?.prd_s_regular_price
            this.prd_size_s = this.prd_attributes?.prd_size_s
            this.prd_color = this.prd_attributes?.prd_color
           
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
