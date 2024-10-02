<template>
   <header class="grid items-center">
    <topbar id="topbar" > </topbar>
    <headerbar id="headerbar">
        <div class="container">
            <div class="row h-100 justify-content-md-center justify-content-sm-start align-items-center media-flex">
                <div class="col-md-2 col-lg-2 col-sm-7 media-xs-7 force-hidden">
                    <img class="w-167" src="../assets/images/logo_1.png" >
                </div>
                <div class="col-md-7 col-lg-4 col-sm-1 block-search media-xs-1 ">
                    <input class="form-control me-2 border-dark-red media-search text-search" type="search" placeholder="Search" aria-label="Search">
                    <span class="icon-search">
                        <font-awesome-icon :icon="['fab', 'fa-sistrix']" /> 
                    </span>
                    <span class="icon-back media-is-hidden hidden-force" style="cursor:pointer">
                        <font-awesome-icon :icon="['fas', 'fa-angle-up fa-rotate-270']" /> 
                    </span>
                </div>
                <div class="col-md-1 col-lg-2 col-sm-1 media-xs-1 force-hidden">
                    <div class="  show-modal-login" @click="showModalLogin" style="cursor:pointer">
                        <div class="row justify-content-center align-items-center" v-if="userLogin.id !=null">
                            <div class="col-md-12 col-lg-3 tooltip-media" style="cursor: pointer">
                                <div class="box-size-2 bg-orange " >
                                    <span class="c-login-success  child-box">
                                        <font-awesome-icon :icon="['fas', 'fa-user']" /> 
                                    </span>
                                </div>
                                <div class="box-size-media">
                                    {{ userLogin.first_name }} {{ userLogin.last_name }}
                                </div>
                            </div>
                            <div class="col-md-0 col-lg-9 media-display-none" >
                                <div class="flex flex-md-column flex-sm-row">
                                    <span class="f-12 c-ededed" id="user-name">{{ userLogin.first_name }} {{userLogin.last_name }}</span>
                                    <span class="f-13 bold c-ededed  media-ps-15 media-color-danger" style="cursor:pointer">
                                        Sign out
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center align-items-center" v-else>
                            <div class="col-md-12 col-lg-3">
                                <div class="box-size-2  bg-orange">
                                    <span class="fa-color-gray-light child-box">
                                        <font-awesome-icon :icon="['fas', 'fa-user']" /> 
                                    </span>
                                </div>
                            </div>
                            <div class="col-md-0 col-lg-9 media-display-none" >
                                <span class="f-12 c-ededed">Account &nbsp;</span>
                                <span class="f-13 bold c-ededed media-ps-15">Sign in</span>

                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="col-md-1 col-lg-2 col-sm-1 media-xs-1 force-hidden">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-md-12 col-lg-3 ">
                            <router-link to="/checkout/cart" class="nav-link  " exact-active-class="text-success" active-class="active">
                            <div class="box-size-2  bg-orange" style="cursor: pointer">
                               <span class="child-box fa-color-gray-light">
                              
                                    <font-awesome-icon :icon="['fas', 'fa-cart-shopping']" /> 
                                    <span class="counter-cicle">
                                        <span class="child-counter-cicle amount-of-product-cart">{{setAmountOfProduct}}</span>
                                    </span>
                                
                               </span>
                            </div>
                            </router-link>
                        </div>

                        <div class="col-md-0 col-lg-9 media-display-none">
                            <span class="f-12 c-ededed">Cart&nbsp;</span>
                            <span class="f-13 bold c-ededed"><span class="amount-of-product-cart">{{setAmountOfProduct}}</span>&nbsp; Products</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-1 col-lg-2 col-sm-1 media-xs-1 force-hidden no_decorate">
                    <router-link to="/orders" class="row justify-content-center align-items-center">
                        <div class="col-md-12 col-lg-3">
                            <div class="box-size-2  bg-orange">
                                <span class="fa-color-gray-light child-box">
                                    <font-awesome-icon :icon="['fas', 'fa-shipping-fast']" /> 
                                </span>
                               
                            </div>
                        </div>

                        <div class="col-md-0 col-lg-9  media-display-none">
                            <span class="f-12 c-ededed">Review &nbsp;</span>
                            <span class="f-13 bold c-ededed">Orders</span>
                        </div>

                    </router-link>
                </div>
            </div>
        </div>
    </headerbar>
</header>

</template>

<script lang="ts">
import type CartType from '@/types/CartType'
import type UserType from '@/types/UserType'
import { mapState, mapActions } from 'vuex'
import store from '@/store'
export default{
    data(){
        return {
            productBuy:[]= store.state.itemCart,
          //  userLogin: {} as any,
            forceUpdate: 0
        }
    },
    computed:{
        ...mapState({
            itemCarts: state=>state.itemCart,
            userLogin: state => state.login
        }),
        setAmountOfProduct(){
           // console.log("khong change")
           // console.log(this.itemCarts)
            if(this.itemCarts.length >0){
                let amount = 0
                this.itemCarts.forEach(function(item){
                    amount += Number(item.amount)
                });
                return amount
                
            }else{
                let amount = 0
                let yourCart_json = localStorage.getItem('yourCart')
                if(yourCart_json !='' && yourCart_json != null && yourCart_json != undefined){
                    let yourCart =<CartType[]>([]);
                    yourCart = JSON.parse(yourCart_json)
                 // store.dispatch('addProductToCart', yourCart)
                  yourCart.forEach(function(item){
                    amount += Number(item.amount)
                });
                return amount
                }else{
                    return 0
                }
                
            }
        },
        // setUserLogin(){
        //     if(this.forceUpdate==0){
        //         this.userLogin =  this.userLogin1
        //     }else{
        //         let isLogin = localStorage.getItem('login') as any
        //         this.userLogin =  JSON.parse(isLogin)
        //     }
            
        // }
    },
    methods: {
        ...mapActions([
                'logout'
            ]),
        checkCart(){
            if(this.productBuy.length >0){
                //console.log("dung")
            }else{
               // console.log("sai sai")
            }

            // var yourCart_json = localStorage.getItem('yourCart')
            // if(yourCart_json !='' && yourCart_json != null && yourCart_json != undefined){

            // }else{

            // }
        },
        showModalLogin(){
            if(this.userLogin.id !=null){
                this.logout({})
            }else{
                ($('#login-modal') as any).modal('show')
            }
            
        }
    },
    mounted(){
        let isLogin = localStorage.getItem('login') as any
        isLogin =  JSON.parse(isLogin)
        
        if(isLogin.id !=null){  
          //  this.forceUpdate = 1
            store.dispatch('forceUpdateLoginState', isLogin)    
        }else{
           // this.forceUpdate = 0
        }
        //this.checkCart()
        // const plugin = document.createElement("script");
		// 	plugin.setAttribute(
		// 	  "src",
		// 	  "/js/login/fashion.js"
		// 	);
		// 	plugin.async = true;
		// 	document.head.appendChild(plugin);
        
    }
}
</script>