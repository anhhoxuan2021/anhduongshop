<template>
    <div class="brands">
        <HeadSideBar title ="BRANDS"/>
        <div class="my-3 ms-2">
            <FilterBrands :brands="brands"
             @brands-filter = "filterBrand"
            />
        </div>
    </div>

    <div class="product-types">
        <HeadSideBar title ="Product Types"/>
        <div class="my-3 ms-2">
            <FilterProductType :productTypes="filterProductType"
            @product-type-filter = "filterPrdType"
            />
        </div>
    </div>

    <div class="product-types">
        <HeadSideBar title ="Prices"/>
        <div class="my-3 ms-2">
            <FilterPrice :prices="prices"
            @filter-price = "priceFilter" />
        </div>
    </div>

    <div class="support">
        <HeadSideBar title ="Support"/>
        <div class="border-red ">
            <div class="side-bar-bg">
                <img src="../assets/images/online-support_2.png">
            </div>
            <div class="row" style="cursor:pointer">
                    <div class="col-md-12 f-18 c-cd1818  pt-2 ">
                        <div class="box-size ps-3">
                            <span class="child-box fa-rotate-270">
                                <font-awesome-icon :icon="['fas', 'fa-phone']" />                                 
                            </span> 
                            <span class="ps-2 ">Hotline: (090)-111-2222</span>
                        </div>
                    </div>
            </div>
            <div class="row" style="cursor:pointer">
                    <div class="col-md-12 f-18 c-cd1818  pt-2 ">
                        <div class="box-size ps-3">
                            <span class="child-box fa-rotate-270">
                                <font-awesome-icon :icon="['fas', 'fa-phone']" />                                 
                            </span> 
                            <span class="ps-2 ">Hotline: (090)-111-2323</span>
                        </div>
                    </div>
            </div>
            <div class="row pb-2" style="cursor:pointer">
                    <div class="col-md-12 f-18 c-cd1818  pt-2 ">
                        <div class="box-size ps-3">
                            <span class="child-box fa-rotate-270">
                                <font-awesome-icon :icon="['fas', 'fa-phone']" />                                 
                            </span> 
                            <span class="ps-2 ">Hotline: (090)-111-2424</span>
                        </div>
                    </div>
            </div>
        </div>

    </div>
    
    <div class="hot-products  mt-3">
        <HeadSideBar title ="hot products"/>
        <div class="border-red-solid">
            <div class="side-bar-bg-250 ">
                <img src="../assets/images/product/samsung-galaxy-s24-ultra-gia-re-4.jpg">
            </div>
            <div class="row" style="cursor:pointer">
                    <div class="col-md-12 f-18  pt-2 pb-2">
                        <span class="ps-2 ">Price: $1000.00</span>
                    </div>
            </div>
        </div>
    </div>

    <div class="hot-products  mt-3">
        <HeadSideBar title ="Most searched products"/>
        <div class="border-red-solid">
            <div class="side-bar-bg-250 ">
                <img src="../assets/images/product/samsung-galaxy-s24-ultra-gia-re-4.jpg">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import HeadSideBar from '@/components/menu/HeadSideBar.vue';
    import FilterBrands from '@/components/menu/FilterBrands.vue';
    import FilterPrice from '@/components/menu/FilterPrice.vue';
    import FilterProductType from '@/components/menu/FilterProductType.vue';
    export default {    
    components: {
        HeadSideBar,
        FilterBrands,
        FilterPrice,
        FilterProductType
    },
    props:{
        brands:[] as any [],
        filterProductType:[] as any [],
        prices: [] as any [],
    },
    methods: {
        filterBrand(brands: []){
            this.$emit('get-product-brands', brands);
        },

        filterPrdType(productTypes: []){
            this.$emit('get-product-types', productTypes);
        },

        priceFilter(prices: []){
            this.$emit('filter-price', prices);
        }
    }
    }
</script>