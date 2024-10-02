<template>
     <div class="row row-cols-xs-1 row-cols-sm-1 row-cols-md-2">
        <div class="col" v-for="(price,index) in prices" :key="index">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" v-model="filterPrice" :name="price" :value="price"
                  @change="filterPrices">
                <label class="form-check-label" for="prd-male">{{ priceString(price) }}</label>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default{
    props:{
        prices:[]
    },
    data(){
        return{
            filterPrice: []
        }
    },

    methods: {
        priceString(price: string){
            let priceTemp = price.split('-')
            return '$'+priceTemp[0] +' - '+'$'+priceTemp[1]
        },

        filterPrices(){
           // console.log(this.filterPrice)
            this.$emit('filter-price', this.filterPrice);
        }
    }

}
</script>