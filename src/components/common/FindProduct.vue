<template>
    <div class="row mt-2">
        <div class="col-6 block-search">
            <input v-model="valFilter" :class="['form-control me-2 border-dark-red media-search text-search',{'rounded-bottom-lr-none':isShow}]" type="text" placeholder="Search" aria-label="Search" >
                <span class="icon-search" @click="search" style="cursor: pointer;" v-if="!isShow">
                    <font-awesome-icon :icon="['fab', 'fa-sistrix']" /> 
                </span>
                <span class="icon-delete" @click="hiddenSearch" style="cursor: pointer;" v-else >
                    x
                </span>

                <div class=" absolute z-index-10 w-96 rounded-top-none bg-color-f8f8f8"  v-if="isShow">
                    <ul class="filter-product p-t-1">
                        <li class="product-selected d-flex flex-row" v-for="(item, index) in filterResult" :key="item.prd_id" 
                            @click="specificProduct(index,item.prd_id,item.prd_type_group, item.image_present)" >
                            <span class="box-2-2 me-3">
                                <img :src="`${path_img1}/${item.image_present}`" alt="Thiet ke web Anh Ho" >
                            </span>
                            <span>{{item.prd_name}}</span>                            
                        </li>            
                    </ul>
                </div>
        </div>
    </div>
    <div class="row row-cols-6 mt-3">
        <div class="col prd-img-page me-2" v-for="(item, index) in productSlected">
          <img :src="`${path_img1}/${item.image_present}`" alt="Thiet ke web Anh Ho" >
        </div>
    </div>
</template>

<script lang="ts">
import productsService from '@/services/productsService';
import { api_img_path } from '@/services/pathFile'
const config = api_img_path

export default{
    data(){
        return{
            filterResult: [] as any[], 
            isShow: false,
            valFilter:'',
            productSlected:[] as any[],
            prd_suggested: '',
            path_img1:config,
        }
    },
    methods:{
        search(){
            if(this.valFilter !='' && this.valFilter !=null){
                let value = {prd_name: this.valFilter}
                productsService.searchProduct(value).then((response)=>{
                    this.filterResult = response
                    if(response.length >0) {
                        this.isShow = true
                    }else{
                        this.isShow = false
                    }
                    console.log(response.length)
                })
            }else{
                this.isShow = false
            }
            
        },

        hiddenSearch(){
            this.valFilter =''
            this.isShow = false
        },

        specificProduct(index:number, prd_id: number, prd_type_group: string, image_present: string){
            this.productSlected =[...this.productSlected,...[{prd_id:prd_id, prd_type_group:prd_type_group, image_present:image_present}]] 

            let id = prd_id+''

            this.prd_suggested = (this.prd_suggested=='')?id: this.prd_suggested+','+id

            this.filterResult.splice(index,1)

            this.$emit('product-suggested', this.prd_suggested);
        }
    }
}
</script>