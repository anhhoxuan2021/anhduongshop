<template>
                <div class="d-flex f-18 mt-3" style="cursor: pointer">
                <div class="triangle-light-5c636a"></div>
                <div class="retangle-light-5c636a">
                   {{page1}}
                </div>
                <div class="triangle-right-5c636a"></div>
                <div class="triangle-888"></div>
                <div class="retangle-888">
                    {{fa_font}}
                    
                    &nbsp; {{ page2 }}
                </div>
                <div class="triangle-right-888"></div>                
            </div>
</template>
<script lang="ts">
export default{
    props:{
        fa_font: String,
        fa_specific: String,
        page1: String,
        page2: String,
        page3: String

    }
}
</script>