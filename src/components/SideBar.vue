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
          :isError="isPhoneError"
        />

        <password-input 
          class="form-item"
          v-model="formData.password"
          :isError="isPasswordError"
        />

        <div class="form-checkbox">
          <checkbox-item 
            class="form-item"
            v-model="formData.agreement1"
            label="Мне больше 21 года.<br> Я согласен и принимаю «Правила приема ставок» и «Политику конциденциальности»"
          />

          <checkbox-item
            label="Я принимаю участие и согласен с условиями бонуса" 
            v-model="formData.agreement2"
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
      v-if="isLoading"
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

  import { reactive, ref, watch } from "vue";

  const isPhoneError = ref(false);
  const isPasswordError = ref(false);
  const isLoading = ref(false);

  const formData = reactive({
    phone: '',
    password: '',
    agreement1: true,
    agreement2: true,
  });

  watch(() => formData.phone, ()=> {
    isPhoneError.value = false;
  })

  watch(() => formData.password, ()=> {
    isPasswordError.value = false;
  })

  const isValidBelarusPhone = (phone) => {
    const regex = /^(\+375|375)(25|29|33|44|17)\d{7}$/;
    return regex.test(phone.replace(/\D/g, ''));
  }

  const isPasswordValid = (password) => {
    return password.length >= 6;
  }

  const onSubmit = () => {
    if(!isValidBelarusPhone(formData.phone)) {
      isPhoneError.value = true;
    } else {
      isPhoneError.value = false;
    }

    if (!isPasswordValid(formData.password)) {
      isPasswordError.value = true;
    } else {
      isPasswordError.value = false;
    }

    if (!isPhoneError.value || !isPasswordError.value) {
      isLoading.value = true;
      setTimeout(() => {

        window.location.reload();

        isLoading.value = false;
      },  5000)
    }
  }
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
