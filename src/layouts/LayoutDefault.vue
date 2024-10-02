<template>
    <div class="header-relative">
        <Header/>
    </div>
    <Nav/>
    <LibraryModal />
    <ModalSuccess />
    <LoginModal />
      <div >
        <slot />

      </div>

      <Footer/>
  </template>

  <script lang="ts">
  import Header from '@/layouts/Header.vue'
  import Nav from '@/layouts/Nav.vue'
  import ModalSuccess from '@/components/modal/ModalSuccess.vue'
  import LibraryModal from '@/components/modal/LibraryModal.vue'
  import LoginModal from '@/components/modal/LoginModal.vue'
  
  import Footer from '@/layouts/Footer.vue'
  export default{
    components: {
      Header,
      Nav,
      
      Footer,
      ModalSuccess,
      LibraryModal,
      LoginModal
    }
  }
</script>