<template>
     <div class="row row-cols-xs-1 row-cols-sm-1 row-cols-md-2">
        <div class="col" v-for="(productType,index) in productTypes" :key="index">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" v-model="prdTypes" :name="productType" :value="productType" @change="fileterProductType()">
                <label class="form-check-label" :for="productType">{{ productType }}</label>
            </div>
            
        </div>
        
    </div>
</template>
<script lang="ts">
export default{
    props:{
        productTypes:[]
    },
    data(){
        return{
            prdTypes:[] as any [],
        }
    },
    methods:{
        fileterProductType(){
            this.$emit('product-type-filter', this.prdTypes);
        }
    }
}
</script>