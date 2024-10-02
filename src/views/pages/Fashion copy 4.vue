

<template>   
    <div class="normal-id">
      <div class="row mt-5 mb-2">
          <div class="col-md-6 col-sm-12 col-xm-12">
            <div class="justify-content-center d-flex bg-color-f6f6f4" >
              <div class="carousel" role="group" aria-roledescription="carousel" data-carousel aria-label="anh ho">
        <div class="carousel-buttons">
            <button class="carousel-button carousel-button_previous"
                aria-label="Previous slide"
                data-carousel-button-previous
                >
                <font-awesome-icon :icon="['fas', 'fa-chevron-circle-left']" /> 
            </button>
            <button class="carousel-button carousel-button_next"
                aria-label="Next slide"
                data-carousel-button-next
                >
                <font-awesome-icon :icon="['fas', 'fa-chevron-circle-right']" /> 
            </button>
        </div>
        <div class="slides"
            aria-live="polite"
            data-carousel-slides-container v-if="isShow">

            <div class="slide"
                role="group"
                aria-roledescription="slide"
                aria-hidden="true"
                v-for="(slice_img, index) in fashion.multi_colors.split(',')" :key="slice_img" >
                <div class="content">
                    <div class="img-div h-750">
                        <img :src="`${path_img1}/${slice_img}`" alt="Anh Ho" />
                    </div>
                </div>
            </div>
        </div>

    </div>
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
                  <div class="row">          
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
          </div>
      </div>
      <div class="row my-3">
          <div class="col col-md-6 col-sm-15 col-xs-12">
             <div class="d-flex flex-row">
                <div class="square-15 m-t-2"></div>
                <div class="bold ps-2 title-header">Special Points</div>
             </div>

            . Waiting

            <div class="row ">
          
              
            </div>    
          </div>
          <!--R-->
          <div class="col col-md-6 col-sm-12 col-xs-12">
            
          </div>
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
import MyCarouse from '@/components/common/MyCarouse.vue';

import { api_img_path } from '@/services/pathFile'

import  { createNamespacedHelpers } from 'vuex'
import type MyCarouseVue from '@/components/common/MyCarouse.vue';

const { mapState, mapActions } = createNamespacedHelpers('fashionModule')

export default {    
    components: {
    CarouselProject,
    SideBar,
    HeadSideBarRight,
    ShowSameImg,
    //MyCarouse,
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
    }
  },
  beforeCreate: function() {
        document.body.className = 'bg-white';
        //document.getElementById('app').style.
        let myDiv = document.getElementById("app");
	          myDiv!.setAttribute("style", "max-width:100%;");
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
  //--carousel--
  modulo(number:number, mod:number):number {
                let result = number % mod;
                if (result < 0) {
                    result += mod;
                }
                return result;
            },

                setUpCarousel(carousel:any) {
                let $this = this
                function handleNext() {
                   let slidesContainer = carousel.querySelector('[data-carousel-slides-container]');
                   let numSlides = slidesContainer.children.length;

                    console.log(slidesContainer.children[currentSlide])
                    slidesContainer.children[currentSlide].setAttribute('aria-hidden',true) 
                    currentSlide = $this.modulo(currentSlide + 1, numSlides);
                    slidesContainer.children[currentSlide].setAttribute('aria-hidden',false)
                    changeSlide(currentSlide);
                }

                function handlePrevious() {
                  let slidesContainer = carousel.querySelector('[data-carousel-slides-container]');
                  let numSlides = slidesContainer.children.length;
                    slidesContainer.children[currentSlide].setAttribute('aria-hidden',true)
                    currentSlide = $this.modulo(currentSlide - 1, numSlides);
                    slidesContainer.children[currentSlide].setAttribute('aria-hidden',false)
                    console.log(carousel.querySelector('[data-carousel-button-previous]'))
                    changeSlide(currentSlide);
                }

                function changeSlide(slideNumber:number) {
                  let slidesContainer = carousel.querySelector('[data-carousel-slides-container]');
                  let numSlides = slidesContainer.children.length;
                    // change current slide
                    carousel.style.setProperty('--current-slide', slideNumber);

                    // handle screen reader accessibility
                    const previousSlideNumber = $this.modulo(slideNumber - 1, numSlides);
                    const nextSlideNumber = $this.modulo(slideNumber + 1, numSlides);
                    const previousSlide = slidesContainer.children[previousSlideNumber];
                    const currentSlideElement = slidesContainer.children[slideNumber];
                    const nextSlide = slidesContainer.children[nextSlideNumber];

                    previousSlide.setAttribute('aria-hidden', true);
                    nextSlide.setAttribute('aria-hidden', true);
                    currentSlideElement.setAttribute('aria-hidden', false);
                }

                // get elements
                const buttonPrevious = carousel.querySelector('[data-carousel-button-previous]');
                const buttonNext = carousel.querySelector('[data-carousel-button-next]');
               // let slidesContainer = carousel.querySelector('[data-carousel-slides-container]');
                

                let currentSlide = 0;
                
                //console.log(numSlides)
                // set up events
                buttonPrevious.addEventListener('click', handlePrevious);
                buttonNext.addEventListener('click', handleNext);
            }

    
  },
  created(){
    let id = this.$route.params.id
    this.getFashionID(id);       
  },

  mounted(){        
    let $this = this
        const carousels = document.querySelectorAll('[data-carousel]');
    carousels.forEach(function(item){
        $this.setUpCarousel(item)
        console.log("test here")               
        console.log("test here")  
    });
   
  }

  //end export
  }
 
</script>

<style scoped>
.carousel {
    --current-slide: 0;  /*use css to avoid javasctipt broken*/
    /* we set position relative so absolute position works properly for the buttons */
    position: relative;
    overflow: hidden;
}

.carousel-button {
    /* vertically centering the buttons */
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;

    /* basic styling */
    padding: 0;
    margin: 0.5rem;
    border-radius: 50%;
    background-color: transparent;
    border: none;

    font-size: 1.5rem;
    cursor: pointer;

    transition: color 0.1s;
}

.carousel-button:hover {
    color: rgba(0, 0, 0, 0.5);
}

.carousel-button_next {
    /* The "next slide button" will be at the right */
    right: 0;
}

.carousel-button_previous{
  left: 0;
}

.slides {
    display: flex;
   /* transition: transform 0.5s;  don't want use transition, USE ABSOLUTE*/
    /*transform: translateX(calc(-100%);*/
    /*don't want use transition, USE ABSOLUTE and left -100%*/
   /* position: absolute;
    left:-100%*/
    /*use --current-slide */
    width: 100%;
    transition: transform 0.5s;
    transform: translateX(calc(-100% * var(--current-slide)));
}

.slide {
    flex: 0 0 100%;
}

.content {
    width: 100%;
    margin: auto;
    /*padding: 5rem;*/

    background-size: cover;
    background-position: center;

    font-size: 1.5rem;
    color: white;
    text-align: left;
}


/*.text-container {
    max-width: 50ch;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.5);
}*/

@media screen and (min-width: 768px) {
    .carousel-button {
        font-size: 2rem;
        margin: 1rem;
    }
}
</style>
