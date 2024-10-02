<template>
<div class="row">
    <div class="col">
        <label>Product Size(Inch)</label>
        <div class="row mt-2">
            <div class="col">
                <input type="number" class="form-control" v-model="product_size" @change="changeValue">
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
            prodSize:String,

        },
        data(){
            return{
                product_size: this.prodSize
            }
        },
        methods:{
            changeValue(){                
                this.$emit('change-size', this.product_size);
            }
        },
        mounted(){
           
            
        }
    }
</script>
