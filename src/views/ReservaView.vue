<script setup>
import ReservaUno from '@/components/ReservaUno.vue';
import ReservaDos from '@/components/ReservaDos.vue';
import CarritoIcon from '@/assets/icons/CarritoIcon.vue';
import TrainIcon from '@/assets/icons/TrainIcon.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();

const redirectToLogIn = () => {
    router.push({ name: 'login' });
 };

const MenuVisible =ref(false);

const toggleMenu= () => {
    MenuVisible.value = !MenuVisible.value;
}

</script>
<template>
    <div class="pagina">
        <div class="cabecera">
            <div class="container-imagen">
                <p @click="redirectToLogIn" class="atras">< Atrás</p>
                <img class="menu-image" src="@/assets/image/menu.png">
                <h1>¡Hola, Julia!</h1>
            </div>
            <hr class="linea">
            <div class="display">
                <h2>Tus reservas</h2>
                <ReservaDos @click="toggleMenu" text="Nueva +"/>
            </div>
            <div v-if="MenuVisible" class="menu">
                <p>¿Donde quieres ir?</p>
                <ul>
                    <li>
                        <ReservaUno text=" Centro comercial" :icon="CarritoIcon"/>
                    </li>
                    <li>
                        <ReservaUno text="Estación de tren" :icon="TrainIcon"/>
                     </li>
                </ul>
            </div>
        </div>
        <p>Aún no has reservado ningún acompañamiento,</p>
        <p>¿por qué no pruebas a reservar uno?</p>
        <img src="@/assets/image/Reserva.png" alt="">
    </div>
</template>
<style>
    .pagina {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            min-height: 100vh;
            background-color: #f5f0f0;
            flex-direction: column;
            overflow: auto; 
            padding-top: 80px;
            padding-bottom: 50px; 
  
    h1{
        color: white;
    }

    h2{
        color:white;
    }

    p {
        color: black;
        font-style: bold;
        font-size: 1.2rem;
    }
    
    }

    .atras {
        margin-left: 0;
        font-size: 1rem;
        color: white !important;
        cursor: pointer;
        position: absolute;   
          top: 90px;    
        left: 10px;;    
    }

    .cabecera {
        width: 100%;
        background-color: #765DF5;
        padding: 80px;
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10; 
    }

    .container-imagen {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px; 
    }

    .menu-image {
        width: 50px;
        height: auto; 
    }

    .linea {
        width: 100vw; 
        border: none;
        border-top: 1px solid white;
        margin: 0; 
        position: absolute; 
        left: 0; 
        top: 80px; 
        margin-top: 55px;
    }

    .display {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 20px;
        border-radius: 2rem;
        margin-top: 20px;
    }

    .menu{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .menu p {
        text-align: center; 
        color:white;
        font-size: 1.2rem; 
        margin-bottom: 10px;
    }

    .menu ul {
        list-style: none;
        padding: 10px;
        margin: 0;
        display: flex;
        flex-direction: row; 
        justify-content: center;
        gap: 15px;
    }

    .menu li {
        padding: 9px 12px;
        cursor: pointer;
    }

    .menu li:hover {
        background-color: #5e4ac1;
    }

    
</style>