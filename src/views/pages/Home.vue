

<template>
  <div class="container bg-white">
    <div class="row">
      <CarouselProject :slides="imgs" />
    </div>
    <div class="h-100">
      <div class="row">
          <div class="col-md-3 mx-0 px-0">
            <SideBar/>
          </div>
          <div class="col-md-9 bg-e9ecef">
            <div class="row">
              <HeadSideBarRight title="LAPTOP"/>
            </div>
            <Laptops />

            <div class="row">
              <HeadSideBarRight title="FASHION"/>
            </div>
            <Fashions /> 
           
          </div>
           <!----end right------>
    </div>
    </div>
  </div>
  
</template>

<script lang="ts">
import CarouselProject from '@/components/carousel/CarouselProject.vue'
import SideBar from '@/layouts/SideBar.vue'
import HeadSideBarRight from '@/components/menu/HeadSideBarRight.vue'
import type  ProductType  from "@/types/ProductType";

import type ResponseData from "@/types/ResponseData";
import ProductService from '@/services/productsService'
import {productDiscount} from '@/composables/myComposable'
import Fashions from '@/components/product/fashion/Fashions.vue';
import Laptops from '@/components/product/lapPhone/Laptops.vue';
import { api_img_path } from '@/services/pathFile'

import  { createNamespacedHelpers } from 'vuex'

export default {    
    components: {
        CarouselProject,
        SideBar,
        HeadSideBarRight,
        Fashions,
        Laptops
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
           ]
    }
  },
  beforeCreate: function() {
        document.body.className = '';
        let myDiv = document.getElementById("app");
	          myDiv.setAttribute("style", "max-width:1320px;");
        
    },
}
</script>

<style scoped>
   .row > .my-carousel{
      padding-left: 0;
      padding-right: 0;
   }
   
</style>
