<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  route: {
    type: String,
  },
  placeholder: {
    type: String,
    default: ''
  },
  showValidations: { 
    type: Boolean,
    default: false,
  }
});

const password = defineModel();
const isPasswordVisible = ref(false);
const hasStartedTyping = ref(false); 

const validationRules = [
  { id: 'length', regex: /.{8,16}/, message: 'Entre 8 y 16 caracteres' },
  { id: 'case', regex: /(?=.*[a-z])(?=.*[A-Z])/, message: 'Al menos una mayúscula y una minúscula' },
  { id: 'number', regex: /(?=.*\d)/, message: 'Al menos un número' },
];

const validationResults = computed(() => {
  return validationRules.map(rule => ({
    id: rule.id,
    message: rule.message,
    isValid: rule.regex.test(password.value),
  }));
});

function alternarVisibilidadPassword() {
  isPasswordVisible.value = !isPasswordVisible.value;
}

function handleTyping() {
  if (!hasStartedTyping.value) {
    hasStartedTyping.value = true;
  }
}
</script>

<template>
    <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
    </head>

    <div class="form-group" :to="route">
        <label for="contraseña">Contraseña</label>
        <div class="password-container">
            <input 
                :type="isPasswordVisible ? 'text' : 'password'" 
                id="contraseña"
                v-model="password" 
                name="contraseña"
                :placeholder="placeholder"
                maxlength="50"
                required
                @input="handleTyping"
            />
            <button 
                type="button" 
                class="toggle-password" 
                @click="alternarVisibilidadPassword"
                aria-label="Mostrar/Ocultar contraseña"
            >
                <span class="material-symbols-outlined">
                    {{ isPasswordVisible ? 'visibility_off' : 'visibility' }}
                </span>
            </button>
        </div>

        <div class="validation-messages" v-if="showValidations && hasStartedTyping">
            <p 
                v-for="rule in validationResults" 
                :key="rule.id" 
                :class="{ 'valid': rule.isValid, 'invalid': !rule.isValid }"
            >
                <span class="material-symbols-outlined">
                    {{ rule.isValid ? 'check_circle' : 'cancel' }}
                </span>
                {{ rule.message }}
            </p>
        </div>
    </div>
</template>

<style>
  .form-group {
    width: 100%;
    margin-bottom: 1rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #000;
  }

  input::-ms-reveal, input::-webkit-credentials-auto-fill-button {
    display: none;
  }

  .password-container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
  }

  .password-container input {
    width: 100%;
    padding: 10px;
    padding-right: 40px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    box-sizing: border-box;
  }

  .toggle-password {
    position: absolute;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #666;
    transition: color 0.3s ease;
    height: 100%;
    padding: 0;
  }

  .material-symbols-outlined {
    font-size: 24px;
    transition: color 0.3s ease;
  }

  .validation-messages {
    margin-top: 10px;
    font-family: Arial, sans-serif;
    font-size: 14px;
  }

  .validation-messages p {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }

  .validation-messages .material-symbols-outlined {
    margin-right: 8px;
    font-size: 20px;
  }


  .invalid {
    color: red;
  }

  .valid {
    color: green;
  }
</style>




