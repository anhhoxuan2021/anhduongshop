<template>
    <div class="products">
        <HeadSideBar title ="PRODUCTS"/>
        <ul class="side-bar p-t-1">
            <li class="bg-color-red">
                <router-link to="/laptops" class=""  >
                    LAPTOP
                </router-link>
            </li>
            <li class="bg-color-red">
                <router-link to="/" class=""  >
                    IPAD
                </router-link>
            </li>
            <li class="bg-color-red">
                <router-link to="/" class=""  >
                    HANNDSET
                </router-link>
            </li>
            <li class="text-uppercase bg-color-red">
                <router-link to="/" class=""  >
                    Computer accessories
                </router-link>
            </li>
            <li class="text-uppercase bg-color-red">
                <router-link to="/" class=""  >
                    household electrical appliances
                </router-link>
            </li>
            <li class="text-uppercase bg-color-red">
                <router-link to="/fashions" class=""  >
                    Fashions
                </router-link>
            </li>
        </ul>
    </div>

    <div class="support">
        <HeadSideBar title ="SUPPORT ONLINE"/>
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
    export default {    
    components: {
        HeadSideBar,
    },
    }
</script>