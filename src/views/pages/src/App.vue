
<template>
  <main>
    <component :is="layout">
      <router-view />
  </component>
  </main>
</template>
<script  lang="ts">
import { RouterLink, RouterView } from 'vue-router'
  const defaultLayout = 'default'

  export default {
    beforeCreate: function() {

    },
  computed: {
    layout () {
      // Sử dụng this.$route.meta.layout để kiểm tra xem trong route có khai báo meta tương ứng hay không?
      // Nếu không có khai báo layout -> sẽ hiển thị layout default
      return (this.$route.meta.layout || defaultLayout) + '-layout'
    }
  },
}
</script>
<style scoped>
/*
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
