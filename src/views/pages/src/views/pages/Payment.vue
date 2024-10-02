<template>
   <div id="p-cart" class="container">
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
                    <font-awesome-icon :icon="['fas', 'fa-credit-card']" /> 
                    &nbsp; Payment
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
            <SumAmountCart :shippmentFree="true" />
        </div>
    </div>

    <div class="row mt-3">        
        <div class="col col-md-7 col-sm-12">
          <div class="row">
            <div class="col f-17 bold">SHIPPMENT INFO</div>
          </div>
          <div class="row mt-2">
            <form class="input-form-control">
                <div class="row">
                    <div class="col col-md-6 col-sm-12 ">
                        <label class="mb-1">Full Name(*)</label>
                        <input type="text" class="form-control full_name el" v-model="full_name">
                    </div>
                    <div class="col col-md-3 col-sm-12 ">
                        <label class="mb-1">Phone Number(*)</label>
                        <input type="text" class="form-control shipment_phone el" ref="shipment_phone">
                    </div>
                    <div class="col col-md-3 col-sm-12 ">
                        <label class="mb-1">Email address(*)</label>
                        <input type="email" class="form-control shipment_email el" v-model="shipment_email">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col col-md-4 col-sm-12 ">
                        <label class="mb-1">State(*)</label>
                        <select class="form-select shipment_state el" v-model="shipment_state">
                            <option value=""></option>
                            <option :value="op.code" v-for="(op,index) in stateList" :key="index">{{ op.state }} </option>

                        </select>
                    </div>
                    <div class="col col-md-5 col-sm-12 ">
                        <label class="mb-1">City(*)</label>
                        <select class="form-select shipment_city el" v-model="shipment_city">
                            <option value=""></option>
                            <option :value="cty.city" v-for="(cty,index) in cities" :key="index">{{ cty.city }} </option>
                        </select>
                    </div>
                    <div class="col col-md-3 col-sm-12 ">
                        <label class="mb-1">Zipcode(*)</label>
                        <select class="form-select shipment_zipcode el" v-model="shipment_zipcode">
                            <option value=""></option>
                            <option :value="z.zip" v-for="(z,index) in zips" :key="index">{{ z.zip }} </option>
                        </select>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col col-md-12 col-sm-12 ">
                        <label class="mb-1">Address(*)</label>
                        <input type="text" class="form-control shipment_address el" v-model="shipment_address">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col col-md-12 col-sm-12 ">
                        <label class="mb-1">Note</label>
                        <textarea rows="4" class="form-control shippment_note el" v-model="shippment_note">

                        </textarea>
                    </div>
                </div>
                <div class="row my-3">
                    <div class="col col-md-12 col-sm-12 ">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input el" key_clmn="shipment_company" type="radio" name="shipment_to_company"
                                    value="0"  v-model="shipment_to_company">
                            <label class="form-check-label" for="at_company">At Your Office</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" checked="checked" type="radio" name="shipment_to_company"
                                    id="at_home" value="1" v-model="shipment_to_company">
                            <label class="form-check-label" for="at_home">At Your Home</label>
                        </div>
                    </div>
                </div>

                
            </form>
          </div>
        </div>
          <!--R-->
          <div class="col col-md-5 col-sm-12">
            <div class="row  mb-3">
                <div class="col  d-flex flex-row align-items-center">
                    <div class="f-22">
                        <font-awesome-icon icon="fa-solid fa-truck-fast"  />
                        </div> 
                    <span class="f-15 bold ms-3">SHIPPING METHOD</span>
                </div>
               
            </div>
            <div class="row mt-3">
                <div class="col ">
                    <label>
                     <input type="radio" name="fast_delivery" v-model="fast_delivery" value="1"> Fast Delivery( $2)
                    </label>
                </div>
            </div>
            <div class="row  mt-3">
                <div class="col  d-flex flex-row align-items-center">
                    <div class="f-22">
                         <font-awesome-icon icon="fa-solid fa-credit-card"  />
                        </div> 
                    <span class="f-15 bold ms-3">PAYMENT METHOD</span>
                </div>
               
            </div>
            <div class="row mt-3">
                <div class="col ">
                    <label>
                     <input type="radio" name="card" v-model="method" value="COD"> Payment on Deliveried(COD)
                    </label>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col ">
                    <label>
                     <input type="radio" name="card" v-model="method" value="CARD"> ATM/Visa/Master/JCB/QRCode
                    </label>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col btn-h-2">
                    <button class="btn b-r-01 btn-black w-60" @click="payment()"> PAYMENT</button>
                </div>
            </div>
        </div>
    </div>

   </div>

</template>
<script lang="ts">
import AddCart from '@/components/cart/AddCart.vue';
import HeadSideBarRightBlack from '@/components/menu/HeadSideBarRightBlack.vue'
import Breadcrumb from '@/components/cart/Breadcrumb.vue';
import SumAmountCart from '@/components/cart/SumAmountCart.vue';

import StateService from '@/services/statesService'
import type StateCodeType from '@/types/StateCodeType'

import productsService from '@/services/productsService';

import store from '@/store'

export default{
    components: {
    AddCart,
    HeadSideBarRightBlack,
    Breadcrumb,
    SumAmountCart
   },
   data(){
       return {
        full_name: '',
        shipment_phone: '',
        shipment_email: '',
        shipment_state: '',
        shipment_city: '',
        shipment_zipcode: '',
        shipment_address: '',
        shippment_note: '',
        shipment_to_company: '',
        fast_delivery: '',
        method: '',

        stateList :[] as StateCodeType[],
        cities: <String[]>[],
        zips: <String[]>[]
       }
   },
    beforeCreate: function() {
        document.body.className = 'bg-white';
        //document.getElementById('app').style.
        let myDiv = document.getElementById("app")
	      myDiv!.setAttribute("style", "max-width:100%;");
         
          
    },
    created(){
        this.getState()
    },
    methods:{
        async payment(){            
           let data_post = {
                full_name: this.full_name,
                shipment_phone: this.$refs.shipment_phone.value,   
                shipment_email: this.shipment_email,
                shipment_state: this.shipment_state,
                shipment_city: this.shipment_city,
                shipment_zipcode: this.shipment_zipcode,
                shipment_address: this.shipment_address,
                shippment_note: this.shippment_note,
                shipment_to_company: this.shipment_to_company,
                fast_delivery: this.fast_delivery
                
            }

            let method = this.method

           let  yourCart= localStorage.getItem('yourCart')
           let discount_code =''
           let discount_value =0
           let discount_json = localStorage.getItem('shareDiscount')
                //console.log(discount_json)
                if(discount_json !='' && discount_json != null && discount_json != undefined && 
                !jQuery.isEmptyObject(discount_json) && discount_json!="{}"){
                   let discount = JSON.parse(discount_json)
                    discount.discount_amount 

                    discount_value =  discount.discount_amount 
                    discount_code = discount.discount_code
                }

            productsService.createOrder({
                data_post:data_post, 
                yourCart:yourCart,
                discount_code:discount_code,
                discount_value:discount_value,
                method:method
            }).then((response) => {
                  
                if(response.order_id !=undefined){
                    localStorage.removeItem('yourCart');  
                    localStorage.removeItem('shareDiscount');  
                    store.dispatch('addProductToCart', []) 
                    $('#modal-success .modal-title').text('Add cart successfully');

                    ($('#modal-success') as any).modal('show')
                    setTimeout(function(){
                        ($('#modal-success') as any).modal('hide')

                    },1500)
                }else{
                    $('#modal-error .modal-title').text('Error');

                    ($('#modal-error') as any).modal('show')
                    setTimeout(function(){
                        ($('#modal-error') as any).modal('hide')

                    },2200)
                }             
                })
                .catch((e: Error) => {
                console.log(e);
                });
            
        },
       
        getState(){
            StateService.getStates()
                .then((response) => {
                this.stateList = response                
                })
                .catch((e: Error) => {
                console.log(e);
                });
        },
        gCities(state: string){
            
            StateService.getCities(state)
                .then((response) => {
                this.cities = response
              
                })
                .catch((e: Error) => {
                console.log(e);
                });
        },

        gZips(city: string){
            StateService.getzips(city)
                .then((response) => {
                this.zips = response
                })
                .catch((e: Error) => {
                console.log(e);
                });
        }
        
    },
    mounted(){
        $('.shipment_phone').inputmask('(999) 999-9999');

       var orgThis = this
        $('#p-cart').on('change','.shipment_state',function(){
            let state = $(this).val();
            orgThis.gCities(state)
        });

        $('#p-cart').on('change','.shipment_city',function(){
            let city = $(this).val();
            orgThis.gZips(city)
        })
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
