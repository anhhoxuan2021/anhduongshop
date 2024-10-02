

<template>
  <div class="container bg-white">
    <div class="row">
      <CarouselProject :slides="imgs" />
    </div>
    <div class="h-100">
      <div class="row">
          <div class="col-md-3 mx-0 px-0">
            <SideBarFilter :brands="filterBrand"
             :filterProductType="filterProductType"
             :prices ="prices"  
             @get-product-brands = "getProductBrand"
             @get-product-types = "getPrdTypes"
             @filter-price = "getPrdPrice"
             />
          </div>
          <div class="col-md-9 bg-e9ecef">
            <div class="row">
              <HeadSideBarRight title="FASHION"/>
            </div>
            <Fashions
             :brandsdata ="brandsForFilter"
             :prdTypesForFilter = "prdTypesForFilter"
             :prdPriceFilter = "prdPriceFilter"
            /> 
           
          </div>
           <!----end right------>
    </div>
    </div>
  </div>
 
</template>

<script lang="ts">
import CarouselProject from '@/components/carousel/CarouselProject.vue'
import SideBarFilter from '@/layouts/SideBarFilter.vue'
import HeadSideBarRight from '@/components/menu/HeadSideBarRight.vue'
import type  ProductType  from "@/types/ProductType";

import type ResponseData from "@/types/ResponseData";
import ProductService from '@/services/productsService'
import {productDiscount} from '@/composables/myComposable'
import Fashions from '@/components/product/fashion/Fashions.vue';
import { api_img_path } from '@/services/pathFile'

import  { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('fashionModule')

export default {    
    components: {
        CarouselProject,
        SideBarFilter,
        HeadSideBarRight,
        Fashions
    },
    data() {
    return {
            path_img1:api_img_path,
          //  products: <ProductType[]>([]),
            search: '',
            page: 1,
            limit: 5,
            lastPage: 1,
            pending: false,
            brandsdata:[],
            prdTypedata: [],
            prdPricedata: [],
           // products: ref([]),
           //postList: ref([] as Product[]),
           imgs:['slider11.png','slider2.png'],
           testimonial_imgs:[
            {img:'150x150_1_2.png',title:'Best seller'},
            {img:'150x150_2_2.png',title:'Best deal'},
            {img:'150x150_3_2.png',title:'Shoes'},
            {img:'150x150_4_2.png',title:'Sandal'},
            {img:'150x150_5_2.png',title:'T-shirt'},
            {img:'150x150_6_2.png',title:'Polo shirt'},
            {img:'150x150_7_2.png',title:'jacket'},
            {img:'150x150_8_2.png',title:'Trousers'},
            {img:'150x150_9_2.png',title:'Shorts'},
            {img:'150x150_10_2.png',title:'Underwear'},
            {img:'150x150_11_2.png',title:'backpacks and bags'},
            {img:'150x150_12_2.png',title:'Hat'},
            {img:'150x150_13_2.png',title:'Belt'},
            {img:'150x150_14_2.png',title:'New'},
            {img:'150x150_15.png',title:'Best seller'},
           ],

           filterBrand :['Lacoste','Louis Vuitton','Gucci','Calvin Klein','Adidas',
            'Nike','Tommy','Levis','Hennes & Mauritz','Ralph Lauren'
           ],

           filterProductType: ['Short Sleeve Polos','Lightweight Polos','Pique Polos','Long Sleeve Polos',
            'Wool Polos','Golf Polos','Rugby Shirts'
           ],
           prices:['5-15', '15-25', '25-40', '40-100']


    }
  },
  beforeCreate: function() {
        document.body.className = '';
        let myDiv = document.getElementById("app");
	          myDiv.setAttribute("style", "max-width:1320px;");
        
    },

    computed:{
      brandsForFilter(){
        return this.brandsdata
      },

      prdTypesForFilter(){
        return this.prdTypedata
      }
      ,

      prdPriceFilter(){
        return this.prdPricedata
      }
    },

    methods: {
      ...mapActions([
        'productFileter'
        ]),

      getProductBrand(brands: []){
        this.brandsdata = brands

        let payload ={
        page: 1,
        limit: 5,
        typeGroup: 'Fashion',
        brands:brands,
        prdType:this.prdTypedata,
        prdPrice:this.prdPricedata
        }

        this.productFileter(payload);
      },

      getPrdTypes(prdTypes: []){
        this.prdTypedata = prdTypes
        let payload ={
        page: 1,
        limit: 5,
        typeGroup: 'Fashion',
        brands:this.brandsdata,
        prdType: prdTypes,
        prdPrice:this.prdPricedata
        }

        this.productFileter(payload);
      },

      getPrdPrice(prices: []){
        this.prdPricedata = prices
        let payload ={
        page: 1,
        limit: 5,
        typeGroup: 'Fashion',
        brands:this.brandsdata,
        prdType:this.prdTypedata,
        prdPrice:prices
        }

        this.productFileter(payload);
      }
    }
}
</script>

<style scoped>
   .row > .my-carousel{
      padding-left: 0;
      padding-right: 0;
   }
   
</style>
