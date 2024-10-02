<template>
    <div class=" f-15">
        <div class="row w-75 m-auto">
            <div class="col d-flex flex-row h-12 bg-white">
                <a @click="$router.go(-1)" class="w-40 border-end ps-2 no_decorate">
                    <font-awesome-icon :icon="['fa', 'fa-angle-left']" /> 
                </a>
                <div class="w-100 text-center f-18 bold">Orders history</div>
            </div>
        </div>
        <div class="height-10 bg-color-f8f8f8"> </div>

        <div class="row " v-for="(item,index) in orders" :key="item.order_id">
            <div class="w-75 mt-2 pb-4 bg-white  m-auto">
                <div class="col">
                <div class="row h-12">
                    <div class="col">
                        <span class="ps-3">Create date: </span>
                        <span class="bold f-18 ">{{item.date}} - {{item.hour}}</span>
                    </div>
                    <div class="col text-center">
                        <RouterLink :to="`/order/${item.order_id}`">
                            Review order {{item.order_code}}
                        </RouterLink>
                    </div>
                    <div class="col text-right pe-4">
                        <span class="c-aaa">Order status: </span>
                        <span>{{item.order_status}}</span>
                    </div>
                </div>
                <div class="row specific-product bg-white py-2 my-2 m-auto w-90" v-for="(el,indx) in item.prds" :key="indx">
                    
                    <RouterLink :to="`/fashion/${el.order_product_id}`" class="prd-libray-img me-1 col-md-2 col-xs-12 col-sm-12" v-if="el.order_product_type == '1'">
                        <img class="img-thumbnail" :src="`${path_img1}/${el.order_product_img}`" alt="Thiet ke web Anh Ho" >
                    </RouterLink>
                    <RouterLink :to="`/laptop/${el.order_product_id}`" class="prd-libray-img me-1 col-md-2 col-xs-12 col-sm-12" v-else>
                        <img class="img-thumbnail" :src="`${path_img1}/${el.order_product_img}`" alt="Thiet ke web Anh Ho" >
                    </RouterLink>
                    <div class="d-flex flex-column col-md-9 col-xs-12 col-sm-12">
                            <div class="row">
                                <div class="col bold">{{el.order_product_name}}</div>
                                <div class="col-3 text-right">${{ Number(el.order_product_price).toLocaleString(undefined, {minimumFractionDigits: 2}) }}</div>
                            </div>
                            <div class="row">
                                <div class="col-3  c-666">Color</div>
                                <div class="col-3  c-666">Size</div>
                                <div class="col-3  c-666" >{{el.order_product_type == '1'? 'Sex':''}}</div>
                                <div class="col-3 text-right"><span class="c-666 f-12">Quantity:</span> {{el.order_product_qty}}</div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <span class="prd-img-color me-1">
                                        {{el.order_product_color}}
                                    </span>
                                </div>
                                <div class="col-3 bold capitalize">{{el.order_product_size}}</div>
                                <div class="col-3 bold  bold">{{el.order_product_sex}}</div>
                                <div class="col-3 bold  bold text-right">${{ Number(el.order_product_qty * el.order_product_price).toLocaleString(undefined, {minimumFractionDigits: 2}) }}</div>
                            </div>

                    </div>
                </div>
                <div class="row specific-product bg-white py-2 my-2 m-auto w-90">
                    <div class="prd-libray-img me-1 col-md-2 col-xs-12 col-sm-12"> </div>
                    <div class="col-md-9 col-xs-12 col-sm-12">
                        <div class="row">
                            <div class="col d-flex flex-column border-t text-right">
                                <span class="c-666">Provisional amount: </span>
                                <span class="c-666">Discount: </span>
                                <span class="c-666">Shipping fee: </span>
                                <span class="c-666">Total order: </span>
                            </div>
                            <div class="col-2 d-flex flex-column border-t text-right">
                                <span class="bold ">${{ Number(item.order_total - item.order_discount_total).toLocaleString(undefined, {minimumFractionDigits: 2}) }}</span>
                                <span class="">(${{ Number(item.order_discount_total).toLocaleString(undefined, {minimumFractionDigits: 2}) }})</span>
                                <span class="">&nbsp; </span>
                                <span class="bold ">${{ Number(item.order_total).toLocaleString(undefined, {minimumFractionDigits: 2}) }}</span>
                            </div>
                        </div>
                    </div>               
                </div>
                <div class="row bg-white py-2 my-2 justify-content-end m-auto w-90">
                    <div class="col text-right"></div>
                </div>
            </div> 
            </div>
             
            <div class="height-10 bg-color-f8f8f8"> </div>
        </div>

    </div>
    
</template>
<script lang="ts">
import ProductService from '@/services/productsService'
import type ShipmentOrderType from '@/types/ShipmentOrderType';
import { api_img_path } from '@/services/pathFile'
    const config = api_img_path

    export default{
    beforeCreate: function() {
        document.body.className = 'bg-white';
        //document.getElementById('app').style.
        let myDiv = document.getElementById("app")
	      myDiv!.setAttribute("style", "max-width:100%;"); 
    },
    data(){
        return{
            orders: [] as ShipmentOrderType[],
            path_img1:config,
        }
    },
    methods:{
        getOrders(){
            ProductService.getorders(1).then(response=>{
                this.orders = response

                console.log(this.orders)
            })
        }
    },
    created(){
        this.getOrders()
    }

    }

</script>