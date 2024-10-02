<template>
    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="prd_size" v-model="prd_size"  value="S" :checked="isSizeS">
                    <label class="form-check-label" for="prd_size">S</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="prd_size" v-model="prd_size"  value="M" :checked="isSizeM">
                    <label class="form-check-label" for="prd_size">M</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="prd_size" v-model="prd_size"  value="L" :checked="isSizeL">
                    <label class="form-check-label" for="prd_size">L</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="prd_size" v-model="prd_size"  value="XL" :checked="isSizeXL">
                    <label class="form-check-label" for="prd_size">XL</label>
                </div>
</template>