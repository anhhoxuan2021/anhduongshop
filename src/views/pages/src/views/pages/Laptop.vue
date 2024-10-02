

<template>   
 
    <div class="normal-id container">
      
      <div class="row mt-5 mb-2">
          <div class="col-md-6 col-sm-12 col-xm-12">
            <div class="justify-content-center d-flex bg-color-f6f6f4 relative" v-if="isShow">
              <FashionCarousel
              :proplibraryImages="firstProductImages"/>    
                    
            </div>
         </div>
          <!----------Right--------->
          <div class="col-md-6 col-sm-12 col-xm-12">
            <div class="page-pduct d-flex flex-column">
                <div class="specific-product">
                  <input type="hidden" class="prd_id" v-model="laptop.prd_id">
                  <input type="hidden" class="prd_name" v-model="laptop.prd_name">
                  <input type="hidden" class="prd_price" v-model="prd_price">
                  <input type="hidden" class="prd_regular_price" v-model="prd_regular_price">

                  <h1> <span class="p-title">{{laptop.prd_name }}</span> </h1>

                  <div class="mt-3">
                    <span class="p-price">${{ Number(prd_price).toLocaleString(undefined, {minimumFractionDigits: 2})}}</span>
                    <span class="prd-regular-price ms-2">${{Number(prd_regular_price).toLocaleString(undefined, {minimumFractionDigits: 2})}}</span>
                  </div>
                 
                  <div v-if="isShow && specificImgsColor.length >0">
                    <ShowSpecificImgColor :is-class="true" :same-images="specificImgsColor"
                    @get-product-img-index ="productImageIndex"/>
                  </div>
                 
                  <div class="row my-3">
                    <div class="col" v-if="laptop.prod_size_inch != null && laptop.prod_size_inch != ''">
                      <div class="f-15" >Select size: <strong>{{firstZise}} Inches</strong></div>
                      <div class="d-flex flex-row  fit-box pb-3 mt-3">
                      <span class="prd-size me-3 f-15 text-center capitalize, selected">{{laptop.prod_size_inch}}</span>
                    </div>
                    </div>
                  </div>
                  
                  <div class="f-15 my-3">Add a quanlity:</div>
                  <AddCart :btnAddToCart="true" :btnBuyNow="true" />
                  <div class="mt-3"></div>

                  <ProductPurchaseInfo />
                  <SpecialPoint :specialPoints="`${laptop.prod_special_point}`" />
                </div>
            </div>
          </div>
      </div>      
      <div class="row mt-5 mb-2" v-html="laptop.prd_disctiption"  ></div>
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
import {externalStore} from '@/composables/cartComposable'
import {testAcessState} from '@/composables/cart'

import ShowSameImg from '@/components/common/ShowSameImg.vue';
import ShowSpecificImgColor from '@/components/common/ShowSpecificImgColor.vue'
import FashionCarousel from '@/components/product/FashionCarousel.vue';
import ProductPurchaseInfo from '@/components/purchaseInfo/ProductPurchseInfo.vue';
import SpecialPoint from '@/components/product/SpecialPoint.vue';
import AddCart from '@/components/cart/AddCart.vue';

import { api_img_path } from '@/services/pathFile';

import  { createNamespacedHelpers } from 'vuex'



import store from '@/store' 
const { mapState, mapActions } = createNamespacedHelpers('laptopModule')

export default {    
    components: {
    CarouselProject,
    SideBar,
    HeadSideBarRight,
    ShowSameImg,
    ShowSpecificImgColor,
    FashionCarousel,
    ProductPurchaseInfo,
    SpecialPoint,
    AddCart
   },
   setup(){
   // const { data1 } = testAcessState()
   },
  data() {
    return {
            path_img1:api_img_path,
            /* products: <ProductType[]>([]),
             products: ref([]),
            postList: ref([] as Product[]),*/
            search: '',
            pending: false,           
            imgs:['slider11.png','slider2.png'],
          //  specificImgs :'',
          //  sizes:'',
          //  productImgs:'',
          //  price: 0,
          //  regularPrice: 0,
          indx:0,
          indexSize: '',
          prd_regular_price: 0,
          prd_price:0,
          amount: 0,

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
      laptop: state => state.laptop,
      isShow: state => state.laptopIsShow,
      specificImgs: state => state.laptopSpecificImgs,
      specificImgsColor: state => state.laptopSpecificImgsColor,
      productImgs: state=>state.laptopProductImgs,
      productSize: state=>state.laptopProductSize,
     }),

     firstProductImages(){     
       if(this.productImgs.length >0){    
       
        return this.productImgs[this.indx].addition_images
       }else{
        return []
       }
     },

     firstZise(){     
      let item = this.productSize[this.indx]
      console.log(item)
       if(item !=undefined){
        let temp = item['s'] 

        this.prd_regular_price = temp.prd_regular_price
        this.prd_price = temp.prd_price
        this.amount = temp.amount       
      } 
      
       return this.laptop.prod_size_inch
     },

  },
  watch: {
    // indx (newValue,oldValue) {
    //   console.log("new= "+newValue)
    //    console.log("old= "+oldValue)
    // }

    
    indx(value){
      let item = this.productSize[this.indx]
       if(item.length > 0){
        let temp = item['s'] 

        this.prd_regular_price = temp.prd_regular_price
        this.prd_price = temp.prd_price
        this.amount = temp.amount

       
      }else{
        this.prd_regular_price = 0
        this.prd_price = 0
        this.amount = 0
      }
    },

    indexSize(value){
      let item = this.productSize[this.indx]
       if(this.indexSize !=''){
        let temp = item[this.indexSize] 

        this.prd_regular_price = temp.prd_regular_price
        this.prd_price = temp.prd_price
        this.amount = temp.amount

      }else{
        this.prd_regular_price = 0
        this.prd_price = 0
        this.amount = 0
      }
    }
  },
  methods: {
    ...mapActions([
      'getLaptopID'
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
    testStore1(){
      return testAcessState(20)//externalStore()
    },

    productImageIndex(index:number){      
      this.indx = index      
    },

    showPrice(value:string){
        this.indexSize = value
        
    }
  },
  created(){
    let id = this.$route.params.id
    this.getLaptopID(id);       
  },

  mounted(){      

   
   /*
    const plugin = document.createElement("script");
    plugin.setAttribute(
      "src",
      "/js/products/fashion.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);*/

    // var scripts = [
    //   "/js/products/fashion.js",
    //   "/js/cart/cart.js",
    //   "/js/common.js"
    // ];
    // scripts.forEach(script => {
    //   let tag = document.createElement("script");
    //   tag.setAttribute("src", script);
    //   document.head.appendChild(tag);
    // });

    // window.addEventListener('ready', function() { 
     
    //     })
    
   /* $('.normal-id').on('click','.fashion-libray-img',function(){
        $('.product-libary-img.selected').removeClass('selected')
        $(this).find('.product-libary-img').addClass('selected')
        console.log("test1")
    })*/

   // console.log(store.state.testState)
   //let aaa =  this.testStore1();
   //console.log(aaa)
  }

  //end export
  }
 
</script>


