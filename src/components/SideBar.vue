<template>
  <div class="sidebar">
    <div class="form">
      <h2 class="form__title">
        Регистрация
      </h2>

      <form> 
        <phone-input 
          class="form-item"
          v-model="formData.phone"
          :isError="error.phone"
        />

        <password-input 
          class="form-item"
          v-model="formData.password"
          :isError="error.password"
        />

        <div class="form-checkbox"> 
          <checkbox-item 
            class="form-item"
            v-model="formData.agreement1"
            name="agreement1"
            :isError="error.agreement1"
            label="Мне больше 21 года.<br> Я согласен и принимаю <a href='#'>«Правила приема ставок»</a> и <a href='#'>«Политику конциденциальности»</a>"
          />

          <checkbox-item
            name="agreement2"
            label="Я принимаю участие и согласен с <a href='#'>условиями бонуса</>" 
            v-model="formData.agreement2"
            :isError="error.agreement2"
          />
        </div>

        <button-submit 
          class="form-button"
          @click.prevent="onSubmit"
          :disabled="isLoading"   
        />
      </form>
    </div>

    <div 
      v-if="!isLoading"
      class="sidebar-loader"
    >
      <loader-animation/>
    </div>

    <img 
      class="sidebar__image" 
      src="../assets/images/gold-min.png"
      alt=""
      aria-hidden="true"
    >
  </div>
</template>

<script setup>
  import ButtonSubmit from "@/components/form/ButtonSubmit.vue";
  import PasswordInput from "@/components/form/PasswordInput.vue";
  import PhoneInput from "@/components/form/PhoneInput.vue";
  import CheckboxItem from "@/components/form/CheckboxItem.vue";
  import LoaderAnimation from "@/components/LoaderAnimation.vue";


  import { isValidBelarusPhone, isPasswordValid  } from "@/helpers/validation.js";

  import { watch, computed } from "vue";

  import { useStore } from 'vuex';

  const store = useStore();

  const formData = computed({
    get: () => store.state.registration.form,
    set: (value) => {
      Object.keys(value).forEach(field => {
        store.commit('registration/UPDATE_FIELD', { field, value: value[field] });
      });
    }
  });

  const error = computed(() => store.state.registration.errors);
  const isLoading = computed(() => store.state.registration.isSubmitting);
  const hasErrors = computed(() => store.getters['registration/hasErrors']);

  watch(() => formData.value.phone, () => {
    store.commit('registration/SET_ERROR', { 
      field: 'phone', 
      error: false 
    });
  });

  watch(() => formData.value.password, () => {
    store.commit('registration/SET_ERROR', { 
      field: 'password', 
      error: false 
    });
  });

  watch(() => formData.value.agreement1, () => {
    store.commit('registration/SET_ERROR', { 
      field: 'agreement1', 
      error: false 
    });
  });

  watch(() => formData.value.agreement2, () => {
    store.commit('registration/SET_ERROR', { 
      field: 'agreement2', 
      error: false 
    });
  });

  const onSubmit = async () => { 
    if (!isValidBelarusPhone(formData.value.phone)) {
      store.commit('registration/SET_ERROR', { 
        field: 'phone', 
        error: true 
      });
    }

    if (!isPasswordValid(formData.value.password)) {
      store.commit('registration/SET_ERROR', { 
        field: 'password', 
        error: true 
      });
    }

    if (!formData.value.agreement1) {
      store.commit('registration/SET_ERROR', { 
        field: 'agreement1', 
        error: true 
      });
    }

    if (!formData.value.agreement2) {
      store.commit('registration/SET_ERROR', { 
        field: 'agreement2', 
        error: true 
      });
    }

  if (!hasErrors.value) {
    await store.dispatch('registration/submitForm', formData.value);
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/main.scss";

 .sidebar {
  position: absolute;
  border-radius: 24px 24px 0 0;
  bottom:0;
  right: 0;
  height: 426px;
  width: 100%;
  background-color: $color-dark;
  display: flex;
  align-items: center;
  z-index: 200;

  @include media-up(md) { 
    top: 0;
    width: 40%;
    height: 100%;
    border-radius: 0;
    background-color: rgba(0,0,0,0.7);
    backdrop-filter: blur(6px);
  }

  @include media-up(xl) { 
    width: 580px;
  }
 }

 .sidebar__image {
    position: absolute;
    top: -16%;
    right: 0;
    max-height: 150px;

  @include media-up(md) { 
    display: none;
  }
 }

 .sidebar-loader {
   position: absolute;
   display: flex;
   justify-content: center;
   align-items: center;
   top: 0;
   left: 0;
   height: 100%;
   width: 100%;
   background-color: rgba(0,0,0,0.4);

   @include media-up(md) { 
      align-items: center;
  }
 }

 .form {
    max-width: 380px;
    width: 74.4%;
    margin: auto;
    margin-top: 36px;
    margin-bottom: 48px;

    @include media-up(md) {
      margin-top: 0;
      margin-bottom: 0; 
    }

    @include media-up(xl) { 
      max-width: 380px;
    }
 }

 .form__title {
    font-size: 22px;
    font-weight: 500;
    line-height: 1.27;
    margin-bottom: 22px;
 }

 .form-item {
  margin-bottom: 8px;
 }

 .form-checkbox {
    margin-top: 22px;
 }

 .form-button {
  margin-top: 22px;
 }

</style>
