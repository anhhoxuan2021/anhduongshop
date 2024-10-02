

import * as Module from 'vuex';
//import * as VueRouter from 'vue-router';
import type ResponseData from "@/types/ResponseData";
import ProductService from '@/services/productsService'
import type ProductType from "@/types/ProductType";

const fashionModule: Module<ResponseData> = {
  namespaced: true,
    state:{
        fashion: <ResponseData>{},
        fashions: <ProductType[]>[],
        specificImgs:[] as String [],
        specificImgsColor:[] as String [],
        productImgs:[] as String [],
        
        productSize: [] as any [],
        error:false,
        isShow:false,
        last_page:Number,
        total:Number,
        brandForFilter:[],
        
    },
    getters: {
      },
      actions:{
        async productList({ commit },payload:any) {
          let limit = payload.limit
          let page = payload.page
          let typeGroup = payload.typeGroup
          
         
            ProductService.getProducts(payload)
              .then((response) => {
               // console.log(response.data);
               // this.appendProducts(response.data);
                //this.pending = false;
              //  this.lastPage = response.last_page;
              commit('PRODUCT_LIST', response)
                
              })
              .catch((e: Error) => {
                console.log(e);
              });
          },

          async productFirstList({ commit },payload:any) {
            let limit = payload.limit
            let page = payload.page
            let typeGroup = payload.typeGroup
            
           
              ProductService.getProducts(payload)
                .then((response) => {
                 // console.log(response.data);
                 // this.appendProducts(response.data);
                  //this.pending = false;
                //  this.lastPage = response.last_page;
                commit('PRODUCT_FIRST_LIST', response)

                  
                })
                .catch((e: Error) => {
                  console.log(e);
                });
            },

          async productFileter({ commit },payload:any) {
            //commit('BRANDFORFILTER',payload.brands)
              ProductService.getProducts(payload)
                .then((response) => {
                commit('PRODUCT_FILTER', response)
                  
                })
                .catch((e: Error) => {
                  console.log(e);
                });
            },
            
          async getFashionID({ commit },id:number) {
           // let id = payload.id
            //console.log("page= "+id)
              ProductService.getProductId(id)
                .then((response) => {
                  //console.log(response);
                 // this.appendProducts(response.data);
                commit('GET_FASHION_ID', response)
                  
                })
                .catch((e: Error) => {
                  console.log(e);
                });
            },
      },
      mutations:{
        PRODUCT_LIST(state:any, payload: ResponseData) {
            state.error = false
            state.fashions =[...state.fashions,...payload.data]//.push(payload.data)
            state.last_page = payload.last_page
            state.total = payload.total
           // console.log(state.fashions)
        },

        PRODUCT_FIRST_LIST(state:any, payload: ResponseData) {
          state.error = false
          state.fashions =payload.data
          state.last_page = payload.last_page
          state.total = payload.total
         // console.log(state.fashions)
      },

        PRODUCT_FILTER(state:any, payload: ResponseData) {
          state.error = false
          state.fashions = payload.data
          state.last_page = payload.last_page
          state.total = payload.total
         
         // console.log(state.fashions)
      },

      BRANDFORFILTER(state:any, payload: []) {
        state.brandForFilter = payload
       
       // console.log(state.fashions)
    },

        GET_FASHION_ID(state:any, payload: ProductType) {
          var specificImgs=[] as String []
          var productImgs =[] as any []
          var specificImgColors = [] as any []

          var obj=[] as any []

          if(payload.prod_attr !='' && payload.prod_attr !=undefined && payload.prod_attr !=null){           
           let attributes = JSON.parse(payload.prod_attr)
           var objAttr = {}

           attributes.forEach((item:any)=>{
                    
           let flag1 = false
           let flag2 = false
           let flag3 = false
           let flag4 = false

           
           var ObjPrice={}
           var s_obj ={}
           var mObjPrice={}
           var m_obj ={}
           var l_obj ={}
           var lObjPrice={}
           var xl_obj ={}
           var xlObjPrice={}
           
           if(!isNaN(parseFloat(item.prd_s_regular_price)) || !isNaN(parseFloat(item.prd_s_price))){
             flag1 = true
             Object.assign(s_obj,!isNaN(parseFloat(item.prd_s_regular_price))? {prd_regular_price:item.prd_s_regular_price}:null,
             !isNaN(parseFloat(item.prd_s_price))? {prd_price:item.prd_s_price}:null,{amount: item.prd_size_s});
             
             Object.assign(ObjPrice,{s:s_obj})
           }

           if(!isNaN(parseFloat(item.prd_m_regular_price)) || !isNaN(parseFloat(item.prd_m_price))){
            flag1 = true
            Object.assign(m_obj,!isNaN(parseFloat(item.prd_m_regular_price))? {prd_regular_price:item.prd_m_regular_price}:null,
            !isNaN(parseFloat(item.prd_m_price))? {prd_price:item.prd_m_price}:null, {amount: item.prd_size_m});
            
            Object.assign(ObjPrice,{m:m_obj})
          }

           if(!isNaN(parseFloat(item.prd_l_regular_price)) || !isNaN(parseFloat(item.prd_l_price))){
             flag2 = true
             Object.assign(l_obj,!isNaN(parseFloat(item.prd_l_regular_price))? {prd_regular_price:item.prd_l_regular_price}:null,
            !isNaN(parseFloat(item.prd_l_price))? {prd_price:item.prd_l_price}:null,  {amount: item.prd_size_l});
           
            Object.assign(ObjPrice,{l:l_obj})
           }

           

           if(!isNaN(parseFloat(item.prd_xl_regular_price)) || !isNaN(parseFloat(item.prd_xl_price))){
             flag4 = true
              Object.assign(xl_obj,!isNaN(parseFloat(item.prd_xl_regular_price))? {prd_regular_price:item.prd_xl_regular_price}:null,
              !isNaN(parseFloat(item.prd_xl_price))? {prd_price:item.prd_xl_price}:null,  {amount: item.prd_size_xl});
             
              Object.assign(ObjPrice,{xl:xl_obj})
           }
            
           if(flag1 || flag2 || flag3 || flag4){
            if(item.prd_img !='' && item.prd_img !=null && item.prd_img !=undefined){
              specificImgs = [...specificImgs,...[item.prd_img]]
              let img_color = {image:item.prd_img, color: item.prd_color}
              specificImgColors = [...specificImgColors,...[img_color]]
            }else{
              specificImgs = [...specificImgs,...['unknow.png']]
              let img_color = {image:'unknow.png', color: item.prd_color}
              specificImgColors = [...specificImgColors,...[img_color]]
            } 

            if(item.addition_img !='' && item.addition_img !=null && item.addition_img !=undefined){
              productImgs = [...productImgs,...[ {addition_images: item.addition_img}]]
            }else{
              productImgs = [...productImgs,...[{addition_images:'unknow.png'}]]
            } 
           }

           obj =[...obj,...[ObjPrice]]            
           });
           
          }          
           
         // console.log(specificImgColors)
          state.error = false
          state.isShow =true
          state.fashion = payload
          state.specificImgsColor = specificImgColors
          state.specificImgs = specificImgs
          state.productImgs =  productImgs
          state.productSize = obj
          
        },
      }
}

export default fashionModule;

