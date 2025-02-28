<script setup>
import BotonSiguiente from "@/components/BotonSiguiente.vue";
import BotonVisibilidad from "@/components/BotonVisibilidad.vue";
import IniciarSesion from "@/components/IniciarSesion.vue";
import PruebaInput from "@/components/PruebaInput.vue";
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();

const email = ref("");
const password = ref("");

function validarEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function redirectToReservaValidation() {
  console.log("Email ingresado:", email.value);
  console.log("Contraseña ingresada:", password.value);

  let errores = [];

  if (!validarEmail(email.value)) {
    errores.push("Por favor, introduce un correo electrónico válido.");
  }

  if (!password.value) {
    errores.push("Por favor, introduce tu contraseña.");
  }
  
  if (errores.length > 0) {
    alert("Errores detectados:\n- " + errores.join("\n- "));
    return;
  }

  console.log("Validación exitosa. Redirigiendo...");
  router.push({ name: "ref" });
}

function redirectToSignUp() {
  router.push({ name: "newaccount" }); 
}
</script>

<template>
  <header></header>
  <div class="pagina">
    <div class="container-formulario">
      <h1 class="access-robot">Access Robot</h1>
      <img src="@/assets/image/ARturo.png" alt="robot" />
      <p>Iniciar sesion</p>
      <PruebaInput
        v-model="email"
        inputType="email"
        placeholder="Introduce tu email"
      />
      <BotonVisibilidad
        v-model="password"
        :showValidations="false"
        placeholder="Introduce tu contraseña"
      />
      <BotonSiguiente @click="redirectToReservaValidation" text="Entrar" />
      <button class="subrayado">¿Has olvidado tu contraseña?</button>
      <hr class="divider" />
      <p class="tienes-cuenta">¿No tienes cuenta?</p>
      <IniciarSesion @click="redirectToSignUp" text="Ir a crear nueva cuenta" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@media (min-width: 750px) {
  .pagina {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }

  p {
    color: black;
    font-size: 1rem;
    margin-bottom: 5%;
  }

  .access-robot{
    color: #000000;
  }

  .tienes-cuenta {
    background: none;
    border: none;
    color: black;
    font-size: 1rem;
  }
  .container-formulario {
    display: flex;
    flex-direction: column;
    background: rgb(246, 242, 242);
    padding: 3rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px;
    align-items: center;
  }

  .container-formulario img {
    width: 100px;
    margin-bottom: 1rem;
  }

  .subrayado {
    background: none;
    border: none;
    padding: 0;
    color: black;
    font-size: 1rem;
    text-decoration: underline;
    margin-top: 5%;
    cursor: pointer;
  }

  .divider {
    width: 100%;
    border: none;
    border-top: 1px solid #000000;
    margin: 20px 0;
  }

  .error {
    color: red;
    font-size: 0.875rem;
    margin-top: 1rem;
  }
}
</style>
