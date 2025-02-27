<script setup>
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  modelValue: String,  
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
});

const emit = defineEmits(["update:modelValue"]);

const modelo = computed({
  get: () => props.modelValue,  
  set: (value) => emit("update:modelValue", value),  
});

</script>

<template>
  <div class="prueba-input">
    <label>{{ text }}</label>
    <input 
      :type="inputType" 
      :placeholder="placeholder" 
      v-model="modelo" 
      maxlength="100" 
      required
    />
  </div>
</template>

<style scoped lang="scss">
@media (min-width: 1024px) {
  .prueba-input {
    width: 100%;
    margin-bottom: 1rem;
    position: relative;
  }

  label {
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
</style>
