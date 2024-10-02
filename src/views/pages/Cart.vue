<template>
   <div id="p-cart " class="container">
    <div class="row mb-4">
        <div class="col">
            <div class="d-flex f-18 mt-3" style="cursor: pointer">
                <div class="triangle-light-5c636a"></div>
                <div class="retangle-light-5c636a">
                   Home
                </div>
                <div class="triangle-right-5c636a"></div>
                <div class="triangle-888"></div>
                <div class="retangle-888">
                    <font-awesome-icon :icon="['fas', 'fa-cart-shopping']" /> 
                    &nbsp; Cart
                </div>
                <div class="triangle-right-888"></div>                
            </div>
           
        </div>
    </div>
    <div class="row">
        <div class="col col-md-7 col-sm-12">
            <AddCart v-bind:bindAmountTo="true" v-bind:from-cart ="true"/>
        </div>
        <!--R-->
        <div class="col col-md-5 col-sm-12">
            <SumAmountCart :continueSshopping="true" :btnPayment="true" />
        </div>
    </div>

    <div class="row my-3" v-if="shocked.length > 0">
        <HeadSideBarRightBlack title="SHOCKING OFFER INCLUDEED"/>
    </div>
    <SuggestedProducts :products="shocked" 
    :w_180="true"/>
    

    <div class="row my-3" v-if="products.length > 0">
        <HeadSideBarRightBlack title="SUGGESTPRODUCTS"/>
    </div>
    <SuggestedProducts :products="products" />
    <div class="row my-3" v-if="products.length < 1 && shocked.length < 1">
    </div>
   </div>

</template>
<script lang="ts">
import AddCart from '@/components/cart/AddCart.vue';
import HeadSideBarRightBlack from '@/components/menu/HeadSideBarRightBlack.vue'
import Breadcrumb from '@/components/cart/Breadcrumb.vue';
import SumAmountCart from '@/components/cart/SumAmountCart.vue';
import SuggestedProducts from '@/components/product/SuggestedProducts.vue';

import ProductService from '@/services/productsService'
import type  ProductType  from "@/types/ProductType";
import type CartType from '@/types/CartType'
export default{
    components: {
    AddCart,
    HeadSideBarRightBlack,
    Breadcrumb,
    SumAmountCart,
    SuggestedProducts,
   },
   data(){
    return {
        products: [] as any [],
        shocked: [] as any []
    }
   },
    beforeCreate: function() {
        document.body.className = 'bg-white';
        //document.getElementById('app').style.
        let myDiv = document.getElementById("app")
	      myDiv!.setAttribute("style", "max-width:100%;");
    },
    methods:{
        suggestedF(){
            var sugestedType= ''
            let yourCart_json = localStorage.getItem('yourCart')
            
            if(yourCart_json !='' && yourCart_json != null && yourCart_json != undefined){
                let yourCart =<CartType[]>([]);
                yourCart = JSON.parse(yourCart_json)           

                yourCart.forEach(function(item){
                    sugestedType =(sugestedType=='')? item.prd_type_group: sugestedType+','+item.prd_type_group
                   // console.log(sugestedType)
                })
                
            }
            let empty = [] as any [] 
            if(sugestedType !=''){
                ProductService.suggestedList({suggested:sugestedType}).then((res)=>{
                   // console.log(res.products)
                    this.products = res.products
                    this.shocked = res.shockProduct
                   // return this.products
                })
            }else{                
                this.products = empty        

            }
            
        }
    },
    mounted(){
        this.suggestedF()
    }
}
</script>
<style scoped >
/*
.triangle{
  border-color: blue blue blue green;
  border-style: solid;
  border-width: 100px 100px 100px 100px;
  height: 0px;
  width: 0px;
}*/
/*
.triangle{
    border-top: blue 20px solid;
  border-right: blue 20px solid;
  border-bottom: blue 20px solid;
  border-left: transparent 20px solid;
  height: 0px;
  width: 0px;
  position: relative;
}
.triangle:after{
    text-align: center;
    width: 100px !important;
    height: 40px !important;
    background: red;
    content: "";
    position: absolute;
    top: -20px;
    left: 20px;
    align-content: space-around;
}*/

</style>