<template>
     <div class="row row-cols-xs-1 row-cols-sm-1 row-cols-md-2">
        <div class="col" v-for="(brand,index) in brands" :key="index">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" v-model="filterBrand" :name="brand" :value="brand" @change="fileterBrands()">
                <label class="form-check-label" :for="brand">{{ brand }}</label>
            </div>
            
        </div>
        
    </div>
</template>
<script lang="ts">
export default{
    props:{
        brands:[]
    },
    data(){
        return{
            filterBrand:[] as any [],
        }
    },
    methods:{
        fileterBrands(){
            this.$emit('brands-filter', this.filterBrand);
        }
    }
}
</script>