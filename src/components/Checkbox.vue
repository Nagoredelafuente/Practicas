<script setup>
import { defineProps, ref, defineEmits} from 'vue';

defineProps({
  text: String,
});

const isChecked = ref(false);

const emit = defineEmits(['update:modelValue']);

const handleCheckboxChange = () => {
  emit('update:modelValue', isChecked.value);
};

</script>

<template>
  <div class="checkbox-aceptar">
    <label for="Terminos">
      <input 
        type="checkbox" 
        id="Terminos"
        v-model="isChecked"
        @change="handleCheckboxChange" 
      />
      {{ text }}
    </label>
  </div>
</template>

<style scoped lang="scss">
  .checkbox-aceptar {
    margin-bottom: 20px;
  }

  label {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: black;
  }

  input {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
</style>

