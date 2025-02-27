<script setup lang="ts">
    import BotonSiguiente from '@/components/BotonSiguiente.vue';
    import PruebaInput from '@/components/PruebaInput.vue';
    import Telefono from '@/components/Telefono.vue';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const nombre = ref("");
    const primerApellido = ref("");
    const telefono1 = ref("");  
    const telefono2 = ref("");

    const redirectToLogIn = () => {
        router.push({ name: 'login' });
    };

    const redirectToMensaje = () => {
    let errores = [];

    if (!nombre.value || !/^[a-zA-Z]+$/.test(nombre.value)) {
        errores.push("El nombre debe contener solo letras y no estar vacío.");
    }

    if (!primerApellido.value || !/^[a-zA-ZÀ-ÿ\s'-]+$/.test(primerApellido.value)) {
        errores.push("El primer apellido no debe estar vacío.");
    }

    if (!telefono1.value) {
        errores.push("El primer teléfono es obligatorio.");
    }

    if (telefono1.value && !/^\d{9}$/.test(telefono1.value)) {
        errores.push("El primer teléfono debe ser un número de 9 dígitos.");
    }

    if (telefono2.value && !/^\d{9}$/.test(telefono2.value)) {
        errores.push("El segundo teléfono debe ser un número de 9 dígitos.");
    }

    if (errores.length > 0) {
        alert("Errores detectados:\n- " + errores.join("\n- "));
        return;
    }

    console.log("Validación exitosa. Redirigiendo...");
    router.push({ name: 'mensaje' });
    };

defineExpose({
    redirectToLogIn,
    redirectToMensaje
});
</script>

<template>
    <div class="pagina">
        <div class="cabecera">
            <nav> 
                <ul>
                    <li>
                        <p @click="redirectToLogIn" class="atras">< Atrás</p>
                    </li>
                </ul>
                <p class="titulo">Nueva cuenta</p>
            </nav>
        </div>
        <div class="container-formulario">
            <h1 class="datos-personales">Tus datos personales</h1>
            <p class="informacion">Para que podamos comunicarnos contigo si es necesario</p>
            <PruebaInput v-model="nombre" inputType="text" text="Nombre" placeholder="Introduce tu nombre"/>
            <PruebaInput v-model="primerApellido" inputType="text" text="Primer Apellido" placeholder="Introduce tu primer apellido"/>
            <PruebaInput inputType="text" text="Segundo Apellido (Opcional)" placeholder="Introduce tu segundo apellido"/>
            <Telefono v-model="telefono1" text="Teléfono" placeholder="00000000"/>
            <hr class="divider">
            <p class="persona">Persona de confianza (opcional)</p>
            <p class="informacion">Le envíaremos notificaciones vía SMS. Si no, deja el formullario en blanco</p>
            <PruebaInput inputType="text" text="Nombre o Alias" placeholder="Introduce tu nombre"/>
            <Telefono v-model="telefono2" text="Teléfono" placeholder="00000000"/>
            <BotonSiguiente @click="redirectToMensaje" :text="'Siguiente'"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
   @media (min-width: 750px) {

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
            overflow: hidden; 
            padding-top: 120px; 
            padding-bottom: 20px; 
        }

        .cabecera {
            width: 100%;
            background-color: #765DF5;
            padding: 15px;
            text-align: center;
            margin-top: 20px; 
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 2rem;
        }

        ul {
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;
        }

        li {
            list-style-type: none;
            margin-top: 30px;
        }

        .atras {
            margin-left: 0;
            font-size: 1.2rem;
            color:white;
            cursor: pointer;
            
        }

        .titulo {
            flex-grow: 1; 
            text-align: center;
            color: white;
            font-size: 1.2rem;
            margin: 0;
            margin-top: 3rem; /* Reduce el margen superior */
            margin-bottom: 0;
        }

        .datos-personales {
            color:black;
        }
        .container-formulario {
            display: flex;
            flex-direction: column;
            background: rgb(246, 242, 242);
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 100%; 
            max-width: 600px; 
            align-items: center;
            margin-top: 40px;
        }

        .persona {
            font-size: 30px;
            margin-bottom: 0;
            margin-top: 1rem;
        }

        .informacion{
            font-size: 1rem;
        }
}


</style>