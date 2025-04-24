<template>
  <div class="advertisement">
    <img 
      class="advertisement__image" 
      src="../assets/images/advertisement.png"
      alt="advertisement"
    >
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
@import "@/assets/styles/main.scss";

  .advertisement {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    @include media-up(md) { 
      align-items: center;
    }
  }

  .advertisement__image {
    width: 110%;
    margin-top: 63px;

    @include media-up(sm) { 
      width: 70%;
    }

    @include media-up(md) { 
      margin-top: 0;
      width: 42%;
      max-height: 456px;
    }
  }
</style>
