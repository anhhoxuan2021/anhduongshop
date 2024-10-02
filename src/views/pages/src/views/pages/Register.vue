<template>
<div class="container py-4">
    <div class="row justify-content-center">
        <div class="col-md-10 col-ms-12 col-xs-12">
            <div class="card">
                <div class="card-header">Register</div>
                <div class="card-body bg-white">                   
                    <form  id="register-form">

                        <div class="row mb-3">
                            <div class="row">
                                <div class="col-md-6 col-sm-12 col-xs-12">
                                    <label class="col-form-label">First(*)</label>
                                    <input type="text" class="form-control" v-model="first_name" required autofocus>                                   
                                </div>
                                <div class="col-md-6 col-sm-12 col-xs-12">
                                    <label class="col-form-label">Last Name(*)</label>
                                    <input type="text" v-model="last_name" class="form-control" required autofocus>
                                   
                                </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="row">
                                <div class="col-md-6 col-sm-12 col-xs-12">
                                    <label class="col-form-label">Email(*)</label>
                                    <input type="email" v-model="email" :class="['form-control email',{'is-invalid':validEmail}]" required autofocus @change="checkemail">
                                    <span class="invalid-feedback hidden" role="alert" >
                                        <strong>Email required</strong>
                                    </span>
                                </div>
                                <div class="col-md-6 col-sm-12 col-xs-12">
                                    <label class="mb-1">Phone Number(*)</label>
                                    <input type="text" class="form-control phone" v-model="phone">
                                </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="row">
                                <div class="col-md-6 col-sm-12 col-xs-12">
                                    <label class="col-form-label">Password(*)</label>
                                    <input type="password" id="password" name="password" v-model="password" class="form-control"  required autofocus>
                                    <span class="invalid-feedback hidden" role="alert">
                                        <strong>Password required</strong>
                                    </span>
                                </div>
                                <div class="col-md-6 col-sm-12 col-xs-12">
                                    <label class="col-form-label">Confirm Password(*)</label>
                                    <input type="password" v-model="password_confirmation" class="form-control"  required autofocus>

                                </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="row">
                                <div class="col-md-6 col-sm-12 col-xs-12">
                                    <label class="col-form-label">State(*)</label>
                                    <select  v-model="state" class="form-select" @change="gCities">
                                        <option></option>                                      
                                        <option :value="op.code" v-for="(op,index) in stateList" :key="index">{{ op.state }} </option>
                                    </select>
                                </div>
                                <div class="col-md-6 col-sm-12 col-xs-12">
                                    <label class="col-form-label">City(*)</label>
                                    <select v-model="city" class="form-select" @change="gZips">
                                        <option></option>
                                        <option :value="cty.city" v-for="(cty,index) in cities" :key="index">{{ cty.city }} </option>
                                    </select>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="row">
                                <div class="col-md-6 col-sm-12 col-xs-12">
                                    <label class="col-form-label">Zip(*)</label>
                                    <select  v-model="zip" class="form-select">
                                        <option></option>
                                         <option :value="z.zip" v-for="(z,index) in zips" :key="index">{{ z.zip }} </option>
                                    </select>
                                   
                                </div>
                                <div class="col-md-6 col-sm-12 col-xs-12">
                                    <label class="col-form-label">Address(*)</label>
                                    <input type="text" v-model="address" class="form-control" required autofocus>                                    
                                            <span class="invalid-feedback" role="alert" style="display: none;">
                                                <strong>Address required</strong>
                                            </span>
                                   
                                </div>
                            </div>
                        </div>

                        <div class="row mb-2">
                            <div class="col text-center">
                                <button type="button" class="btn btn-primary" id="btn-register" @click="registerF">
                                    &nbsp;&nbsp;&nbsp; Register&nbsp;&nbsp;&nbsp;
                                </button>
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

   import { mapActions } from 'vuex'
   import store from '@/store'

   export default{
        data(){
            return{
                first_name: '',
                last_name:'',
                email:'',
                phone: '',
                password: '',
                password_confirmation:'',
                state:'',
                city:'',
                zip: '',
                address:'',
                stateList :[] as StateCodeType[],
                cities: <String[]>[],
                zips: <String[]>[],
                validEmail: false

            }
        },
        beforeCreate: function() {
            document.body.className = 'bg-white';
            let myDiv = document.getElementById("app");
            myDiv!.setAttribute("style", "max-width:100%;"); 
       },
       created(){
        this.getState()
       },
       methods:{
        ...mapActions(['register']),

        registerF(){
            if(this.password == this.password_confirmation){

            }

            if(this.email =='') {
                this.validEmail = true
                return
            }

            let para = {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                phone:  this.phone,
                password: this.password,
                password_confirmation: this.password_confirmation,
                state: this.state,
                city: this.city,
                zip: this.zip,
                address: this.address,
            }

            //console.log(para)

            this.register(para)
        },

        checkemail(){
            let para = {
                email : this.email
            }
            productsService.checkEmail(para).then((response)=>{
                if(response ==1){
                    this.validEmail= true
                }else{
                    this.validEmail= false
                }
            })
        },

        getState(){
            StateService.getStates()
                .then((response) => {
                this.stateList = response                
                })
                .catch((e: Error) => {
                console.log(e);
                });
        },
        gCities(){
            let state = this.state
            StateService.getCities(state)
                .then((response) => {
                this.cities = response
              
                })
                .catch((e: Error) => {
                console.log(e);
                });
        },

        gZips(){
            let city = this.city
            StateService.getzips(city)
                .then((response) => {
                this.zips = response
                })
                .catch((e: Error) => {
                console.log(e);
                });
        }

       },
       mounted(){
        $('.phone').inputmask('(999) 999-9999');
       }
   }
</script>