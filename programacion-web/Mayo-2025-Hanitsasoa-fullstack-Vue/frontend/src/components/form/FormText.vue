<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  placeholder: String,
  error: String
})

const value = defineModel();
</script>

<template>
  <div class="form__line">
    <label class="form__label" :for="name">{{ label }}</label>
    <textarea class="form__input" :name="name" :id="name" :placeholder="placeholder" v-model="value"></textarea>
    <p class="form__error">{{ error }}</p>
  </div>
</template>

<style scoped>
textarea.form__input {
  height: calc(2lh + 1em);
  margin-bottom: -0.5rem;
}
</style>