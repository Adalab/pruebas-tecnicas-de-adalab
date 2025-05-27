<script setup>
import Form from './form/Form.vue'
</script>

<template>
  <header class="header">

  </header>
  <main class="main">
    <Form />
  </main>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.main {
  min-height: 100dvh;
  height: fit-content;
  background-color: var(--color-background-primary);

  background-image:
    radial-gradient(transparent 0.6em, var(--color-background-primary) 0.6em),
    conic-gradient(at 1em 1em, transparent 270deg, #4203 270deg),
    conic-gradient(at 1em 1em, transparent 270deg, #4204 270deg),
    conic-gradient(at 1em 1em, transparent 270deg, #4205 270deg),
    conic-gradient(at 1em 1em, transparent 270deg, #4206 270deg);
  background-size: 1em 1em, 4em 4em, 4em 4em, 4em 4em, 4em 4em;
  background-position-x: 0, 0, 1em, 2em, 3em;
  background-position-y: 0, 0, 3em, 2em, 1em;
}
</style>
