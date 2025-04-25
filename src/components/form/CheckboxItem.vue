<template>  
  <div 
    class="checkbox-item"
  >
    <input 
      type="checkbox" 
      class="checkbox-input"
      :class="{'is-error': props.isError}" 
      :id="props.name" 
      :name="props.name" 
      :checked="modelValue"
      @change="updateInput"
    >
    <label 
      :for="props.name" 
      class="checkbox-label"
      v-html="props.label"
    > 
    </label>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

  const emit = defineEmits(["update:modelValue"]);

  const props = defineProps({
    label: [String, null],
    modelValue: [Boolean, String],
    name: [String, null],
    isError: Boolean,
  });

  const updateInput = () => {
    emit("update:modelValue", !props.modelValue)
  }
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

    &.is-error {
      border-color: $color-error;
    }
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