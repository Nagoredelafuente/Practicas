<script setup>

    defineProps({
        text: {
            type: String,
            default: 'Nueva'
        },

        icon: {
             type: Object, 
            required: true
    }

    })
/*
    const mostrarOpcionesHora = ref(false);
    const mostrarCartaReserva = ref(false);
    const horaSeleccionada = ref(null);
    const detallesReserva = ref(null);

    const mostrarSeleccionHora = () => {
        mostrarOpcionesHora.value = true;
    }

    const seleccionarHora = (hora) => {
        horaSeleccionada.value = hora;
        mostrarOpcionesHora.value = false;
        mostrarCartaReserva.value = true;
        detallesReserva.value = {
            hora: horaSeleccionada.value,
        };
    };*/
</script>

<template>
    <button >
        <component :is="icon" class="icono"/>
        {{ text }}
    </button>
<!--
    <div v-if="mostrarOpcionesHora" class="selecciona-hora">
        <button @click="seleccionarHora('10:00 AM')">
            10:00 AM
        </button>
        <button @click="seleccionarHora('12:00 AM')">
            12:00 AM
        </button>
        <button @click="seleccionarHora('18:00 PM')">
            18:00 PM
        </button>
    </div>

    <div v-if="mostrarCartaReserva" class="carta-reserva">
        <p>
            Tu reserva es para las {{ detallesReserva}}
        </p>
    </div>
-->
</template>

<style scoped lang="scss">

button {
    background-color: rgb(255, 255, 255);
    color: #765DF5;
    padding: 40px 20px;
    border: 1r;
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
    
}

.icono {
    width: 30px;
    height: 30px;
}

.seleccion-hora {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.seleccion-hora button {
    background-color: #765DF5;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

.carta-reserva {
    margin-top: 20px;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
}
</style>     

