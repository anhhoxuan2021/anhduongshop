<template>
   <div v-if="bindAmountTo" id="p-cart">
    <div class="row mb-3 product-row" v-for="(item,index) in checkCart" :key="index">
                <div class="col-md-2 col-xs-12 col-sm-12">
                    <span class="prd-img-cart product-images-span me-1" product_index="0" style="cursor: pointer;">
                   
                    <img class="img-thumbnail  selected"
                     :src="`${path_img1}/${item.prd_color}`" alt="Thiet ke web Anh Ho" :specificImage="item.prd_color"  ref="refImages">
                </span>
                </div>
               
                <div class="d-flex flex-column col-md-9 col-xs-12 col-sm-12 f-17 ps-5">
                    <div class="row">                       
                        <input type="hidden" class="prd_name" v-model="item.prd_name">
                        <div class="d-flex">
                            <div class="col">{{ item.prd_name }}</div>
                            <div class="c-888 ms-2 delete-product-in-cart" style="cursor: pointer;">
                                <font-awesome-icon :icon="['fas', 'fa-trash']" /> 
                            </div>
                        </div>                        
                    </div>
                    <div class="row f-18 mt-2">
                        <div class="d-flex">
                            <span class="c-666 f-w-400 c-666 title-header">COLOR: {{ item.color_selected}}</span>
                            <span class="c-666 f-w-400 c-666 ps-5 title-header">SIZE: {{ item.prd_size }}</span>
                            <span class="c-666 f-w-400 c-666 ps-5 title-header">SEX: {{ item.prd_sex}}</span>
                        </div>
                    </div> 
                    <div class="row f-16">
                        <div class="d-flex">    
                            <div  class="d-inline fit-box f-15 pb-3 mt-3 d-flex d-flex-row" >
                                <div class="input-group closest-btn-action">
                                    <input type="hidden" class="color-selected" v-model="item.color_selected">
                                    <input type="hidden" class="prd_id" v-model="item.prd_id">
                                    <button class="btn btn-outline-secondary minus-prduct-btn" type="button" >-</button>
                                    <input type="text" class="form-control amount-prduct" v-model="item.amount" placeholder="" aria-label="Example text with button addon">
                                    <button class="btn btn-outline-secondary plus-prduct-btn" type="button" >+</button>
                                </div>
                                <button class="btn btn-warning btn-buy-now" v-if="btnBuyNow">Buy now</button>
                                <button class="btn btn-dark btn-add-to-cart" v-if="btnAddToCart">Add to cart</button>
                            </div>
                        </div>
                    </div> 
                    <div class="row">
                        <div class="d-flex f-18 bold"> ${{ Number(item.prd_price) * Number(item.amount).toLocaleString(undefined, {minimumFractionDigits: 2}) }}</div>
                       
                    </div> 
                </div>
            </div>
    <!----->

   </div>
   <div v-else id="p-cart">
    <div  class="d-inline fit-box f-15 pb-3 mt-3 d-flex d-flex-row" >
        <div class="input-group closest-btn-action">
          
            <button class="btn btn-outline-secondary minus-prduct-btn" type="button" >-</button>
            <input type="text" class="form-control amount-prduct" value="1" placeholder="" aria-label="Example text with button addon">
            <button class="btn btn-outline-secondary plus-prduct-btn" type="button" >+</button>
        </div>
        <button class="btn btn-warning btn-buy-now b-r-01" v-if="btnBuyNow">Buy now</button>
        <button class="btn btn-dark btn-add-to-cart b-r-01" v-if="btnAddToCart">Add to cart</button>
        <!--
        <button class="btn btn-dark btn-add-to-cart" @click="addtoCart('.btn-add-to-cart',false)">Add to cart</button>
        -->
    </div>
   </div>

</template>

<script lang="ts">

import type KeyValue from '@/types/KeyValue'
import type CartType from '@/types/CartType'
// import {addtoCart, changeProdductInCart, deleteProdductInCart} from '@/composables/cart'
import {addtoCart, changeProdductInCart, deleteProdductInCart} from '@/composables/cart'

import  { createNamespacedHelpers } from 'vuex'
import store from '@/store'
import { mapState } from 'vuex'

import { api_img_path } from '@/services/pathFile'
    const config = api_img_path

export default{
    props:{
            btnBuyNow:Boolean,
            btnAddToCart:Boolean,
            defaultValue:Boolean,
            bindAmountTo:Boolean,
            fromCart:Boolean

        },
    //props:['btnBuyNow','btnAddToCart','defaultValue','bindAmountTo','fromCart'],
    data(){
        return{
             path_img1:config,
             itmCart : this.itemCarts,
             
        }
    },
    computed:{
        ...mapState({
            itemCarts: state=>state.itemCart
        }),

        checkCart(){
           // console.log("khong change")
           // console.log(this.itemCarts)
            if(this.itemCarts.length >0){
                return this.itemCarts                
            }else{
                let yourCart_json = localStorage.getItem('yourCart')
                if(yourCart_json !='' && yourCart_json != null && yourCart_json != undefined){
                    let yourCart =<CartType[]>([]);
                    yourCart = JSON.parse(yourCart_json)
                    return yourCart
                }else{
                    return []
                }
                
            }
        },

        
    },
    methods:{
   
    },
    mounted(){
        var isFromCart =this.fromCart
        $('#p-cart').on('click','.minus-prduct-btn',function(){
            
            var $me =$(this)
            let amount_of_product = $(this).closest('.closest-btn-action').find('.amount-prduct').val()
            var amount = Number(amount_of_product);
            if(amount >1) {
                amount--
                $(this).closest('.closest-btn-action').find('.amount-prduct').val(amount)
                
                if(isFromCart){
                    changeProdductInCart($me, isFromCart)
                }
               
         
            }
        });
        /***************************************************/
        $('#p-cart').on('click','.plus-prduct-btn',function(){
            var $me =$(this)
            var amount = Number($(this).closest('.closest-btn-action').find('.amount-prduct').val());
           // console.log(amount)
            amount++
            $(this).closest('.closest-btn-action').find('.amount-prduct').val(amount)
            if(isFromCart){
                changeProdductInCart($me, isFromCart)
            }
        });
        /*************************************************/
        $('#p-cart').on('click','.btn-add-to-cart',function(){
            var $me =$(this)
            addtoCart($me,false)
        })
        /*************************************************/
        $('#p-cart').on('click','.delete-product-in-cart',function(){
            var $me =$(this)
            if(isFromCart){
                deleteProdductInCart($me, isFromCart)
            }
        })
    }
}
</script>