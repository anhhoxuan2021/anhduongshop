<template>
    <div class=" f-15">
        <div class="row w-75 m-auto">
            <div class="col d-flex flex-row h-12 bg-white">
                <a @click="$router.go(-1)" class="w-40 border-end ps-2 no_decorate">
                    <font-awesome-icon :icon="['fa', 'fa-angle-left']" /> 
                </a>
                <div class="w-100 text-center f-18 bold">Order details {{order.order_code}}</div>
            </div>
        </div>
        <div class="height-10 bg-color-f8f8f8"> </div>

        <div class="row">
            <div class="mt-2 pb-4 bg-white w-75 m-auto">
                <div class="col">
                    <div class="row h-12">
                        <div class="col">
                            <span class="ps-3">Create date: </span>
                            <span class="bold f-18 ">{{order.date}} - {{order.hour}}</span>
                        </div>
                        <div class="col text-right pe-4">
                            <span class="c-aaa">Order status: </span>
                            <span>{{order.order_status}}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col b-r-5 bg-gray-200 px-2 py-3" style="margin-left:25px; margin-right: 25px; width: 98%;">
                            <div class="row">
                                <div class="col-md-2 col-xm-6 col-sm-6 ps-md-3 ps-ms-1 ps-xs-1 c-aaa">  Receiver : </div>
                                <div class="col-md-10 col-xm-6 col-sm-6 ps-0 d-flex flex-col">
                                    <span>{{order.full_name}}, {{order.shipment_phone}}</span>
                                    <span>{{order.shipment_address}}, {{order.shipment_city}},
                                    {{order.shipment_state}}, {{order.shipment_zipcode}}</span>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-2 col-xm-6 col-sm-6 ps-md-3 ps-ms-1 ps-xs-1 c-aaa">  Delivery time : </div>
                                <div class="col-md-10 col-xm-6 col-sm-6 ps-0 d-flex flex-col">
                                    <span>{{ order.delivery_time}}</span>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-2 col-xm-6 col-sm-6 ps-md-3 ps-ms-1 ps-xs-1 c-aaa">  Payment method : </div>
                                <div class="col-md-10 col-xm-6 col-sm-6 ps-0 d-flex flex-col">
                                    <span>{{order.order_payment_method}}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col text-center">
                                    <button class="btn btn-light c-888" >Feedback product quality</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3 ps-3">
                        <div class="col">Delivery History</div>
                    </div>
                    <div class="row h-2 mt-4 d-flex flex-row m-auto w-80">
                        <div v-bind:class="[`w-33  position-relative ${bg_confirm}`]"> 
                            <div :class="[`absolute-hw-11 possion-l-0 possion-t--7 ${circle_bg_confirm}`]"></div>
                        </div>

                        <div :class="[`w-33 position-relative ${bg_shipped}`]">
                            <div :class="[`absolute-hw-11 possion-l-0 possion-t--7 ${circle_bg_shipped}` ]"></div>
                        </div>
                        <div :class="[`w-33  position-relative ${bg_delivering}`]">
                            <div :class="[`absolute-hw-11  possion-l-0 possion-t--7 ${circle_bg_delivering}`]"></div>
                            <div :class="[`absolute-hw-11 possion-r-0 possion-t--7 ${circle_bg_delivered}`]"></div>
                        </div>
                    </div>

                    <div class="row mt-3 mb-5 d-flex flex-row m-auto w-80 f-12">
                        <div class="w-33 position-relative">
                            <div class="position-absolute possion-l--20 d-flex flex-column">
                                <span :class="`${text_confirm}`">Confirmed</span>
                                <span class="c-c5c5c5">{{order.hour}} - {{ order.created_at }} </span>
                            </div>
                        </div>

                        <div class="w-33 position-relative">
                            <div class="position-absolute possion-l--20  d-flex flex-column">
                                <span class="{{$text_shipped}}">Shipped</span>
                                <span class="c-c5c5c5"> {{order.shipped_time1}} - {{ order.shipped_date }}</span>
                            </div>
                        </div>
                        <div class="w-33 position-relative">
                            <div class="position-absolute possion-l--20  d-flex flex-column">
                                <span class="{{$text_delivering}}">Delivering</span>
                                <span class="c-c5c5c5">{{order.delivering_time1}} - {{ order.delivering_date }}</span>
                            </div>
                            <div class="position-absolute possion-r--20  d-flex flex-column">
                                <span class="{{$text_delivered}}">Delivered</span>
                                <span class="c-c5c5c5">{{order.delivered_time1}} - {{ order.delivered_date }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="row ">
                        <div class="col h-1 bg-fafafa mx-4"> </div>
                    </div> 
                    <div class="row specific-product bg-white py-2 my-2 m-auto w-90" v-for="(el,index) in order.prds" :key="index">
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
                                <span class="bold ">${{ Number(order.order_total - order.order_discount_total).toLocaleString(undefined, {minimumFractionDigits: 2}) }}</span>
                                <span class="">(${{ Number(order.order_discount_total).toLocaleString(undefined, {minimumFractionDigits: 2}) }})</span>
                                <span class="">&nbsp; </span>
                                <span class="bold ">${{ Number(order.order_total).toLocaleString(undefined, {minimumFractionDigits: 2}) }}</span>
                            </div>
                        </div>
                    </div> 
                    <div class="row ">
                        <div class="col h-1 bg-fafafa mx-4"> </div>
                    </div>  
                    <div class="row bg-white py-2 my-2 m-auto w-90">
                    <div class="col">
                        <div class="row"> <div class="col c-c5c5c5">Custormer reviews</div></div>
                        <div class="row">
                            <div class="col-3 mx-1 unsatisfied" style="cursor: pointer">
                                <span class=" d-flex flex-row border border-secondary h-35 border-radius-5" >
                                    <i class="bi bi-emoji-astonished text-secondary px-3 f-18 d-flex align-items-center"></i>
                                    <span class="px-3 d-flex align-items-center text-secondary">Unsatisfied</span>
                                    <i class="bi bi-check-circle text-secondary px-3 f-18 d-flex align-items-center"></i>
                                </span>
                            </div>
                            <div class="col-3 mx-1 satisfied" style="cursor: pointer">
                                <span class=" d-flex flex-row border border-secondary h-35 border-radius-5" >
                                    <i class="bi bi-emoji-grin text-secondary px-3 f-18 d-flex align-items-center"></i>
                                    <span class="px-3 d-flex align-items-center text-secondary">Satisfied &nbsp;&nbsp;&nbsp;</span>
                                    <i class="bi bi-check-circle text-secondary px-3 f-18 d-flex align-items-center"></i>
                                </span>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col">
                                <label  class="form-label c-c5c5c5">Please give us your feedback so we can serve you better</label>
                                <textarea class="form-control" rows="4"></textarea>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="accept-call-from-us" checked>
                                    <label class="form-check-label" for="accept-call-from-us">
                                        Accept calls from us
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col text-center">
                                <button class="btn btn-secondary form-control">Submit review</button>
                            </div>
                        </div>
                    </div>

            </div>            
                </div>

                </div>
            </div>
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
            order: <ShipmentOrderType>{},
            path_img1:config,
            bg_confirm :'bg-ededed',
            bg_shipped :'bg-ededed',
            bg_delivering :'bg-ededed',
            bg_delivered :'bg-ededed',
            circle_bg_confirm : 'circle-ededed',
            circle_bg_shipped : 'circle-ededed',
            circle_bg_delivering : 'circle-ededed',
            circle_bg_delivered : 'circle-ededed',
            text_confirm : 'c-c5c5c5',
            text_shipped : 'c-c5c5c5',
            text_delivering : 'c-c5c5c5',
            text_delivered: 'c-c5c5c5',
        }
    },
    methods:{
        getOrder(order_id: any){            
            ProductService.getorder(order_id).then(response=>{
              let ordr =  this.order = response
            if(ordr.order_status == 'Checking'){
                this.bg_confirm ='bg-success';
                this.circle_bg_confirm = 'circle-success';
                this.text_confirm = 'text-success';
            }else if(ordr.order_status == 'Shipped'){
                this.bg_shipped = this.bg_confirm ='bg-success';
                this.circle_bg_shipped = this.circle_bg_confirm = 'circle-success';
                this.text_shipped = this.text_confirm = 'text-success';
            }else if(ordr.order_status == 'Delivering'){
                this.bg_delivering = this.bg_shipped = this.bg_confirm ='bg-success';
                this.circle_bg_delivering = this.circle_bg_shipped = this.circle_bg_confirm = 'circle-success';
                this.text_delivering = this.text_shipped = this.text_confirm = 'text-success';
            }else if(ordr.order_status == 'Delivered'){
                this.bg_delivering = this.bg_shipped = this.bg_confirm ='bg-success';
                this.circle_bg_delivered = this.circle_bg_delivering = this.circle_bg_shipped = this.circle_bg_confirm = 'circle-success';
                this.text_delivered = this.text_delivering = this.text_shipped = this.text_confirm = 'text-success';
            }
                

                console.log(this.order)
            })
        }
    },
    created(){
        let id = this.$route.params.id
        this.getOrder(id)
    }

    }

</script>