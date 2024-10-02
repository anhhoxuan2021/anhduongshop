

import * as Module from 'vuex';
//import * as VueRouter from 'vue-router';
import type ResponseData from "@/types/ResponseData";
import ProductService from '@/services/productsService'
import type ProductType from "@/types/ProductType";

const productModule: Module<ResponseData> = {
  namespaced: true,
    state:{
        product: <ResponseData>{},
        products: <ProductType[]>[],
        error:false,
        isShow:false,
        last_page:Number,
        total:Number
        
    },
    getters: {
      },
      actions:{
        async adminProductList({ commit },payload:any) {
          let limit = payload.limit
          let page = payload.page
          //console.log("page= "+page)
            ProductService.getProducts(page,limit)
              .then((response) => {
                
               // this.appendProducts(response.data);
                //this.pending = false;
              //  this.lastPage = response.last_page;
              commit('PRODUCTS', response)
                
              })
              .catch((e: Error) => {
                console.log(e);
              });
          },
          /*********** */
          async getProductID({ commit },id:number) {
           // let id = payload.id
            //console.log("page= "+id)
              ProductService.getProductId(id)
                .then((response) => {
                 // console.log(response);
                 // this.appendProducts(response.data);
                commit('GET_PRODUCT_ID', response)
                  
                })
                .catch((e: Error) => {
                  console.log(e);
                });
            },
      },
      mutations:{
        PRODUCTS(state:any, payload: ResponseData) {
            state.error = false
            state.products =[...state.products,...payload.data]//.push(payload.data)
            state.last_page = payload.last_page
            state.total = payload.total
            console.log(state.products)
        },
        GET_PRODUCT_ID(state:any, payload: ProductType) {
          state.error = false
          state.isShow =true
          state.product = payload
      },
      }
}

export default productModule;

