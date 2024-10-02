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
                        <input type="number" class="form-control mt-2 " name="prd_quantity" id="prd_quantity" v-model="prduct.prd_quantity">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                        <label>Product Regular Price</label>
                        <input type="text" class="form-control input-currency mt-2 " name="prd_regular_price" id="prd_regular_price"  v-model="prduct.prd_regular_price">
                    </div>
                </div>
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
                        <select class="form-select mt-2 " name="prd_type" id="prd_type"  v-model="prduct.prd_type">
                            <option>{{prduct.prd_type}}</option>
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
                <div class="row mt-3">
                    <div class="col">
                        <label>Product Price</label>
                        <input type="text" class="form-control input-currency mt-2 " name="prd_price" id="prd_price" v-model="prduct.prd_price">
                    </div>
                </div>
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
        :prd_img="prduct.prd_img" 
        :additionImg="prduct.prd_library" 
        :key="componentKey"/>

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
import ProductAttribute from '@/components/product/fashion/ProductAttribute.vue'

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
            prduct:{
                prd_id:'',
                prd_type_name :'',
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
            }      
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
    async getProductID(id:any) {
          await   ProductService.getProductId1(id)
                .then((response) => {
                 this.prduct = response

                 this.prduct.prd_size = response.prd_size
                // console.log(response)
                })
                .catch((e: Error) => {
                  console.log(e);
                });

                this.componentKey +=1
            },
    save(){
        let id = this.$route.params.id
    },
    
  },
  watch:{

  },
  created(){
    let id = this.$route.params.id
    this.getProductID(id);      
   
  },
  mounted(){
  
  }
}
</script>