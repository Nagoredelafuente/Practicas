<script setup>
import { useRouter } from 'vue-router'; // Importar useRouter
import BotonSiguiente from '@/components/BotonSiguiente.vue';
import BotonVisibilidad from '@/components/BotonVisibilidad.vue';
import Checkbox from '@/components/Checkbox.vue';
import IniciarSesion from '@/components/IniciarSesion.vue';
import PruebaInput from '@/components/PruebaInput.vue';

const router = useRouter(); // Inicializar el router

function redirectToSignUp() {
    router.push ({ name: 'newaccount' }); // Redirigir a la ruta de nueva cuenta
}
</script>

<template>
  <header>
  </header>
  <div class="pagina">
      <div class="container-formulario">
            <h1>Access Robot</h1>
            <img src="@/assets/image/ARturo.png" alt="robot" />
            <p>Iniciar sesion</p>
            <PruebaInput inputType="email" placeholder="Introduce tu email"/>
            <BotonVisibilidad placeholder="Introduce tu contraseña"/>
            <BotonSiguiente text="Entrar"/>
            <p class="subrayado">¿Has olvidado tu contraseña?</p>
            <hr class="divider">
            <p>¿No tienes cuenta?</p>
            <!-- Aseguramos que el @click funcione correctamente -->
            <IniciarSesion @click="redirectToSignUp" text="Ir a crear nueva cuenta"/>
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
      background-color: #f5f0f0;
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
      text-decoration: underline;
      margin-top: 5%;
    }

    .divider {
      width: 100%;
      border: none;
      border-top: 1px solid #000000;
      margin: 20px 0;
    }
  }
</style>
