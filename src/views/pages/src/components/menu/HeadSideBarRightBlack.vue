<template>
     <div class="relative hgth-50">
        <div class="bar-b-left-black absolute"></div>
        <div class="bar-b-right-888  absolute"></div>
        <div class="line-b-2-888 absolute"></div>
        <div class="absolute div-center-absolute text-white p-s-33 bold text-uppercase">{{ title }}</div>
    </div>
</template>

<script lang="ts">
export default {
    props: [
        'title'
    ]
};
</script>