<template>  
  <button 
    class="submit-btn"
    type="submit" 
  >
    РЕГИСТРАЦИЯ
  </button>
</template>

<script setup>

</script>


<style lang="scss" scoped>
  @import "@/assets/styles/main.scss";

  .submit-btn {
    background: $color-accent;
    border-radius: 6px;
    font-size: 14px;
    border: none;
    font-family: $font-family;
    color: $color-text;
    font-weight: 500;
    padding: 15px;
    width: 100%;
    transition: background-color 0.2s ease-in;

    &:hover {
      background: $color-hover;
    }

    &:focus {
      background: $color-focus;
    }
  }
</style>