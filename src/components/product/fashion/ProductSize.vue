<template>
    <label>Product Size</label>
            <div class="row mt-2">
                <div class="col">
                    <label>Small</label>
                    <input type="number" class="form-control prd_size_s mt-2" v-model="prd_size_s" placeholder="Amount">
                </div>
                <div class="col">
                    <label>Medium</label>
                    <input type="number" class="form-control prd_size_m mt-2" v-model="prd_size_m" placeholder="Amount">
                </div>
                <div class="col">
                    <label>Large</label>
                    <input type="number" class="form-control prd_size_l mt-2" v-model="prd_size_l" placeholder="Amount">
                </div>
                <div class="col">
                    <label>XLarge</label>
                    <input type="number" class="form-control prd_size_xl mt-2" v-model="prd_size_xl" placeholder="Amount">
                </div>
            </div>
            <div class="row mt-2">
                <div class="col">
                    <label>Small price</label>
                    <input type="number" class="form-control prd_s_price mt-2" v-model="prd_s_price" placeholder="Price">
                </div>
                <div class="col">
                    <label>Medium Price</label>
                    <input type="number" class="form-control prd_m_price mt-2" v-model="prd_m_price" placeholder="Price">
                </div>
                <div class="col">
                    <label>Large Price</label>
                    <input type="number" class="form-control prd_l_price mt-2" v-model="prd_l_price" placeholder="Price">
                </div>
                <div class="col">
                    <label>XLarge Price</label>
                    <input type="number" class="form-control prd_xl_price mt-2" v-model="prd_xl_price" placeholder="Price">
                </div>
            </div>
            <div class="row mt-2">
                <div class="col">
                    <label>Small regular price</label>
                    <input type="number" class="form-control prd_s_regular_price mt-2" v-model="prd_s_regular_price" placeholder="Price">
                </div>
                <div class="col">
                    <label>Medium regular price</label>
                    <input type="number" class="form-control prd_m_regular_price mt-2" v-model="prd_m_regular_price" placeholder="Price">
                </div>
                <div class="col">
                    <label>Large regular price</label>
                    <input type="number" class="form-control prd_l_regular_price mt-2" v-model="prd_l_regular_price" placeholder="Price">
                </div>
                <div class="col">
                    <label>XLarge regular price</label>
                    <input type="number" class="form-control prd_xl_regular_price mt-2" v-model="prd_xl_regular_price" placeholder="Price">
                </div>
            </div>
</template>

<script lang="ts">
    export default{
        props:{
            prod_sizes: <any>{},
            prod_prices: <any>{},
            prod_regular_price: <any>{}
        },
        data(){
            return{
                prd_size_s:'',
                prd_size_m:'',
                prd_size_l: '',
                prd_size_xl: '',

                prd_s_price: '',
                prd_m_price: '',
                prd_l_price: '',
                prd_xl_price: '',

                prd_s_regular_price: '',
                prd_m_regular_price: '',
                prd_l_regular_price: '',
                prd_xl_regular_price: '',
            }
        },
        created(){
            if(this.prod_sizes !=undefined){
                this.prd_size_s =  this.prod_sizes?.s_amount
                this.prd_size_m =  this.prod_sizes?.m_amount
                this.prd_size_l =  this.prod_sizes?.l_amount
                this.prd_size_xl =  this.prod_sizes?.xl_amount
            }
            
            if(this.prod_prices !=undefined){
                this.prd_s_price = this.prod_prices?.s_price
                this.prd_m_price = this.prod_prices?.m_price
                this.prd_l_price = this.prod_prices?.l_price
                this.prd_xl_price = this.prod_prices?.xl_price
            }

            if(this.prod_regular_price !=undefined){

                this.prd_s_regular_price = this.prod_regular_price?.s_regular_price
                this.prd_m_regular_price = this.prod_regular_price?.m_regular_price
                this.prd_l_regular_price= this.prod_regular_price?.l_regular_price
                this.prd_xl_regular_price= this.prod_regular_price?.xl_regular_price
            }          

        }
    }
</script>