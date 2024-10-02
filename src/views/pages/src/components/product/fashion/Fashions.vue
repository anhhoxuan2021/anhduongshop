<template>
    <div class="row">
              <div v-if="products.length > 0">
                <div class="row row-cols-xs-1 row-cols-sm-1 row-cols-md-4 mt-2">
                    
                    <div :class="['col prd-item flex-column',{'pe-0' : istrue(index)}]" v-for="(item, index) in products" :key="item.prd_id">  
                    
                       <div v-if="item.prod_attr !=null && item.prod_attr !=''">
                            <div v-for="(el,key,index1) in reRenderAttributes(item.prod_attr)" :key="key">
                                
                                <div class="prd-item-info bg-white">
                                    <div class="prd-item-decrease f-10 tl-10 bold text-center">
                                        -{{discount(el.prd_regular_price,el.prd_price)}}% 
                                    </div>
                           
                                    <router-link :to="`/fashion/${item.prd_id}`" class="prd-item-photo" >
                                        <span class="prd-image-container align-items-center d-flex">
                                          <img :src="`${path_img1}/${el.prd_img}`" class="prd-image-photo" />
                                        </span> 
                                    </router-link>
                                    <div class="prd-item-details flex-column">
                                        <strong class="prd-item-name">
                                            <router-link to="`/fashion/${item.prd_id}`" class="prd-item-link" :title="item.prd_name" >
                                                <div class="special-product-label mid-mid text-only ">
                                                <div class="text-center f-10 c-ff0000">
                                                    <span>MỚI</span>
                                                </div>
                                            </div>
                                            {{item.prd_name}}
                                            </router-link>
                                        </strong>
                                        <div class="d-inline fit-box">
                                            <span class="prd-price">${{ Number(el.prd_price).toLocaleString(undefined, {minimumFractionDigits: 2}) }}</span>
                                            <span class="prd-regular-price ms-2">${{ Number(el.prd_regular_price).toLocaleString(undefined, {minimumFractionDigits: 2}) }}</span>
                                        </div>

                                        <showSameImg :sameImages="`${el.prd_img}`" />
                                        <div class="d-flex flex-row justify-content-end f-12 my-1 bold">
                                            <i>Sold </i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       </div>
                        
                    </div>
                    <!----->
                </div>
                <div class="row my-2" v-if=" page < last_page">
                  <div class="col text-center">
                    <button class="btn btn-info text-white" v-on:click="loadMore()">LOAD MORE</button>
                  </div>
                </div>
            </div>
            <div v-else> No Product</div>
            </div>

           

</template>
<script lang="ts">
import {productDiscount} from '@/composables/myComposable'
import { api_img_path } from '@/services/pathFile'

import  { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('fashionModule')

export default{
    props:{
        pageParent: Number,
        limitParent: Number,
        brandsdata:[],
        prdTypesForFilter: [],
        prdPriceFilter: []
    },
    data(){
        return{
            path_img1:api_img_path,
            // page: this.pageParent !=null?this.pageParent:1,
            // limit: this.limitParent !=null?this.limitParent:5,
            // brandsdata1 : this.brandsdata !=null?this.brandsdata:[],
            page: 1,
            limit: 5,
            brandsdata1 : [],
            lastPage: 1,
            pending: false,
            prd_atts:{
                prd_img:'',
                price:0,
                regularPrice:0,

            }
        }
    },
    computed:{
    ...mapState({
      products: state => state.fashions,
      last_page: state => state.last_page,
      total: state => state.total,
     }),

  
     },
    methods: {
        ...mapActions([
        'productList'
        ]),
        /*
        discount function
        */
        discount(a:number,b:number){
        return  productDiscount(a,b)
        },
        /*
        istrue function
        */
        istrue(a:number){
        a++
        if(a % 4 ==0 && a > 0){
            return true
        }else{
            return false
        }
        },
        /*
        loadMore function
        */
        loadMore() {
            if( this.page + 1 <= this.last_page ){
                    this.page = this.page + 1
                    let payload ={
                    page: this.page,
                    limit: this.limit,
                    typeGroup: 'Fashion',
                    brands:this.brandsdata,
                    prdType :this.prdTypesForFilter,
                    prdPrice : this.prdPriceFilter
                    }
                   // console.log(this.brandsdata)
                    this.productList(payload);
                }
        },
        /* reRenderAttributes*/
        reRenderAttributes(attributes:any){
        let prd_img = 'unknow.png'
        attributes = JSON.parse(attributes)
        var itemAttr = {
                            amount: '',
                            prd_img : 'unknow.png',
                            prd_price :  0,
                            prd_regular_price :  0,
                        }

        attributes.forEach((item:any)=>{            
            if(item.prd_img !='' && item.prd_img !=null && item.prd_img !=undefined ){
                prd_img = item.prd_img               
            }            
            
            if(!isNaN(parseFloat(item.prd_size_s)) && 
                    !isNaN(parseFloat(item.prd_s_regular_price)) &&
                    !isNaN(parseFloat(item.prd_s_price)) ){
                        return itemAttr = {
                            amount: item.prd_size_s,
                            prd_img : prd_img,
                            prd_price :  item.prd_s_price,
                            prd_regular_price :  item.prd_s_regular_price,
                        }
                }else if(!isNaN(parseFloat(item.prd_size_m)) && 
                    !isNaN(parseFloat(item.prd_m_regular_price)) &&
                    !isNaN(parseFloat(item.prd_m_price)) ){
                        return itemAttr ={
                            amount: item.prd_size_m,
                            prd_img : prd_img,
                            prd_price :  item.prd_m_price,
                            prd_regular_price :  item.prd_m_regular_price,
                        }
                }
                else if(!isNaN(parseFloat(item.prd_size_l)) && 
                    !isNaN(parseFloat(item.prd_l_regular_price)) &&
                    !isNaN(parseFloat(item.prd_l_price)) ){
                        return {
                            amount: item.prd_size_l,
                            prd_img : prd_img,
                            prd_price :  item.prd_l_price,
                            prd_regular_price :  item.prd_l_regular_price,
                        }
                }
                else if(!isNaN(parseFloat(item.prd_size_xl)) && 
                    !isNaN(parseFloat(item.prd_xl_regular_price)) &&
                    !isNaN(parseFloat(item.prd_xl_price)) ){
                        return itemAttr ={
                            amount: item.prd_size_xl,
                            prd_img : prd_img,
                            prd_price :  item.prd_xl_price,
                            prd_regular_price :  item.prd_xl_regular_price,
                        }
                }            
                
        })

        itemAttr.prd_img = prd_img
        
        let attr = []
        attr.push(itemAttr) 
        //console.log(attr)
        return attr
        }
    
    },
    created(){    
        let payload ={
        page: 1,
        limit: 5,
        typeGroup: 'Fashion'
        }

        this.productList(payload);
    }
}
</script>