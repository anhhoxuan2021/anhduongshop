<template>
    <form>
        <div class="row">
             <!--Left-->
             <div class="col-6 col-ms-12 col-xs-12 ">
                <div class="row mt-3">
                    <div class="col">

                        <label>Batch code</label>
                        <input type="text" disabled="true" class="form-control mt-2 " name="prd_batch_code" id="prd_batch_code" v-model="prduct.prd_batch_code">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                        <label>Product name</label>
                        <input type="text" class="form-control mt-2 " name="prd_name" id="prd_name" v-model="prduct.prd_name">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                        <label>Product Quantity</label>
                        <input disabled type="number" class="form-control mt-2 " name="prd_quantity" id="prd_quantity" v-model="prduct.prd_quantity">
                    </div>
                </div>
                <!--<div class="row mt-3">
                    <div class="col">
                        <label>Product Regular Price</label>
                        <input type="text" class="form-control input-currency mt-2 " name="prd_regular_price" id="prd_regular_price"  v-model="prduct.prd_regular_price">
                    </div>
                </div>-->
                <div class="row mt-3">
                    <div class="col">
                        <label>Description</label>
                        <textarea rows="4"  class="form-control mt-2 " name="prd_disctiption" id="prd_disctiption" v-model="prduct.prd_disctiption"></textarea>
                    </div>
                </div>
            </div>
             <!--Right-->
             <div class="col-6 col-ms-12 col-xs-12 ">
                <div class="row mt-3">
                    <div class="col">
                        <label>Product type</label>
                        <select class="form-select mt-2 " name="prd_type" id="prd_type" v-model="prduct.prd_type">
                            <option v-for="(item, index) in typeOption" :key="index" :value="item.prd_type_id" > {{item.prd_type_name}}</option>
                        </select>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                        <label>Product SKU</label>
                        <input type="text" class="form-control mt-2 " name="prd_sku" id="prd_sku" v-model="prduct.prd_sku">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                        <label>Tags<span class="f-10">(separated by ',')</span></label>
                        <input type="text" class="form-control mt-2 " name="prd_tag" id="prd_tag" v-model="prduct.prd_tag">
                    </div>
                </div>
                <!--<div class="row mt-3">
                    <div class="col">
                        <label>Product Price</label>
                        <input type="text" class="form-control input-currency mt-2 " name="prd_price" id="prd_price" v-model="prduct.prd_price">
                    </div>
                </div>-->
                <div class="row mt-3 mb-1">
                    <div class="col">
                        <label>Short description</label>
                        <textarea rows="4" class="form-control mt-2 " name="prd_short_disctiption" id="prd_short_disctiption" v-model="prduct.prd_short_disctiption"></textarea>
                    </div>
                </div>

            </div>
        </div>
    </form>
    <ProductAttribute :prdSex ="prduct.prd_sex" 
       :prdSize="prduct.prd_size"
        prdColor="Xanh"
        :prd_img="prduct.prd_img" 
        :additionImg="prduct.prd_library" 
        :prd_att ="prduct.prd_att"
        :key="componentKey"
       
        />

        <div class="row justify-content-md-center my-5">            
            <div class="col-md-2 col-xs-6 col-sm-6">
                <button class="btn btn-secondary form-control">CANCEL</button>
            </div>

            <div class="col-md-2 col-xs-6 col-sm-6">
                <button  class="btn btn-primary form-control" @click="save()">SAVE</button>
            </div>
        </div>
</template>

<script lang="ts">
import { api_img_path } from '@/services/pathFile';
import  { createNamespacedHelpers } from 'vuex'
import ProductService from '@/services/productsService'
import ProductAttribute from '@/components/product/fashion/ProductAttribute.vue';

import store from '@/store' 
const { mapState, mapActions } = createNamespacedHelpers('adminProductModule')

export default{
    components:{
        ProductAttribute
    },
    data() {
    return {
            path_img1:api_img_path,
            search: '',
            pending: false,  
            
            componentKey: 0,   
            prduct: {
                prd_id:'',
                prd_batch_code:'',
                prd_name:'',
                prd_quantity:'',
                prd_type :'',
                prd_sku :'',
                prd_price :'',
                prd_regular_price :'',
                prd_disctiption :'',
                prd_short_disctiption :'',
                prd_sex  :'',
                prd_size :'',
                prd_color :'',
                multi_colors :'',
                multi_sizes :'',
                multi_sexes:'',
                prd_tag :'',
                prd_relative :'',
                prd_img :'',
                prd_library :'',
                prd_att:'',
            },
            typeOption :[] as {prd_type_id:number, prd_type_name:string}[]
    }
  },
  beforeCreate() {
        document.body.className = 'bg-white';
        //document.getElementById('app').style.
        let myDiv = document.getElementById("app")
	      myDiv!.setAttribute("style", "max-width:100%;");
    },
    computed:{
    ...mapState({
        product1: state => state.product,
      isShow: state => state.isShow
     }),
  },
  methods:{
    getProductType(){
        ProductService.getProductType().then(res=>{
            this.typeOption = res
            console.log(this.typeOption)
        })
    },

    async getProductID(id:any) {
          await   ProductService.getProductId1(id)
                .then((response) => {
                 this.prduct = response

                 //this.prduct.prd_size = response.prd_size
                // console.log(response)
                })
                .catch((e: Error) => {
                  console.log(e);
                });

                this.componentKey +=1
            },
    
    save(){
        let id = this.$route.params.id
        var prd_att = []
        let prd_att_item ={}
        var quantity =0
        $('.prd_att').each(function(){
            quantity += Number($(this).find('.prd_size_s').val()) + Number($(this).find('.prd_size_m').val()) +
            Number($(this).find('.prd_size_l').val()) + Number($(this).find('.prd_size_xl').val()) 
            prd_att_item = {
                prd_color: $(this).find('.prd_color').val(),
                prd_size_s: Number($(this).find('.prd_size_s').val()),
                prd_size_m: Number($(this).find('.prd_size_m').val()),
                prd_size_l: Number($(this).find('.prd_size_l').val()),
                prd_size_xl: $(this).find('.prd_size_xl').val(),
                prd_img: $(this).find('.image-spec').val(),
                addition_img: $(this).find('.image-added').val(),

                prd_s_price :  $(this).find('.prd_s_price').val(),
                prd_m_price:  $(this).find('.prd_m_price').val(),
                prd_l_price:  $(this).find('.prd_l_price').val(),
                prd_xl_price:  $(this).find('.prd_xl_price').val(),
                prd_s_regular_price:  $(this).find('.prd_s_regular_price').val(),
                prd_m_regular_price:  $(this).find('.prd_m_regular_price').val(),
                prd_l_regular_price:  $(this).find('.prd_l_regular_price').val(),
                prd_xl_regular_price:  $(this).find('.prd_xl_regular_price').val(),
            }

            prd_att.push(prd_att_item)
        })

    //     let prd_sex = this.isSex

    //     let prd_id= this.prd_id
    //     let prd_batch_code= this.prd_batch_code
    //     let prd_name= this.prd_name
    //     let prd_quantity=  quantity//this.prd_quantity
    //     let  prd_type = this.prd_type
    //     let prd_sku = this.prd_sku
    //    // let prd_price = this.prd_price
    //    // let prd_regular_price = this.prd_regular_price
    //     let prd_disctiption = this.prd_disctiption
    //     let prd_short_disctiption = this.prd_short_disctiption

        let data = {
            prd_id:this.prduct.prd_id,
            prd_sex:this.sex,
            prd_batch_code:this.prduct.prd_batch_code,
            prd_name:this.prduct.prd_name,
            prd_quantity:quantity,
            prd_type:this.prduct.prd_type,
            prd_sku:this.prduct.prd_sku,
            prd_disctiption:this.prduct.prd_disctiption,
            prd_short_disctiption:this.prduct.prd_short_disctiption
        }
        console.log(data)

        return 
        
        if(prd_att.length >0){
            Object.assign(data,{ "prod_attr": JSON.stringify(prd_att)});
        }
        
        ProductService.addProduct(data).then(res=>{
            console.log(res)
        })
    },
    
  },
  watch:{

  },
  created(){
    this.getProductType()

    let id = this.$route.params.id
    this.getProductID(id);      
   
  },
  mounted(){
  
  }
}
</script>