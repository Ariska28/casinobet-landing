<template>  
  <div class="checkbox-item">
    <input 
      type="checkbox" 
      class="checkbox-input" 
      id="agreement1" 
      name="agreement1" 
      :checked="props.checked"
    >
    <label 
      for="agreement1" 
      class="checkbox-label"
      v-html="props.label"
    > 
    </label>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

  const props = defineProps({
    label: [String, null],
    checked: Boolean,
  });
</script>


<style lang="scss" scoped>
  @import "@/assets/styles/main.scss";

  .checkbox-item {
    display: flex;
    align-items: center;
  }

  .checkbox-input {
    appearance: none;
    -webkit-appearance: none;
  }

  .checkbox-label {
    display: block;
    margin-left: 8px;
    color: $color-gray;
    line-height: 1.27;
  }

  .checkbox-input {
    appearance: none;
    width: 18px;
    min-width: 18px;
    height: 18px;
    border: 1px solid $color-form-border;
    border-radius: 4px;
    background-color: $color-form-bg;
    cursor: pointer;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 0;
  }

  .checkbox-input:checked {
    background-color: $color-accent;
    border-color: $color-accent;
    width: 18px;
    min-width: 18px;
    height: 18px;
    background-image: url('@/assets/images/check-arrow.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
</style>