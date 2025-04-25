<template>
  <nav class="nav-bar">
    <a 
      class="nav-bar__link" 
      href="#"
    >
      <img 
        class="nav-bar__logo" 
        src="../assets/images/logo.svg"
        alt="logo"
      >
    </a>
  </nav>
</template>

<script setup>
</script>

<style scoped lang="scss">
  @import "@/assets/styles/main.scss";

  .nav-bar {
    padding: 35px 16px 6px;
    text-align: center;
    position: relative;
    z-index: 100;

    @include media-up(md) { 
      padding-top: 80px;
    }
  }

  .nav-bar__link {
    display: inline-block;
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
