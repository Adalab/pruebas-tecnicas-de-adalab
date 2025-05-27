<script setup>
const props = defineProps({
  dataPost: [String, null],
});
</script>

<template>
  <div class="form__buttons">
    <p v-if="dataPost !== null && dataPost !== 'sending' && dataPost !== 'sent'" class="form__error">
      {{ dataPost }}
    </p>
    <button v-if="dataPost !== 'sending' && dataPost !== 'sent'" class="form__btn" type="submit">Enviar</button>
    <button v-if="dataPost === 'sending'" class="form__btn" type="button" disabled>Enviando <span
        class="spinner"></span></button>
    <button v-if="dataPost === 'sent'" class="form__btn" type="button" disabled>Enviado!</button>
  </div>
</template>

<style scoped>
.spinner {
  display: inline-block;
  width: 1em;
  height: 1em;
  margin-left: 1em;

  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-left-color: var(--color-text-error);

  animation: spin 1s ease infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>