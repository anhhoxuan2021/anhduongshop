<template>
    <div class="row">
              <div v-if="products.length > 0">
                <div class="row row-cols-xs-1 row-cols-sm-1 row-cols-md-4 mt-2">
                    
                    <div :class="['col prd-item flex-column',{'pe-0' : istrue(index)}]" v-for="(item, index) in products" :key="item.prd_id">  
                    
                        <div class="prd-item-info bg-white">
                            <div class="prd-item-decrease f-10 tl-10 bold text-center">
                            -{{discount(item.prd_regular_price,item.prd_price)}}% 
                            </div>
                            <router-link :to="`/fashion/${item.prd_id}`" class="prd-item-photo" >
                                <span class="prd-image-container">
                                   <img :src="`${path_img1}/${item.prd_img}`" class="prd-image-photo" />
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
                                    <span class="prd-price">${{ Number(item.prd_price).toLocaleString(undefined, {minimumFractionDigits: 2}) }}</span>
                                    <span class="prd-regular-price ms-2">${{ Number(item.prd_regular_price).toLocaleString(undefined, {minimumFractionDigits: 2}) }}</span>
                                </div>

                                <showSameImg :sameImages="`${item.prd_library}`" />
                                <div class="d-flex flex-row justify-content-end f-12 my-1 bold">
                                <i>Sold </i>
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
    data(){
        return{
            path_img1:api_img_path,
            page: 1,
            limit: 5,
            lastPage: 1,
            pending: false,
        }
    },
    computed:{
    ...mapState({
      products: state => state.fashions,
      last_page: state => state.last_page,
      total: state => state.total
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
                  limit: this.limit
                }
                
                this.productList(payload);
            }
    },

    
  },
    created(){    
    let payload ={
      page: this.page,
      limit: this.limit
    }

    this.productList(payload);
    }
}
</script>