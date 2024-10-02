<template>
     <fieldset class="border p-4 mt-3 " id="prd-attr">
        <legend class="float-none w-auto f-16 bold">PRODUCT ATTRIBUTES</legend>
        <div class="row -mt-15">
            <!--left-->
            <div class="col-6 col-ms-12 col-xs-12 ">
                <ShowSex  :sex="prd_sex" 
                @checkbox-change="checkBoxParent"/>
            </div>
            <!--right-->
            <div class="col-6 col-ms-12 col-xs-12 ">
                <div class="row">
                    <div class="col ps-0">
                        <button class="btn btn-second" @click="addComponent()"><strong>+ ADD PRODUCT'S ATTRIBUTES</strong></button>
                    </div>

                </div>
                <div v-for="(index,component) in addCom" :key="index">
                    <ShowAdditionAtt />
                </div>
                <div v-if="isShow()">
                    <ShowAdditionAtt v-for="(prd_att,index) in prd_attributes_temp" :key="index"
                    :prd_attributes="prd_att" /> 
                </div>
                 
            </div>
        </div>
    </fieldset>
</template>

<script lang="ts">
import ShowSex from './ShowSex.vue';
import ShowAdditionAtt from './ShowAdditionAtt.vue';
import AdditionAtt from './AdditionAtt.vue';
    export default{
        components: {
            ShowSex,
            ShowAdditionAtt,   
            AdditionAtt,        
        },
        props:{
            prd_sex: String,
            prd_att: String
        },
        data(){
            return{
                addCom: <any>[],
                prdSexValue : this.prd_sex,
                prd_attributes_temp:[]
            } 

        },
        computed:{
           
        },
        created(){

        },
        
        methods:{   
            checkBoxParent(sexChanged:any){
               
                this.$emit('parent-checkbox-change', sexChanged);
            },         
            addComponent(){
                let a = {k:1}
                this.addCom.unshift(a)
            } ,
            isShow(){
                if(this.prd_att !=null){
                return true
                }else{
                    return false
                }
            }
        },

        mounted(){
           //console.log(this.prd_att)
           if(this.prd_att !=null && this.prd_att !=undefined &&this.prd_att !=''){
                this.prd_attributes_temp =JSON.parse(this.prd_att)
            }
        }
    }
</script>