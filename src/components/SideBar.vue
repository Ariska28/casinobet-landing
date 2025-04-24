<template>
  <div class="sidebar">
    <div class="form">
      <h2 class="form__title">
        Регистрация
      </h2>

      <form>
        <phone-input 
          class="form-item"
        />

        <password-input 
          class="form-item"
        />

        <div class="form-checkbox">
          <checkbox-item 
            class="form-item"
            :checked="true"
            label="Мне больше 21 года.<br> Я согласен и принимаю «Правила приема ставок» и «Политику конциденциальности»"
          />

          <checkbox-item
            label="Я принимаю участие и согласен с условиями бонуса" 
            :checked="true"
          />
        </div>

        <button-submit class="form-button"/>
      </form>
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
    top: -13%;
    right: 0;
    max-height: 131px;

  @include media-up(md) { 
    display: none;
  }
 }

 .form {
    max-width: 380px;
    width: 80%;
    margin: auto;

    @include media-up(md) { 
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
