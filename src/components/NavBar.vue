<template>
  <nav class="nav-bar">
    <img 
      class="nav-bar__logo" 
      src="../assets/images/logo.svg"
      alt="logo"
    >
  </nav>
</template>

<script setup>
</script>

<style scoped lang="scss">
  @import "@/assets/styles/main.scss";

  .nav-bar {
    padding: 35px 16px 6px;
    text-align: center;
  }

  .nav-bar__logo {
    max-width: 175px;
    width: 100%;
    object-fit: cover;
    max-height: 21px;

    @include media-up(md) { 

    }
  }
</style>
