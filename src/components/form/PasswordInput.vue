<template>  
  <div 
    class="password"
    :class="{'is-error': props.isError}"
  >
    <label 
        for="pass"
      >
        Пароль
      </label>
      
      <div class="password-group">
        <input 
          :type="showPassword ? 'text': 'password'" 
          id="pass" 
          name="pass"
          placeholder="Придумайте пароль"
          :value="modelValue"
          @input="updateInput"
        >

        <button 
          class="password-group__icon button-clean"
          @click="onChangePasswordVisibility"
          type="button"
        >
          <img 
            :src="showPassword 
              ? require('@/assets/images/ic-password-show.svg') 
              : require('@/assets/images/ic-password-hide.svg')"
            alt="Toggle password visibility"
          >
        </button>
      </div>

        <div
          v-if="props.isError"
          class="error-message"
        >
          Пароль должен содержать минимум 6 символов
        </div>
  </div>
</template>

<script setup>
  import { defineEmits, defineProps, ref } from "vue";

  const emit = defineEmits(["update:modelValue"]);

  const props = defineProps({
    modelValue: [String, null],
    isError: Boolean,
  })

  const showPassword = ref(false);

  const onChangePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
  }

  const updateInput = (event) => {
    emit("update:modelValue", event.target.value)
  }
</script>


<style lang="scss" scoped>
  @import "@/assets/styles/main.scss";

  .password {
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

  .password-group {
    position: relative;
  } 

  .password-group__icon {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translate(-50%, -50%)
  } 

  .error-message {
    margin-top: 4px;
    font-size: 13px;
    color: $color-error;
  }
</style>