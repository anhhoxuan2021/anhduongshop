<template>
<div class="container py-4">
    <div class="row justify-content-center">
        <div class="col-md-8 col-ms-12 col-xs-12">
            <div class="card">
                <div class="card-header">Login</div>
                <div class="card-body bg-white">                   
                    <form  id="login-form">
                        <div class="row mb-3">
                            <label for="email" class="col-md-4 col-form-label text-md-end">Email Address</label>
                            <div class="col-md-6">
                                <input type="email" v-model="email" :class="['form-control email',{'is-invalid':validEmail}]" required autofocus @change="checkemail">
                                <span class="invalid-feedback hidden" role="alert" >
                                    <strong>Email required</strong>
                                </span>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="password" class="col-md-4 col-form-label text-md-end">Password</label>
                            <div class="col-md-6">
                                <input type="password" v-model="password" :class="['form-control password',{'is-invalid':validEmail}]" required autofocus @change="checkpass">
                                <span class="invalid-feedback hidden" role="alert" >
                                    <strong>Password required</strong>
                                </span>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" v-model="remember">
                                    <label class="form-check-label" for="remember">Remember Me </label>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="button" class="btn btn-primary" @click="loginF">Login </button>
                                
                                <router-link to="/">Forgot Your Password?</router-link>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script lang="ts">
   import StateService from '@/services/statesService'
   import type StateCodeType from '@/types/StateCodeType'
   import productsService from '@/services/productsService';

   import { mapActions, mapState } from 'vuex'
   import store from '@/store'

   export default{
        data(){
            return{
                email:'',
                password: '',
                remember: '',
                validEmail: false

            }
        },
        beforeCreate: function() {
            document.body.className = 'bg-white';
            let myDiv = document.getElementById("app");
            myDiv!.setAttribute("style", "max-width:100%;"); 
       },
       created(){
        if(this.userLogin.id !=undefined && this.userLogin.id !=null){
            window.location.replace("http://localhost:5173/");
        }
       },

       computed: {
        ...mapState({
            userLogin: state => state.login
        }),
       },
       methods:{
        ...mapActions(['login']),

        loginF(){
            if(this.email =='') {
                this.validEmail = true
                return
            }

            let para = {
                email: this.email,
                password: this.password,
                remember: this.remember,
            }

            //console.log(para)

            this.login(para)  //window.location.replace("http://localhost:5173/");
        },

        
    }
   }
</script>