<template>
    <div class="modal fade" id="login-modal"  tabindex="-1" role="dialog"  aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title"><strong>Login</strong></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">

                </button>
            </div>
            <div class="modal-body bg-white">
                <div class="row justify-content-center">
                    <form>
                        <div class="row mb-3">
                            <label for="email" class="col-md-4 col-form-label text-md-end">Email Address</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" v-model="email" autocomplete="email" autofocus>

                                <span class="invalid-feedback" role="alert" style="display: none;">
                                        <strong>Email required</strong>
                                    </span>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password" class="col-md-4 col-form-label text-md-end">Password</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" v-model="password" required autocomplete="current-password">

                                <span class="invalid-feedback" role="alert" style="hidden">
                                        <strong>Password required</strong>
                                    </span>
                            </div>
                        </div>
                       

                        <div class="row mb-3">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" v-model="remember" value="1" type="checkbox" >

                                    <label class="form-check-label" for="remember">
                                       Remember me
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="button" class="btn btn-primary" @click="loginF">
                                    &nbsp;&nbsp;Login&nbsp;&nbsp;
                                </button>
                                <RouterLink to="/" class="btn btn-link text-danger">Forgot Your Password?</RouterLink>
                               
                            </div>
                        </div>
                        <div class="row mb-0 mt-2">
                            <div class="col-md-8 offset-md-4 ps-0">
                               <RouterLink to="/" class="btn btn-link">Register?</RouterLink>
                            </div>
                        </div>
                    </form>
                    {{hideLoginmodal}}
                </div>
            </div>

        </div>
    </div>
</div>

</template>
<script lang="ts">
import { mapState, mapActions } from 'vuex'
import store from '@/store'
    export default{
        data(){
            return {
                email: '',
                password: '' ,
                remember: 0
            }
        },
        computed:{
            ...mapState({
                userLogin: state => state.login
                }),
            
            hideLoginmodal(){
                if(this.userLogin.id !=null){
                    ($('#login-modal') as any).modal('hide')
                }
                
            }
        },

        methods:{
            ...mapActions([
                'login'
            ]),

            loginF(){
                let para ={
                    email: this.email,
                    password: this.password,
                    remember: this.remember
                }

                this.login(para)
            }
        }
    }
</script>