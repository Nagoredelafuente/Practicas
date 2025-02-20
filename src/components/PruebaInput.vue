<script setup>
  defineProps({
    inputType: {
      type: String,
      default: 'text',
    },
    text: {
      type: String,
      default: 'Correo electrónico',
    },
    placeholder: {
        type: String,
        default: ''
    },
  })
</script>

<template>
  <div class="prueba-input">
    <label>{{ text }}</label>
    <input :type="inputType" id="inputType" :placeholder="placeholder" maxlength="100" required/>
  </div>
</template>

<style scoped lang="scss">

@media (min-width: 1024px) {
  .prueba-input {
    width: 100%;
    margin-bottom: 1rem;
    position: relative;

  label{
    display: block;
    margin-bottom: 0.5rem;
    color: #000;

  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

}
}
</style>
