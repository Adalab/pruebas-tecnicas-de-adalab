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
  type: {
    type: String,
    default: "text"
  },
  placeholder: String,
  error: String
});

const value = defineModel();
</script>

<template>
  <div class="form__line">
    <label class="form__label" :for="name">{{ label }}</label>
    <input class="form__input" :type="type" :name="name" :id="name" :placeholder="placeholder" v-model="value" />
    <p class="form__error">{{ error }}</p>
  </div>
</template>
