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
            :isError="error.agreement1"
            label="Мне больше 21 года.<br> Я согласен и принимаю <a href='#'>«Правила приема ставок»</a> и <a href='#'>«Политику конциденциальности»</a>"
          />

          <checkbox-item
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

  import { registration } from "@/api/registration.js";
  import { isValidBelarusPhone, isPasswordValid  } from "@/helpers/validation.js";

  import { reactive, ref, watch, computed } from "vue";

  const isLoading = ref(false);

  const error = reactive({
    phone: false,
    password: false,
    agreement1: false,
    agreement2: false
  })

  const formData = reactive({
    phone: '',
    password: '',
    agreement1: true,
    agreement2: true,
  });

  watch(() => formData.phone, () => {
    error.phone = false;
  })

  watch(() => formData.password, () => {
    error.password = false;
  })

  const hasErrors = computed(() => Object.values(error).some(Boolean));

  const onSubmit = async() => { 
    try {
      if (!isValidBelarusPhone(formData.phone)) {
        error.phone = true;
      }

      if (!isPasswordValid(formData.password)) {
        error.password = true;
      }

      if (!formData.agreement1) {
        error.agreement1 = true;
      } else {
        error.agreement1 = false;
      }

      if (!formData.agreement2) {
        error.agreement2 = true;
      } else {
        error.agreement2 = false;
      }

      if (!hasErrors.value) {
        isLoading.value = true;

        console.log(formData)
        const result = await registration(formData);
        console.log(result);
      }
    } catch (error) {
      console.log(error)
    } finally {
      isLoading.value = false;
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
