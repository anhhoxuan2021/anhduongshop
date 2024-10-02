

<template>
    
<header class="grid items-center">
    <topbar id=topbar> </topbar>
    <headerbar id="headerbar">
        <div class="container">
            <div class="row h-100  align-items-center media-flex">
                <div class="col-md-10 col-lg-10 col-sm-8 media-xs-7 force-hidden">
                    <img class="w-167" src="../assets/images/logo_1.png" >
                </div>
                <div class="col-md-2 col-lg-2 col-sm-4 media-xs-4 force-hidden" @click="logout" style="cursor:pointer">
                    <div class="row justify-content-center align-items-center  show-modal-login" style="cursor:pointer" v-if="userLogin.id !=null">
                        <div class="col-md-3 col-lg-3" style="cursor: pointer">
                            <div class="box-size-2 bg-orange" >
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
                </div>
            </div>
        </div>
    </headerbar>
</header>
</template>

<script lang="ts">
import { mapState, mapActions } from 'vuex'
import store from '@/store'

    export default{
        data(){
            return {
                isLogin : false,
            }
        },
        computed:{
            ...mapState({
            userLogin: state => state.login
            }),
        },
        methods:{
            ...mapActions([
                'adminlogout'
            ]),

            logout(){
                if(this.userLogin.id !=null){
                    this.adminlogout({})
                }            
             },
        },
        mounted(){
            let isLogin = localStorage.getItem('login') as any
        isLogin =  JSON.parse(isLogin)
        
        if(isLogin.id !=null){  
          //  this.forceUpdate = 1
            store.dispatch('forceUpdateLoginState', isLogin)    
        }
        }
    }
</script>
