<template>  
  <div 
    class="phone"
    :class="{'is-error': props.isError}"
  >
    <label 
      for="phone"
    >
      Номер телефона
    </label>

    <div class="phone-group">
      <img 
        class="phone-group__icon" 
        src="@/assets/images/ic-phone.svg"
        alt=""
      >
      <input 
        type="tel"
        id="phone"
        name="phone"
        placeholder="+375"
        :value="modelValue"
        @input="updateInput"
      >
    </div>

    <div 
      v-if="props.isError"
      class="error-message"
    >
      Введите корректный номер телефона 
    </div>
  </div>
</template>

<script setup>
  import { defineEmits, defineProps } from "vue";

  const emit = defineEmits(["update:modelValue"]);

  const props = defineProps({
    modelValue: [String, null],
    isError: Boolean,
  })

  const updateInput = (event) => {
    emit("update:modelValue", event.target.value)
  }
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
      padding: 0 14px 0 58px;

      &::placehplder {
        font-size: 13px;
        color: $color-gray-200;
      }

      &:focus {
        border-color: $color-accent;
      }
    }

    &.is-error {
      input {
        border-color: $color-error;
      }
    }
  }

  .phone-group {
    position: relative;
  }

  .phone-group__icon {
    position: absolute;
    left: 1px;
    border-radius: 6px;
    top: 1px;
    height: 36px;
    width: 44px;
  }

  .error-message {
    margin-top: 4px;
    font-size: 13px;
    color: $color-error;
  }
</style>