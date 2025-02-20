<script setup>
  import BotonSiguiente from '@/components/BotonSiguiente.vue';
  import PruebaInput from '@/components/PruebaInput.vue';
  import { useRouter } from 'vue-router';
  import Telefono from '@/components/Telefono.vue';

  const router = useRouter();

  function redirectToLogIn() {
      router.push({ name: 'login' });
  }

</script>

<template>
  <header>
  </header>
  <div class="pagina">
    <div class="cabecera">
        <nav>
           
            <ul>
                <li>
                    <p @click="redirectToLogIn" class="atras">< atras</p>
                </li>
            </ul>
            <p class="titulo">Nueva cuenta</p>
        </nav>
    </div>
      <div class="container-formulario">
        <h1>Tus datos personales</h1>
            <p>Para que podamos comunicarnos contigo si es necesario</p>
            <PruebaInput inputType="email" text="Nombre" placeholder="Introduce tu nombre"/>
            <PruebaInput inputType="email" text="Primer Apellido" placeholder="Introduce tu primer apellido"/>
            <PruebaInput inputType="email" text="Segundo Apellido (Opcional)" placeholder="Introduce tu segundo apellido"/>
            <Telefono text="Teléfono" placeholder="00000000"/>
            <hr class="divider">
            <p>Persona de confianza (Opcional)</p>
            <p>Le envíaremos notificaciones vía SMS. Sin no, deja el formullario en blanco</p>
            <PruebaInput inputType="email" text="Nombre o Alias" placeholder="Introduce tu nombre"/>
            <Telefono text="Teléfono" placeholder="00000000"/>
            <BotonSiguiente text="Siguiente"/>
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
            flex-direction: column;
        }

        body {
            display:flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin:0;
        }

        .cabecera {
            width: 100%;
            background-color: #765DF5;
            padding: 15px; // Misma altura que el header
            text-align: center;
            margin-top: 30px; // Ajusta según la altura total del header
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 2rem;
            
        }

        .titulo {
            flex-grow: 1; /* Ocupa todo el espacio disponible */
            text-align: center; /* Centra el texto dentro del espacio disponible */
            color: white;
            font-size: 1.2rem;
            margin: 0;
            margin-top: 6rem;
            margin-bottom: 0;
        }

        ul {
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;
        }

        li {
            list-style-type: none;
            margin-top: 90px;
        }

        .atras {
            margin-left: 0; /* Mantiene "< atrás" a la izquierda */
            font-size: 1.2rem;
            color:white;
            cursor: pointer;
            
        }


        p{
            color:black;
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
            margin-top: 30px;
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
            margin: 10px 0;
        }
    }
</style>