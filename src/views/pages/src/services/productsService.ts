'use strict';
import axios from 'axios'
import qs from 'qs'

import type  ProductType  from "@/types/ProductType";
import type ResponseData from "@/types/ResponseData";
import type DiscountType from '@/types/DiscountType'
import type FormatShipmentOrder from '@/types/FormatShipmentOrder';


const config_pth = 'http://localhost:8000/api/'
axios.defaults.baseURL = config_pth;
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
// config header
var config = {
    headers: {
        //'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
       //  'Authorization': ''
       //headers: { Accept: 'application/json', apikey: 'xxxx' },
       Accept: 'application/json'
    }
    };
  
    const Axio = axios.create({
        baseURL: config_pth,
    });
class ProductService {
    getProducts2 =(payload: {})=>{
        // console.log(qs.stringify(paras))
         return Axio.get<ResponseData>('product-list').then(
             response => response.data
         )
     }   
     getProducts =(payload: {})=>{
      // console.log(qs.stringify(paras))
       return Axio.get<ResponseData>('product-list', {
          params: payload
        }).then(
           response => response.data
       )
   }    

     /**************************** */
     getProductId =(id:number)=>{
        return Axio.get<ProductType>('fashion', {
            params: {
              id: id,
            }
          }).then(response => response.data); 
     }

       /**************************** */
       getProductId1 =(id:number)=>{
        return Axio.get('fashion', {
            params: {
              id: id,
            }
          }).then(response => response.data); 
     }

    /**************************** */
    getDiscount =(discount_code:string)=>{
      return Axio.get<DiscountType>('getDiscount', {
          params: {
            discount_code: discount_code,
          }
        }).then(response => response.data); 
    }

    /**************************** */
    getProductType =()=>{
    return Axio.get('get_product_type').then(response => response.data); 
  }

    /******************************* */
    submitform = (url:string, body:any) => {
      //let api = apiUrl + url;
      
      let data = new FormData();
      for(let key in body){
          if( body[key] != null && Array.isArray(body[key]) ){  
              for(let i in body[key]){
                  data.append(key + '[]', body[key][i]);                       
              }        
          } else {
              data.append(key, body[key]);    
          }  
      } 
      
      return Axio({
        method: 'POST',
        headers : {
          'Content-Type' : 'multipart/form-data'
        },          
        url: url,
        data: data,         

      }).then(response => response.data);  

    };
    /********************************/
    createOrder = (paras:any) => {
      return Axio.post('create_order',  qs.stringify(paras), config).then(
        response => response.data)
    }    

      /********************************/
      addOrUpdateProduct = (paras:any) => {
        return Axio.post('product',  qs.stringify(paras), config).then(
          response => response.data)
      }

       /**************************** */
       getorders =(user_id:number)=>{
        return Axio.get('orders'
          // , {
          //   params: {
          //     user_id: user_id,
          //   }
          // }
        ).then(response => response.data); 
     }

      /**************************** */
      getorder =(order_id:number)=>{
        return Axio.get('order', {
            params: {
              order_id: order_id,
            }
          }
        ).then(response => response.data); 
      }
      /**************************** */
      login =(params:any)=>{
        return Axio.post('login', qs.stringify(params), config).then(response => response.data); 
      }  
      

       /**************************** */
       logout =(params:any)=>{
        return Axio.get('logout').then(response => response.data); 
      } 
      
      /**************************** */
      register =(params:any)=>{
        return Axio.post('register', qs.stringify(params), config).then(response => response.data); 
      } 

       /**************************** */
       checkEmail =(params:any)=>{
        return Axio.post('checkemail', qs.stringify(params), config).then(response => response.data); 
      }
  }
  
  
  export default new ProductService(); 