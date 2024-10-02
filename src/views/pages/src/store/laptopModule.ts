

import * as Module from 'vuex';
//import * as VueRouter from 'vue-router';
import type ResponseData from "@/types/ResponseData";
import ProductService from '@/services/productsService'
import type ProductType from "@/types/ProductType";

const laptopModule: Module<ResponseData> = {
  namespaced: true,
    state:{
        laptop: <ResponseData>{},
        laptops: <ProductType[]>[],
        laptopSpecificImgs:[] as String [],
        laptopSpecificImgsColor:[] as String [],
        laptopProductImgs:[] as String [],
        laptopProductSize: [] as any [],
        lapError:false,
        laptopIsShow:false,
        laptopLastPage:Number,
        laptoTalPage:Number,
        filterBrand:[],
        
    },
    getters: {
      },
      actions:{
        async laptopList({ commit },payload:any) {         
            ProductService.getProducts(payload)
              .then((response) => {
              commit('LAPTOP_LIST', response)
                
              })
              .catch((e: Error) => {
                console.log(e);
              });
          },

          async laptopFileter({ commit },payload:any) {
            //commit('BRANDFORFILTER',payload.brands)
              ProductService.getProducts(payload)
                .then((response) => {
                commit('LAPTOP_FILTER', response)
                  
                })
                .catch((e: Error) => {
                  console.log(e);
                });
            },
            
          async getLaptopID({ commit },id:number) {
           // let id = payload.id
            //console.log("page= "+id)
              ProductService.getProductId(id)
                .then((response) => {
                  //console.log(response);
                 // this.appendProducts(response.data);
                commit('GET_LAPTOP_ID', response)
                  
                })
                .catch((e: Error) => {
                  console.log(e);
                });
            },
      },
      mutations:{
        LAPTOP_LIST(state:any, payload: ResponseData) {
            state.lapError = false
            state.laptops =[...state.laptops,...payload.data]
            state.laptopLastPage = payload.last_page
            state.laptoTalPage = payload.total
            //console.log(state.laptops)
        },

        LAPTOP_FILTER(state:any, payload: ResponseData) {
          state.lapError = false
          state.laptops = payload.data
          state.laptopLastPage = payload.last_page
          state.laptoTalPage = payload.total
         
         // console.log(state.fashions)
      },

      FILTERBRAND(state:any, payload: []) {
        state.filterBrand = payload
       
       // console.log(state.fashions)
    },

        GET_LAPTOP_ID(state:any, payload: ProductType) {
          var specificImgs=[] as String []
          var productImgs =[] as any []
          var specificImgColors = [] as any []

          var obj=[] as any []

          if(payload.prod_attr !='' && payload.prod_attr !=undefined && payload.prod_attr !=null){           
           let attributes = JSON.parse(payload.prod_attr)
           var objAttr = {}

           attributes.forEach((item:any)=>{
                    
           let flag1 = false

           
           var ObjPrice={}
           var s_obj ={}
           
           if(!isNaN(parseFloat(item.prd_s_regular_price)) || !isNaN(parseFloat(item.prd_s_price))){
             flag1 = true
             Object.assign(s_obj,!isNaN(parseFloat(item.prd_s_regular_price))? {prd_regular_price:item.prd_s_regular_price}:null,
             !isNaN(parseFloat(item.prd_s_price))? {prd_price:item.prd_s_price}:null,{amount: item.prd_size_s});
             
             Object.assign(ObjPrice,{s:s_obj})
           }

            
           if(flag1){
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
           
         //  console.log(obj)
          state.lapError = false
          state.laptopIsShow =true
          state.laptop = payload
          state.laptopSpecificImgs = specificImgs
          state.laptopProductImgs =  productImgs
          state.laptopProductSize = obj
          state.laptopSpecificImgsColor = specificImgColors
        },
      }
}

export default laptopModule;

