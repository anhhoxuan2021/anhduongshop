<template>
    <div class="row">
    <div class="col f-17 bold">
        DISCOUNT CODE
    </div>
    </div>
    <div class="row mt-2">
        <div class="col col-md-8 f-17 col-sm-7 input-form-control">
            <input type="text" class="form-control discount-code" ref="discount_code" :value="checkDiscount.discount_code">
        </div>
        <div class="col col-md-4 col-sm-5 btn-h-2">
            <button class="btn btn-black b-r-01" v-on:click="getDiscountByCode">APPLY</button>
        </div>
    </div>
    <div class="row mt-3">
        <div class="col f-17 bold">
            Provisional Bill Amount
        </div>
        <div class="col f-17 bold text-left provisional-bill-amount">
            {{checkDiscount.tempTotal}}
        </div>
    </div>
    <div class="row mt-3">
        <div class="col f-17 bold">
            DisCount
        </div>
        <div class="col f-17 bold text-left discount_amount">
            {{checkDiscount.dicount_amount}}
        </div>
    </div>
    <div class="row mt-3" v-if="shippmentFree">
        <div class="col f-17 bold">
            Shippment Fee
        </div>
        <div class="col f-17 bold text-left discount_amount">
           
        </div>
    </div>
    <div class="row mt-3">
        <div class="col f-17 bold">
            Temporarily Calculate The Total Rrder Amount
        </div>
        <div class="col f-17 bold text-left total-amount">
            {{checkDiscount.totalCart}}
        </div>
    </div>
    <div class="row mt-3">
        <div class="col btn-h-2">
            <button class="btn b-r-01 btn-transparent  me-3" v-if="continueSshopping">CONTINUE SHOPPING</button>
            <router-link to="/checkout/payment" v-if="btnPayment">
                <button class="btn b-r-01 btn-black"> PAYMENT</button>
            </router-link>
            
        </div>
    </div>
</template>

<script lang="ts">
import store from '@/store'
import { mapState,mapActions } from 'vuex'
import type CartType from '@/types/CartType'
import {sumOrderBought} from '@/composables/cart'
import type DiscountType from '@/types/DiscountType'

export default{
    props:{
        continueSshopping: Boolean,
        shippmentFree: Boolean,
        btnPayment:Boolean
    },
    data(){
        return {
           
        }
    },
    computed:{
        ...mapState({
            discount: state=>state.discount
        }),

        checkDiscount(){            
            if(this.discount !='' && !jQuery.isEmptyObject(this.discount )){
                console.log(this.discount)
               // this.discount_amount = this.discount.discount_amount
              let sum = sumOrderBought(this.discount)

                return {
                    totalCart :sum.totalCart, 
                    tempTotal :sum.tempTotal, 
                    dicount_amount:sum.discount_amount,
                    discount_code:sum.discount_code
                }
                
            }else{
                var discountStorage =<DiscountType>{};
                let discount_json = localStorage.getItem('shareDiscount')
                //console.log(discount_json)
                if(discount_json !='' && discount_json != null && discount_json != undefined && 
                !jQuery.isEmptyObject(discount_json) && discount_json!="{}"){
                   
                    discountStorage = JSON.parse(discount_json)
                    let sum = sumOrderBought(discountStorage)                   

                    
                    return {
                        totalCart :sum.totalCart, 
                        tempTotal :sum.tempTotal, 
                        dicount_amount:sum.discount_amount,
                        discount_code:sum.discount_code
                     }
                }else{
                    let sum = sumOrderBought(discountStorage)
                    return {
                        totalCart :sum.totalCart, 
                        tempTotal :sum.tempTotal, 
                        dicount_amount:sum.discount_amount,
                        discount_code:sum.discount_code
                    }
                }
                
            }
        }
    },
    methods:{
        ...mapActions(['getDiscount']),

        getDiscountByCode(){
            let code = this.$refs.discount_code.value// this.discount_code
           this.getDiscount(code)
        }
    }
}
</script>