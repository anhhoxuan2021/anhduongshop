<template>
 <div class="container">
    <div class="card border-none bg-white mt-4">
        <div class="card-header text-right">
            <RouterLink to="product">
                <button type="button" class="btn btn-info">Add Product</button>
            </RouterLink>
        </div>
        <div class="">
            <table class="table table-bordered" >
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th >Type</th>
                    <th >Sex</th>
                    <th>
                    <div class="row">
                        <div class="col-4">Image</div>
                       <div class="col-8">
                            <div class="row">                                
                                    <div class="col">Zise</div>
                                    <div class="col text-right">Amount</div>
                                    <div class="col text-right">Regular Price</div>
                                    <div class="col text-right">Price</div> 
                            </div>
                       </div>                     
                    </div>
                    </th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    <tr  v-for="(item, index) in products" :key="item.prd_id">
                        <td>{{index+1}}</td>
                        <td>{{ item.prd_name}}</td>
                        <td>{{ item.prd_type_name }}</td>
                        <td>{{ item.prd_sex }}</td>
                        <td>
                            <div v-if="item.prod_attr !=null && item.prod_attr !=''">                            
                                <div class="row"  v-for="(el,indx) in JSON.parse(item.prod_attr)">
                                    <div class="col col-md-4 w-90px text-center">
                                        <img :src="`${path_img1}/${el.prd_img}`"/>
                                    </div>
                                    <div class="col col-md-8">
                                        <div class="row">
                                            <div class="col col-md-3 px-0 text-left">Small</div>
                                            <div class="col  pe-0 text-right">{{el.prd_size_s}}</div>
                                            <div class="col  pe-0 text-right">{{el.prd_s_regular_price}}</div>
                                            <div class="col   text-right">{{el.prd_s_price}}</div>
                                        </div>
                                        <div class="row">
                                            <div class="col col-md-3 px-0 text-left">Medium</div>
                                            <div class="col pe-0 text-right">{{el.prd_size_m}}</div>
                                            <div class="col pe-0 text-right">{{el.prd_m_regular_price}}</div>
                                            <div class="col  text-right">{{el.prd_m_price}}</div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-3 px-0 text-left">Large</div>
                                            <div class="col pe-0 text-right">{{el.prd_size_l}}</div>
                                            <div class="col pe-0 text-right">{{el.prd_l_regular_price}}</div>
                                            <div class="col  text-right">{{el.prd_l_price}}</div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-3 px-0 text-left">XLarge</div>
                                            <div class="col pe-0 text-right">{{el.prd_size_xl}}</div>
                                            <div class="col pe-0 text-right">{{el.prd_xl_regular_price}}</div>
                                            <div class="col  text-right">{{el.prd_xl_price}}</div>
                                        </div>
                                    </div>
                                </div>  
                            </div>                          
                        </td>
                        <td>
                            <router-link  :to="`/admin/product/${item.prd_id}`">Edit</router-link >
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="row my-4">
                <div class="col">                    
                    <Pagination
                        :totalPages="totalPage"
                        :current-page="currentPage"
                        :maxVisibleButtons ="maxVisibleButtons"
                        @pagechanged="onPageChange"
                        />
                </div>
            </div>
            
        </div>
    </div>
</div>
</template>
<script lang="ts">
import  { createNamespacedHelpers } from 'vuex'
import { api_img_path } from '@/services/pathFile'
import { create } from 'domain'
import type { RouterLink } from 'vue-router'

import type  ProductType  from "@/types/ProductType";
import ProductService from '@/services/productsService'

import Pagination from '@/components/common/Pagination.vue';

const { mapState, mapActions } = createNamespacedHelpers('adminProductModule')

export default{
    components:{
        Pagination
    },
    data() {
        return {
            products: [] as ProductType[],
           // products: <ProductType[]>[],
            path_img1: api_img_path,
            search: "",
            limit: 5, 
            pending: false,
            currentPage: 1,
            lastPages:1,
            totalPage:1,
            maxVisibleButtons:3
        };
    },
    beforeCreate() {
        document.body.className = "bg-white";
        //document.getElementById('app').style.
        let myDiv = document.getElementById("app");
        myDiv!.setAttribute("style", "max-width:100%;");
    },
    computed: {
        // ...mapState({
        //     products: state => state.products,
        //     last_page: state => state.last_page,
        //     total: state => state.total
        // }),
    },
    methods: {
        ...mapActions([
            "adminProductList"
        ]),
        
        firstLoad(){
            // let page= this.page
            // let limit= this.limit
            let payload ={
                page : 1,
                limit : this.limit
            }

                ProductService.getProducts(payload).then((res)=>{
                    this.products = res.data
                    this.totalPage = res.last_page
                   if(this.maxVisibleButtons > res.last_page)  this.maxVisibleButtons = res.last_page

                    res.data.forEach(function(it1){
                      var it2 = it1.prod_attr
                      if(it2 !=null && it2 !=''){
                        //console.log(it2)
                            var it3  =JSON.parse(it2)
                          
                          //  console.log(it3)
                            // it3.forEach((el:[]) => {
                            //  console.log(isNaN(parseFloat(el.prd_l_price)))
                            // })
                        }
                    })
                                       
                })
        },
        
        onPageChange(page: number){
          
            let payload ={
                page : page,
                limit : this.limit
            }
            ProductService.getProducts(payload).then((res)=>{
                    this.products = res.data
                    this.currentPage = page;
                    this.totalPage = res.last_page
                    if(this.maxVisibleButtons > res.last_page)  this.maxVisibleButtons = res.last_page

                })
        },
    },
    created() {
            // let payload = {
            //     page: this.page,
            //     limit: this.limit
            // };
            // this.adminProductList(payload);
        },
    mounted() {
        // let payload = {
        //     page: this.page,
        //     limit: this.limit
        // };
        
        this.firstLoad();
    }
   
}
</script>
<style scoped >
    .w-90px img{
        width:90px
    }
</style>