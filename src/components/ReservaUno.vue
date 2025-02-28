<script setup>
import { ref } from "vue";

defineProps({
    text: {
        type: String,
        default: 'Nueva'
    },
    icon: {
        type: Object,
        required: true
    }
});

const mostrarOpcionesHora = ref(false);
const mostrarCartaReserva = ref(false);
const horaSeleccionada = ref(null);
const detallesReserva = ref(null);

const mostrarSeleccionHora = () => {
    mostrarOpcionesHora.value = !mostrarOpcionesHora.value;
};

const seleccionarHora = (hora) => {
    horaSeleccionada.value = hora;
    mostrarOpcionesHora.value = false;
    mostrarCartaReserva.value = true;
    detallesReserva.value = { hora: horaSeleccionada.value }; 
    console.log(detallesReserva.value); 
};

</script>

<template>
    <button @click="mostrarSeleccionHora">
        <component :is="icon" class="icono"/>
        {{ text }}
    </button>

    <div v-if="mostrarOpcionesHora" class="seleccion-hora">
        <button @click="seleccionarHora('10:00 AM')" class="hora-opcion">
            10:00 AM
        </button>
        <button @click="seleccionarHora('12:00 AM')" class="hora-opcion">
            12:00 AM
        </button>
        <button @click="seleccionarHora('18:00 PM')" class="hora-opcion">
            18:00 PM
        </button>
    </div>
    <div v-if="mostrarCartaReserva" class="carta-reserva-container">
        <div class="carta-reserva">
            <p class="informacion">
                Tu reserva es para las {{ detallesReserva?.hora || 'No disponible' }}
            </p>
        </div>
    </div>
</template>

<style scoped lang="scss">
button {
    background-color: rgb(255, 255, 255);
    color: #765DF5;
    padding: 40px 20px;
    border-radius: 2rem;
    border-color: white;
    cursor: pointer;
    margin: 10px;
    padding-left: 100px;
    padding-right: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.3s ease-in-out;
}

.icono {
    width: 30px;
    height: 30px;
}

button:hover {
    box-shadow: 0px 8px 15px rgba(118, 93, 245, 0.5); 
    transform: scale(1.05); 
}

.seleccion-hora {
    margin-top: 20px;
    color: #765DF5;
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.hora-opcion {
    color: #765DF5; 
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

.hora-opcion:hover {
    box-shadow: 0px 6px 12px rgba(90, 71, 197, 0.5);
    transform: scale(1.1);
}

.informacion {
    color: white;
}
.carta-reserva-container{
    display: flex;
    flex-direction: column;
}
.carta-reserva {
    display: flex;
    flex-direction: column;
    position: relative;  
    top: 200px;        
    left: 50%;        
    transform: translateX(-50%); 
    background-color: #765DF5;
    padding: 20px; 
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

</style>
