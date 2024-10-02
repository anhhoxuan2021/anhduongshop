import {createStore} from 'vuex'
import type StateFormat from '@/types/StateFormat'
import type CartType from '@/types/CartType'
import type UserType from '@/types/UserType'
import type DiscountType from '@/types/DiscountType'

import type  ProductType  from "@/types/ProductType";
import type {StateType} from '@/types/StateType';

import fashionModule from './fashionModule';
import laptopModule from './laptopModule'
import adminProductModule from './adminProductModule';
import ProductService from '@/services/productsService'


export default createStore<StateType>({
  state:{
    login:{} as UserType,
    itemCart:<CartType[]>([]) ,
    error: false,
    testState: 10,
    discount: <DiscountType>{},
    rememberMe: false

  },
  modules: {
    fashionModule,
    adminProductModule,
    laptopModule
  },
  actions:{
    addProductToCart ({ state, commit }, product:CartType) {
      commit('ADD_PRODUCT_TO_CART', product)
    },

    remindCart ({ state, commit }, product:CartType) {
      commit('ADD_PRODUCT_TO_CART', product)
    },

    changeTestState ({ state, commit }, payload:any) {
      commit('CHANGE_TEST_STATE', payload)
    },

    discountChange ({ state, commit }, payload:any) {
      commit('DISCOUNT_CHANGE', payload)
    },

    async getDiscount({ commit },code:string) {
        ProductService.getDiscount(code)
          .then((response) => {
           // console.log(response);
           localStorage.setItem('shareDiscount',JSON.stringify(response));
          commit('DISCOUNT_CHANGE', response)
            
          })
          .catch((e: Error) => {
            console.log(e);
          });
      },

    login ({ state, commit }, payload:any) {
      ProductService.login(payload)
          .then((response) => {
            if(payload.remember !=undefined){
              //save remember
            }
           // console.log(response);
          commit('COMMIT_LOGIN', response)      
          
          if(response.id !=undefined && response.id !=null){
            window.location.replace("http://localhost:5173/");
        }
          })
          .catch((e: Error) => {
            console.log(e);
          });
    },

    logout ({ state, commit }, payload:any) {
      ProductService.logout(payload)
          .then((response) => {
           if(response==1){
            commit('COMMIT_LOGIN', {})
           }
          
          })
          .catch((e: Error) => {
            console.log(e);
          });
    },

    forceUpdateLoginState({ state, commit }, payload:any){
      commit('COMMIT_LOGIN', payload)
    },

    register ({ state, commit }, payload:any) {
      ProductService.register(payload)
          .then((response) => {
           // console.log(response);
          commit('COMMIT_LOGIN', response)
          
          window.location.replace("http://localhost:5173/");
            
          })
          .catch((e: Error) => {
            console.log(e);
          });
    },
  },
  mutations: {
    ADD_PRODUCT_TO_CART(state:any, payload: CartType) {
      state.itemCart =payload
      //console.log(state.itemCart)
    },
    CHANGE_TEST_STATE(state:any, payload: CartType) {
      state.testState =payload
    },

    DISCOUNT_CHANGE(state:any, payload: DiscountType) {
      state.discount =payload
    },

    COMMIT_LOGIN(state:any, payload: UserType) {
      state.login =payload
      localStorage.setItem('login',JSON.stringify(payload));
      if(payload.token !=undefined){
        localStorage.setItem('token',JSON.stringify(payload.token));
      }else{
        localStorage.setItem('token','');
      }
      
    },
  },


   // getters:{}, 

   // 
  })