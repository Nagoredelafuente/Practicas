<script>
  import BotonSiguiente from '@/components/BotonSiguiente.vue';
  import { useRouter } from 'vue-router';

  export default {
    components: {
      BotonSiguiente
    },
    setup() {
      const router = useRouter();
      
      function redirectToReserva() {
        router.push({ name: 'reserva' });
      }

      return {
        redirectToReserva
      };
    }
  }
</script>
<template>
    <div class="pagina">
      <div class="container-formulario">
        <h1 class="accessrobot">AccessRobot</h1>
        <img src="@/assets/image/ARturito.png" alt="robot" />
        <p class="terminado">¡Hemos terminado!</p>
        <p class="primer-parrafo">
          Ya puedes entrar en Access Robots, aunque para reservar acompañamientos
          es necesario que verifiques tu cuenta.
        </p>
        <p class="segundo-parrafo">
          Te hemos enviado un email a %emailUsuario%. 
          Por favor, revisa también la carpeta SPAM.
        </p>
        <div class="mostrar">
          <img src="@/assets/image/emoticono.png" alt="mano" />
          <p class="mostrar">Motrar video en LSE</p>
        </div>
        <BotonSiguiente @click="redirectToReserva"text="Entrar"/>
        
      </div>

    </div>
   
</template>
  
<style scoped>
 
  .pagina {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #f5f0f0;
    flex-direction: column;
    overflow: auto; 
    padding-top: 50px; 
    padding-bottom: 50px; 
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
    max-width: 150px; 
    height: auto; 
    margin-top: 20px;
    margin-bottom: 1rem;
  }

  .accessrobot{
    color:#000;
  }
  .terminado {
    color: black;
    font-weight: bold;
    margin-bottom: 5%;
  } 

  .primer-parrafo, .segundo-parrafo {
    color: black;
    font-size: 1rem;
    margin-bottom: 5%;
  }

  .mostrar {
    display: flex;
    flex-direction: row;
    color: #000;
    text-decoration: underline;
    font-size: 1rem;
    align-items: center;
    justify-content: flex-start; /* Alinea a la izquierda */
    text-align: left;
    width: 100%; /* Ocupar todo el ancho disponible */
  }

  .mostrar img {
    margin-right: 10px;
  }


</style>
