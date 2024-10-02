<template>

    <LoginNav/>

    <ModalSuccess />

      <div >
        <slot />

      </div>


  </template>

  <script lang="ts">
  import LoginNav from '@/layouts/LoginNav.vue'
  import ModalSuccess from '@/components/modal/ModalSuccess.vue'

  export default{
    components: {
      LoginNav,
 
      ModalSuccess,

    }
  }
</script>