<script setup>
import { ref } from 'vue'
import axios from 'axios';

import { validateField, isNotEmpty, isNotFullname, isNotEmail, isNotPhone } from '../../lib/validator.js'
import Input from './FormInput.vue'
import TextArea from './FormText.vue'
import FormButtons from './FormButtons.vue'

const SERVER_URL = import.meta.env.PROD ? '/api/form' : 'http://localhost:4000/api/form';

const INITIAL_DATA = {
  fullname: "",
  email: "",
  phone: "",
  message: ""
}

const data = ref({ ...INITIAL_DATA });
const errors = ref({ ...INITIAL_DATA });
const dataPost = ref(null);

function validateAllFields() {
  errors.value.fullname = validateField(data.value.fullname, 'del nombre completo', [isNotEmpty, isNotFullname]);
  errors.value.email = validateField(data.value.email, 'email', [isNotEmpty, isNotEmail]);
  errors.value.phone = validateField(data.value.phone, 'teléfono', [isNotEmpty, isNotPhone]);
  errors.value.message = validateField(data.value.message, 'mensaje', [isNotEmpty]);

  if (Object.values(errors.value).some(value => value)) {
    // There's some fields don't pass the checks.
    return false;
  }

  return true;
}

function handleSubmit(ev) {
  ev.preventDefault();

  if (validateAllFields()) {
    console.log('Submitting...');
    console.log(Object.values(data.value));

    dataPost.value = 'sending';

    const endSpinnerTime = (new Date()).getTime() + 500;

    axios.post(SERVER_URL, data.value)
      .then(function (response) {
        console.log(response);

        const now = (new Date()).getTime();

        setTimeout(() => {
          dataPost.value = 'sent';
          setTimeout(() => {
            dataPost.value = null;
            data.value = { ...INITIAL_DATA };
          }, 1500);
        }, Math.max(endSpinnerTime - now, 0));
      })
      .catch(function (error) {
        console.log(error);

        const now = (new Date()).getTime();

        setTimeout(() => {
          dataPost.value = error.response.data.error;
        }, Math.max(endSpinnerTime - now, 0));
      });
  }
}

</script>

<template>
  <form class="form" @submit="handleSubmit">
    <Input name="fullname" label="Nombre" placeholder="Ej: Paquita Salas" v-model="data.fullname"
      :error="errors.fullname" />

    <Input name="email" label="Email" type="email" placeholder="Ej: email@direccion.com" v-model="data.email"
      :error="errors.email" />
    <Input name="phone" label="Teléfono" type="tel" placeholder="Ej: +34 555 123 456" v-model="data.phone"
      :error="errors.phone" />
    <TextArea name="message" label="Mensaje" placeholder="Ej: Motivo del contacto" v-model="data.message"
      :error="errors.message" />

    <FormButtons :dataPost="dataPost" />
  </form>
</template>

<style>
.form {
  translate: 0 25dvh;
  min-height: 75dvh;
  max-width: 768px;
  margin-inline: auto;

  border: solid 1px var(--color-text-primary);
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  padding: 2rem;

  background-color: var(--color-background-secondary);
}

@media (height > 768px) {
  .form {
    translate: 0 35dvh;
    min-height: 65dvh;
  }
}

@media (width > 768px) {
  .form {
    box-shadow: .5rem .5rem 1rem 0 #333333;
  }
}

.form__line {
  position: relative;
  margin-bottom: 1rem;
  margin-inline: 1rem;
}

.form__label {
  position: absolute;
  top: .75em;
  left: .5em;
  transition-property: top, left, font-size;
  transition-duration: .25s;
  color: hsl(from var(--color-text-input) h s calc(l + 50));
  font-size: 1.25rem;
}

.form__input {
  width: 100%;
  height: 2em;
  padding-block: .5em;
  padding-inline: .5em;
  border: solid 2px var(--color-text-secondary);
  outline: solid 2px white;
  border-radius: .5em;
  font-size: 1.5rem;
}

.form__label:has(+ .form__input:focus),
.form__label:has(+ .form__input:not(:placeholder-shown)) {
  top: -.5em;
  left: 1em;
  font-size: 1rem;
  color: var(--color-text-secondary);
  text-shadow:
    2px 2px 0 white,
    -2px 2px 0 white,
    -2px -2px 0 white,
    2px -2px 0 white;
  transition-duration: .1s;
}

.form__input:focus {
  outline-color: darkcyan;
  outline-width: 1px;
}

.form__input::placeholder {
  color: white;
  transition-property: color;
  transition-duration: .25s;
}

.form__input:focus::placeholder {
  color: hsl(from var(--color-text-input) h s calc(l + 50));
  font-size: 1.25rem;
}


.form__error {
  margin-block: 0.5em;
  margin-inline: 1em;

  color: var(--color-text-error);
  font-size: 1rem;
  line-height: 1.5rem;
  min-height: 1.5rem;
  font-weight: 600;
}

.form__buttons {
  margin-bottom: 1rem;
  margin-inline: 1rem;
  display: flex;
  justify-content: flex-end;
}

.form__btn {
  background-color: var(--color-background-primary);
  color: var(--color-background-input);
  padding-block: .25em;
  padding-inline: 1em;
  border: solid 2px hsl(from var(--color-background-primary) h s calc(l - 15));
  /* outline: solid 2px var(--color-background-input); */
  border-radius: .5em;
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;
}
</style>