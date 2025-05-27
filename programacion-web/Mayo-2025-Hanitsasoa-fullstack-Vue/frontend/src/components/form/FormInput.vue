<script setup>
const props = defineProps(['name', 'label', 'placeholder', 'error']);

const value = defineModel();
</script>

<template>
  <div class="form__line">
    <label class="form__label" :for="name">{{ label }}</label>
    <input class="form__input" type="text" :name="name" :id="name" :placeholder="placeholder" v-model="value">
    <p class="form__error">{{ error }}</p>
  </div>
</template>