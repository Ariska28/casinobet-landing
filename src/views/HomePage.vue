<template>  
  <div class="homepage">
    <nav-bar />

    <advertisement-block/>

    <side-bar/>
  </div>
</template>

<script setup>
  import NavBar from "@/components/NavBar.vue";
  import AdvertisementBlock from "@/components/AdvertisementBlock.vue";
  import SideBar from "@/components/SideBar.vue";
</script>


<style lang="scss" scoped>
  @import "@/assets/styles/main.scss";

  .homepage {
    background-image: url('@/assets/images/mobile-bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    padding: 0;
    margin: 0;
    position: relative;

    @include media-up(sm) { 
      background-position: 50% 40%;
    }

    @include media-up(md) { 
      background-position: 10% bottom;
      background-size: cover;
      background-image: url('@/assets/images/background-main.png');
    }

    @include media-up(xxl) { 
      background-position: center;
    }
  }
</style>