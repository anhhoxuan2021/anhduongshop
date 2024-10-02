

<template>   
    <div class="normal-id">
      <div class="row mt-5 mb-2">
          <div class="col-md-6 col-sm-12 col-xm-12">
            <div class="justify-content-center d-flex bg-color-f6f6f4">
              <span class="img-div h-750">
                  <img :src="`${path_img1}/${fashion.prd_img}`" id="zoomed-image" />
              </span> 
            </div>
          </div>
          <!----------Right--------->
          <div class="col-md-6 col-sm-12 col-xm-12">
            <div class="page-pduct d-flex flex-column">
                <div class="specific-product">
                  <input type="hidden" class="prd_id" v-model="fashion.prd_id">
                  <input type="hidden" class="prd_name" v-model="fashion.prd_name">
                  <input type="hidden" class="prd_price" v-model="fashion.prd_price">
                  <input type="hidden" class="prd_regular_price" v-model="fashion.prd_regular_price">

                  <h1> <span class="p-title">{{fashion.prd_name }}</span> </h1>

                  <div class="mt-3">
                    <span class="p-price">${{ Number(fashion.prd_price).toLocaleString()}}</span>
                    <span class="prd-regular-price ms-2">${{Number(fashion.prd_regular_price).toLocaleString()}}</span>
                  </div>
                  <div class="f-15 my-3">Select color:</div>
                  <div v-if="isShow && fashion.multi_colors !=''">
                    <show-same-img :is-class="true" :same-images="`${fashion.multi_colors}`"/>
                  </div>
                 
                  <div class="row my-3">
                    <div class="col" v-if="fashion.multi_sizes !=null && fashion.multi_sizes !=''">
                      <div class="f-15" >Select size:</div>
                      <div class="d-flex flex-row  fit-box pb-3 mt-3">
                      <span :class="['prd-size me-3 f-15 text-center',{selected:index==0}]" v-for="(size, index) in fashion.multi_sizes.split(',')">{{size}}</span>
                    </div>
                    </div>
                    <div class="col">
                      <div class="f-15">Sex:</div>
                      <div class="d-flex flex-row  fit-box mt-3 pb-3">
                          <span class="prd-size me-3 f-15 text-center selected" v-if="fashion.prd_sex=='male'">M</span>
                          <span class="prd-size me-3 f-15 text-center selected" v-if="fashion.prd_sex=='female'">F</span>
                        </div>
                    </div>
                  </div>
                  
                  <div class="f-15 my-3">Add a quanlity:</div>
                  <div class="d-inline fit-box f-15 pb-3 mt-3 d-flex d-flex-row">
                      <div class="input-group mb-3 closest-btn-action">
                          <button class="btn btn-outline-secondary" type="button" id="minus-prduct-btn">-</button>
                          <input type="text" class="form-control amount-prduct" value="1" placeholder="" aria-label="Example text with button addon">
                          <button class="btn btn-outline-secondary" type="button" id="plus-prduct-btn">+</button>
                      </div>
                      <button class="btn btn-warning btn-buy-now">Buy now</button>
                      <button class="btn btn-dark btn-add-to-cart">Add to cart</button>
                  </div>
                </div>
            </div>
          </div>
      </div>
      <div class="row my-3">
          <div class="col col-md-6 col-sm-15 col-xs-12">
             <div class="d-flex flex-row">
                <div class="square-15 m-t-2"></div>
                <div class="bold ps-2 title-header">Special Points</div>
             </div>

            . Waiting

            <div class="row relative" style="height: 100%; width: 100%;">
              <div class="col">
                <div class="justify-content-center d-flex bg-color-f6f6f4 anchor relative my-slice" v-if="fashion.multi_colors !='' && fashion.multi_colors !=null">
                  <div class="img-div h-750 slice-item" v-for="slice_img in fashion.multi_colors.split(',')" :key="slice_img">
                      <img :src="`${path_img1}/${slice_img}`" alt="Anh Ho" />
                  </div> 
                </div>
              </div>
            </div>
       

          </div>
          <!--R-->
          <div class="col col-md-6 col-sm-12 col-xs-12">
            <div class="row p-s-15">          
          <div class="col-md-6 col-sm-12 col-xs-12 pe-0">
              <div class="bg-color-f7f7f7 pt-4 pb-2">
                <div class="row justify-content-center align-items-center mb-3">
                <div class="col-md-3 col-lg-2 col-sm-4 col-xs-4">
                    <div class="box-size-2 bg-color3">
                      <div class="fa-rotate-360 f-18 bg-ededed child-box">
                        <font-awesome-icon icon="fa-solid fa-truck "  />
                      </div> 
                    </div>
                </div>
                <div class="col-md-9 col-lg-9 col-sm-8 col-xs-8 d-flex flex-column">
                    <span class="f-15 bold">Free shipping</span>
                    <span class="f-13 ">for orders is lager than 499.000 VND</span>
                </div>
            </div>
            <div class="row justify-content-center align-items-center mb-3">
                <div class="col-md-3 col-lg-2 col-sm-4 col-xs-4">
                    <div class="box-size-2 bg-color3">
                        <div class="f-18 bg-ededed child-box">
                          <font-awesome-icon icon="fa-solid fa-cart-shopping "  />
                        </div> 
                    </div>
                </div>
                <div class="col-md-9 col-lg-9 col-sm-8 col-xs-8 d-flex flex-column">
                    <span class="f-15 bold">Free returns</span>
                    <span class="f-13 ">within 30 days</span>
                </div>
            </div>
            <div class="row justify-content-center align-items-center mb-3">
                <div class="col-md-3 col-lg-2 col-sm-4 col-xs-4">
                    <div class="box-size-2 bg-color3">
                        <div class="f-18 bg-ededed child-box">
                          <font-awesome-icon icon="fa-solid fa-money-check"  />
                        </div> 
                      </div>
                </div>
                <div class="col-md-9 col-lg-9 col-sm-8 col-xs-8 d-flex flex-column">
                    <span class="f-15 bold">DIVERSITY</span>
                    <span class="f-13 ">payments</span>
                </div>
            </div>
              </div>
          </div>
          <!--R-->
          <div class="col-md-6 col-sm-12 col-xs-12 bg-color-f7f7f7 pt-4 pb-2">
            <div class="row justify-content-center align-items-center mb-3">
                <div class="col-md-3 col-lg-2 col-sm-4 col-xs-4">
                    <div class="box-size-2 bg-color3">
                        <div class="f-18 bg-ededed child-box">
                          <font-awesome-icon icon="fa-solid fa-truck-fast"  />
                        </div> 
                      </div>
                </div>
                <div class="col-md-9 col-lg-9 col-sm-8 col-xs-8 d-flex flex-column">
                    <span class="f-15 bold">Fast delivery</span>
                    <span class="f-13 ">nationwide</span>
                </div>
            </div>
            <div class="row justify-content-center align-items-center mb-3">
                <div class="col-md-3 col-lg-2 col-sm-4 col-xs-4">
                    <div class="box-size-2 bg-color3">
                        <div class="f-18 bg-ededed child-box">
                          <font-awesome-icon icon="fa-solid fa-adjust"  />
                        </div> 
                      </div>
                </div>
                <div class="col-md-9 col-lg-9 col-sm-8 col-xs-8 d-flex flex-column">
                    <span class="f-13">Procedures for exchanging goods</span>
                    <span class=" f-15 bold ">EASY</span>
                </div>
            </div>
            <div class="row justify-content-center align-items-center mb-3">
                <div class="col-md-3 col-lg-2 col-sm-4 col-xs-4">
                    <div class="box-size-2 bg-color3">
                        <div class="f-18 bg-ededed child-box">
                          
                          <font-awesome-icon :icon="['fas', 'cart-circle-check']" />
                        
                        </div> 
                    </div>
                </div>
                <div class="col-md-9 col-lg-9 col-sm-8 col-xs-8 d-flex flex-column">
                    <span class="f-15 bold">GOODS ARE CHECKED</span>
                    <span class="f-13 ">before payment</span>
                </div>
            </div>   

          </div>
          <!--end R-->
          
        </div>
          </div>
      </div>
      
      <div class="row my-3">
              <button class="btn btn-default" v-on:click="initMove()">Move</button>
            </div>
    </div>
</template>

<script lang="ts">
import CarouselProject from '@/components/carousel/CarouselProject.vue'
import SideBar from '@/layouts/SideBar.vue'
import HeadSideBarRight from '../menu/HeadSideBarRight.vue'
import type  ProductType  from "@/types/ProductType";

import type ResponseData from "@/types/ResponseData";
import ProductService from '@/services/productsService'
import {productDiscount} from '@/composables/myComposable'

import ShowSameImg from '../common/ShowSameImg.vue';

import { api_img_path } from '@/services/pathFile'

import  { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('fashionModule')

export default {    
    components: {
        CarouselProject,
        SideBar,
        HeadSideBarRight,
        ShowSameImg
    },
    data() {
    return {
            path_img1:api_img_path,
          //  products: <ProductType[]>([]),
            search: '',
            pending: false,
           // products: ref([]),
           //postList: ref([] as Product[]),
           imgs:['slider11.png','slider2.png'],

           time:0,
           pos : 0,
           elem :'',
           original_rect:0,
           imgObj:''
    }
  },
  beforeCreate: function() {
        document.body.className = 'bg-white';
        //document.getElementById('app').style.
        let myDiv = document.getElementById("app");
	          myDiv.setAttribute("style", "max-width:100%;");
    },
  computed:{
    ...mapState({
      fashion: state => state.fashion,
      isShow: state => state.isShow
  }),
  },
  methods: {
    ...mapActions([
      'getFashionID'
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

    initMove(){      
      console.log($(".anchor").position().left);
      console.log($(".anchor").width());
      //console.log($("#myAnimation1").position().left);
      let anchor_let = $(".anchor").position().left
      let anchor_width = $(".anchor").width()
      //let anchor_average = (anchor_let + anchor_width!)/2
      let anchor_average = (anchor_let + anchor_width!)
      let div_width = $(".slice-item.active").width()
      let to = anchor_average - div_width!

      $( ".slice-item.active").css({"position":"absolute"})
      $( ".slice-item.active" ).animate({ left: "+="+to+"px" }, 1000 );
    },

    initMove2() {
      let original_pos = document.getElementById("mydiv");
      //this.original_rect = original_pos.getBoundingClientRect();
     // console.log(this.original_rect.left)
      this.elem = document.getElementById("myAnimation");
      this.elem.style.position= 'absolute';
     // this.elem.style.left = this.original_rect.left + 'px';
      console.log(this.elem)
      this.pos = 0;
      clearInterval(this.time);
      this.time = setInterval(this.frame, 20);
    },
    
    frame(){
      const rect = this.elem.getBoundingClientRect();
      this.pos = rect.left + window.scrollX
      let top = rect.top + window.scrollY
      console.log("post= "+this.pos)
      if (this.pos > 200) {
      clearInterval(this.time);
      //this.elem.style.visibility='hidden';
      setTimeout(()=>{
        this.elem.style.visibility='hidden';
        this.elem.style.left = '0px';
      },2000)
      
      } else {
        this.pos +=20;
       // this.elem.style.top = this.pos + 'px';
        this.elem.style.left = this.pos + 'px';
        this.elem.style.visibility='visible';
        //console.log(this.pos);
      }
    },

    initMove1(){
      this.imgObj = document.getElementById('myAnimation');
      this.imgObj.style.position= 'absolute';
     // this.imgObj.style.top = '240px';
      this.imgObj.style.left = '0px';
      this.imgObj.style.visibility='hidden';

      this.moveRight();
    },
    moveRight(){
    let left = parseInt(this.imgObj.style.left, 10);

    if (10 >= left) {
      this.imgObj.style.left = (left + 200) + 'px';
      console.log(left)
      this.imgObj.style.visibility='visible';

      this.time = setTimeout(()=>{this.moveRight();},10); // call moveRight in 20msec

        //stopanimate = setTimeout(moveRight,20);
    } else {
      clearTimeout(this.time);
      
      
      setTimeout(()=>{
        this.imgObj.style.visibility='hidden';
        this.imgObj.style.left = '-300px';
      },500)
     // setTimeout(()=>{
        //this.imgObj.style.visibility='visible';
       // this.imgObj.style.left = '0px';
    //  },3000)
    }
    //f();
}
    
  },
  created(){
    let id = this.$route.params.id
    this.getFashionID(id);
  },

  mounted(){
    $('.my-slice .slice-item:first').addClass('active')
    
    }
  }
</script>

<style scoped>
   .row > .my-carousel{
      padding-left: 0;
      padding-right: 0;
   }

   #app {
    max-width: 100%!important;
   }
  body{
    background-color: white!important;
 }
</style>
