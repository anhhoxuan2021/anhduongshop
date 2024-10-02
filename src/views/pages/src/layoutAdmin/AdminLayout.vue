<template>
  <div class="header-relative">
        <AdminHeader/>
    </div>
    <AdminNavBar/>
    <LibraryModal />
    <ModalSuccess />
      <div class="container bg-white">
        <slot />

      </div>

      <Footer/>
</template>

<script lang="ts">
  import AdminHeader from '@/layoutAdmin/AdminHeader.vue'
  import AdminNavBar from '@/layoutAdmin/AdminNavBar.vue'
  import ModalSuccess from '@/components/modal/ModalSuccess.vue'
   import LibraryModal from '@/components/modal/LibraryModal.vue'
  
  import Footer from '@/layouts/Footer.vue'
  export default{
    components: {
        AdminHeader,
        AdminNavBar,
      
      Footer,
      ModalSuccess,
      LibraryModal
    }
  }
</script>