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

    @include media-up(md) { 
      padding-top: 80px;
    }
  }

  .nav-bar__logo {
    max-width: 175px;
    width: 100%;
    object-fit: cover;
    max-height: 21px;

    @include media-up(md) { 
      max-width: 331px;
      max-height: 41px;
    }
  }
</style>
