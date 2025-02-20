<script setup>
import { useTemplateRef } from 'vue';

defineProps({
  text: String
})

const checkbox = useTemplateRef('checkbox');

const changeCheckboxState = () => {
  checkbox.value.checked = !checkbox.value.checked;
}

</script>

<template>
  <div class="checkbox-aceptar">
    <label for="Terms"></label>
    <input ref="checkbox" type="checkbox" name="Terminos" value="Terminos" />
      {{ text }}
  </div>
</template>

<style scoped lang="scss">
  .checkbox-aceptar {
    margin-bottom: 20px;
  }

    label{
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      color:black;
    }

    input {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  .checkbox {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

    label{
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer
    }

    input {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }

</style>
