<template>  
  <div class="phone">
    <label 
      for="phone"
    >
      Номер телефона
    </label>

    <input 
      type="tel"
      id="phone"
      name="phone"
      placeholder="+375"
    >
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  @import "@/assets/styles/main.scss";

  .phone {
    label {
      color: $color-gray;
      display: block;
      font-size: 13px;
      margin-bottom: 4px;
    }

    input {
      height: 38px;
      width: 100%;
      background-color: $color-form-bg;
      border: 1px solid $color-form-border;
      border-radius: 6px;
      padding: 0 14px;

      &::placehplder {
        font-size: 13px;
        color: $color-gray-200;
      }
    }
  }
</style>