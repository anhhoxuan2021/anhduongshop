<template>
<div class="row">
    <div class="col">
        <label>Product for Sex</label>
        <div class="row mt-2">
            <div class="col">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="prd_sex" v-model="isSex"  value="M" :checked="isFemale">
                    <label class="form-check-label" for="prd_sex">Male</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="prd_sex" v-model="isSex"  value="F" :checked="isMale">
                    <label class="form-check-label" for="prd_sex">Female</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="prd_sex" v-model="isSex"  value="unknown" :checked="isUnknown">
                    <label class="form-check-label" for="prd_sex">Unknown</label>
                </div>
            </div>
        </div>
    </div>
</div>
    
</template>
<script lang="ts">
    import { api_img_path } from '@/services/pathFile'
import { onMounted } from 'vue'
    const config = api_img_path
    export default{
        props:{
            sex:String,
            isClass: {
                type:Boolean,
                required: false,
                default: false
            }

        },
        data(){
            return{
                isFemale:'',
                isMale:'',
                isUnknown:'',
                isSex: this.sex
            }
        },
        methods:{
            returnSex(){
                if(this.sex=='F'){
                  return   this.isFemale = "checked"
                }else if(this.sex=='M'){
                    return   this.isMale = "checked"
                }else{
                    return   this.isUnknown = "checked"
                }

            }
        },
        mounted(){
           this. returnSex()
        }
    }
</script>
