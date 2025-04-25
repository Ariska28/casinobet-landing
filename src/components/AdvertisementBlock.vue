<template>
  <div class="advertisement">
    <img 
      class="advertisement__image" 
      src="../assets/images/advertisement.webp"
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
    overflow: hidden;

    @include media-up(md) { 
      align-items: center;
    }
  }

  .advertisement__image {
    width: 110%;
    margin-top: 63px;

    animation: rotateAndGrow 2.5s infinite linear;

    @include media-up(sm) { 
      width: 70%;
    }

    @include media-up(md) { 
      margin-top: -20px;
      width: 42.7%;
      max-height: 456px;
    }
  }

  @keyframes rotateAndGrow { 
    0% {
      transform: scale(1) rotate(0deg);
    }
  
    10% {
      transform: scale(1.1) rotate(5deg);
    }
  
    30% {
      transform: scale(1.1) rotate(-5deg);
    }
  
    40% {
      transform: scale(1) rotate(0deg);
    }
  }
</style>
