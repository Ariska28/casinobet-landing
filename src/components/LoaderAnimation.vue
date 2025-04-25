<template>
  <div class="loader"></div>
</template>

<script setup>
</script>

<style scoped lang="scss">
  @import "@/assets/styles/main.scss";

  .loader {
    width: 50px;
    height: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: 
      radial-gradient(farthest-side,#4BD700 94%,#0000) top/8px 8px no-repeat,
      conic-gradient(#0000 30%,#4BD700);
    -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);
    animation: loader 1s infinite linear;
  }

  @keyframes loader { 
    100% {
      transform: rotate(1turn)
    }
  }
</style>
